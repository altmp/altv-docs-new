import { exec } from 'child_process';
import * as fs from 'fs';
import chalk from 'chalk';

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @param {String?} cwd
 * @return {Promise<{ stdout: String, stderr: String } | undefined>}
 */
async function sh(cmd, cwd) {
    return new Promise(function (resolve, reject) {
        console.log(chalk.gray(`Executing ${chalk.white.bold(cmd)} in ${chalk.white.bold(cwd || '.')}`));
        const proc = exec(cmd, { cwd }, (err, stdout, stderr) => {
            if (err) {
                err.cwd = cwd;
                console.error(chalk.red(`=== Failed to execute ${cmd} in ${cwd || '.'}:\n${String(err)}`));
                resolve(undefined);
            } else {
                resolve({ stdout, stderr });
            }
        });
        proc.stdout.pipe(process.stdout);
        proc.stderr.pipe(process.stderr);
    });
}

/**
 * Check if directlory is empty (async wrapper).
 * @param {String} path
 * @return {Promise<boolean>}
 */
async function isDirEmpty(path) {
    const files = await fs.promises.readdir(path);
    return files.length === 0;
}

async function main() {
    const shit = await sh("git submodule init");

    const files = {
        "./versioned_docs/version-dev": "dev",
        "./versioned_docs/version-rc": "rc",
        "./versioned_docs/version-release": "release",
        "./js_versioned_docs/version-dev/repo": "master",
        "./js_versioned_docs/version-rc/repo": "master",
        "./js_versioned_docs/version-release/repo": "master",
        "./jsv2_versioned_docs/version-dev/repo": "master",
        "./jsv2_versioned_docs/version-rc/repo": "master",
        "./jsv2_versioned_docs/version-release/repo": "master",
    }

    for (const [path, branch] of Object.entries(files)) {
        console.log(chalk.blue('Updating submodule ' + chalk.bold(path)));
        if (await isDirEmpty(path))
            await sh("git submodule update " + path);
        await sh("git checkout " + branch, path);
        await sh("git pull origin " + branch, path);
        console.log();
    }
}

main();