import { exec } from 'child_process';

/**
 * Execute simple shell command (async wrapper).
 * @param {String} cmd
 * @param {String?} cwd
 * @return {Object} { stdout: String, stderr: String }
 */
async function sh(cmd, cwd) {
    return new Promise(function (resolve, reject) {
        console.log(`Executing ${cmd} in ${cwd || '.'}`);
        exec(cmd, { cwd }, (err, stdout, stderr) => {
            if (err) {
                err.cwd = cwd;
                reject(err);
            } else {
                resolve({ stdout, stderr });
            }
        });
    });
}

async function main() {
    await sh("git submodule init");
    await sh("git checkout dev", "./versioned_docs/version-dev");
    await sh("git checkout rc", "./versioned_docs/version-rc");
    await sh("git checkout release", "./versioned_docs/version-release");
    await sh("git checkout master", "./js_versioned_docs/version-dev/repo");
    await sh("git checkout master", "./js_versioned_docs/version-rc/repo");
    await sh("git checkout master", "./js_versioned_docs/version-release/repo");
    await sh("git checkout master", "./jsv2_versioned_docs/version-dev/repo");
    await sh("git checkout master", "./jsv2_versioned_docs/version-rc/repo");
    await sh("git checkout master", "./jsv2_versioned_docs/version-release/repo");
}

main();