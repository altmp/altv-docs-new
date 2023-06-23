// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('./src/theme/highlightDark.js');

const path = require('path');

const versions = {
    release: {
        label: 'Release',
        docpath: '/release',
        banner: 'none',
        badge: false,
    },
    rc: {
        label: 'Release Candidate',
        docpath: '/rc',
        banner: 'none',
        badge: true,
    },
    dev: {
        label: 'Development',
        docpath: '/dev',
        banner: 'none',
        badge: true
    }
};

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'alt:V Documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'http://new-docs.alt-mp.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'altmp', // Usually your GitHub org/user name.
    projectName: 'altv-docs', // Usually your repo name.

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en',
        locales: ['en'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                // pages: {
                //     path: 'src/pages'
                // },
                docs: {
                    lastVersion: 'release',
                    includeCurrentVersion: false,
                    versions: Object.fromEntries(Object.entries(versions).map(([k, v]) => {
                        const obj = {...v, path: v.docpath};
                        delete obj['docpath'];
                        return [k, obj];
                    })),
                    routeBasePath: '/',
                    // exclude: ['**/_*/**'],
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: ({ version, docPath }) => {
                        return `https://github.com/altmp/altv-docs-articles/blob/${version}/${docPath}`;
                    },
                },
                blog: {
                    showReadingTime: true,
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                },
                theme: {
                    customCss: require.resolve('./src/css/altv.css'),
                },
            }),
        ],
    ],

    themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            metadata: [
                {
                    name: 'darkreader-lock',
                    value: ''
                }
            ],
            colorMode: {
                defaultMode: 'dark',
                respectPrefersColorScheme: true,
            },
            image: 'img/social-card.png',
            navbar: {
                logo: {
                    alt: 'alt:V Multiplayer',
                    src: 'img/logo_light.svg',
                    srcDark: 'img/logo.svg',
                },
                items: [
                    {
                        type: 'docSidebar',
                        sidebarId: 'tutorialSidebar',
                        position: 'left',
                        label: 'Docs',
                    },
                    // {
                    //    to: '/blog',
                    //    label: 'Blog',
                    //    position: 'left'
                    //},
                    {
                        type: 'dropdown',
                        label: 'API',
                        position: 'left',
                        items: [
                            {
                                label: 'JavaScript',
                                to: '/api/js',
                            },
                            {
                                label: 'JavaScript v2',
                                to: '/api/jsv2',
                            },
                            {
                                label: 'Natives',
                                href: 'https://natives.altv.mp'
                            }
                        ],
                    },
                    {
                        type: 'dropdown',
                        label: 'Utilities',
                        position: 'left',
                        items: [
                            {
                                type: 'doc',
                                label: 'CDN Links',
                                docId: 'utilities/cdn_links',
                            },
                            {
                                type: 'doc',
                                label: 'JOAAT',
                                docId: 'utilities/joaat'
                            }
                        ],
                    },
                    {
                        type: 'dropdown',
                        label: 'Links',
                        position: 'left',
                        items: [
                            {
                                label: 'Patreon',
                                href: 'http://patreon.com/altVMP'
                            },
                            {
                                label: 'Anticheat guide',
                                href: 'https://github.com/MyHwu9508/alt-V-Anticheat-Guide/blob/main/README.md'
                            }
                        ],
                    },
                    {
                        type: 'docsVersionDropdown',
                        position: 'right',
                        dropdownItemsAfter: [{type: 'doc', docId: 'general/getting_started/branches', label: 'What is it?', disableActive: true }]
                    },
                    {
                        href: 'https://github.com/altmp',
                        position: 'right',
                        className: 'header-social-link github',
                        'aria-label': 'GitHub',
                    },
                    {
                        href: 'https://discord.altv.mp',
                        position: 'right',
                        className: 'header-social-link discord',
                        'aria-label': 'Discord Server',
                    },
                ],
            },
            footer: {
                style: 'dark',
                /*
                links: [
                    {
                        title: 'Docs',
                        items: [
                            {
                                label: 'Tutorial',
                                to: '/',
                            },
                        ],
                    },
                    {
                        title: 'Community',
                        items: [
                            {
                                label: 'Stack Overflow',
                                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
                            },
                            {
                                label: 'Discord',
                                href: 'https://discordapp.com/invite/docusaurus',
                            },
                            {
                                label: 'Twitter',
                                href: 'https://twitter.com/docusaurus',
                            },
                        ],
                    },
                    {
                        title: 'More',
                        items: [
                            {
                                label: 'Blog',
                                to: '/blog',
                            },
                            {
                                label: 'GitHub',
                                href: 'https://github.com/facebook/docusaurus',
                            },
                        ],
                    },
                ],
                */
                copyright: `Copyright © ${new Date().getFullYear()} alt:V Multiplayer. Built with Docusaurus.`,
            },
            prism: {
                theme: lightCodeTheme,
                darkTheme: darkCodeTheme,
                additionalLanguages: ['csharp', 'toml']
            },
        }),

    plugins: [
        [
            'altv-docs-js-api',
            {
                id: 'js',
                minimal: true,
                projectRoot: path.join(__dirname, 'js_versioned_docs/version-dev/repo'),
                routeBasePath: 'api/js',
                versions,
                rootDescriptionFile: path.join(__dirname, 'versioned_docs/version-$VER$/intro.md'),
                changelogs: true,
                readmes: true,
                onlyIncludeVersions: ['rc', 'dev', 'release'],
                packages: [
                    {
                        slug: 'shared',
                        path: 'shared',
                        entry: 'index.d.ts',
                        name: 'Shared module (alt-shared)',
                        changelog: path.join(__dirname, 'versioned_docs/version-$VER$/intro.md'),
                        readme: path.join(__dirname, 'versioned_docs/version-$VER$/intro.md')
                    },
                    {
                        slug: 'client',
                        path: 'client',
                        entry: 'index.d.ts',
                        name: 'Client module (alt-client)'
                    },
                    {
                        slug: 'server',
                        path: 'server',
                        entry: 'index.d.ts',
                        name: 'Server module (alt-server)'
                    }
                ],
            },
        ],
        [
            'altv-docs-js-api',
            {
                id: 'jsv2',
                minimal: true,
                projectRoot: path.join(__dirname, 'jsv2_versioned_docs/version-dev/repo'),
                routeBasePath: 'api/jsv2',
                rootEntryName: 'JS Module v2',
                versions,
                onlyIncludeVersions: ['rc', 'dev', 'release'],
                packages: [
                    {
                        slug: 'shared',
                        path: 'shared',
                        entry: 'index.d.ts'
                    },
                    {
                        slug: 'client',
                        path: 'client',
                        entry: 'index.d.ts'
                    },
                    {
                        slug: 'server',
                        path: 'server',
                        entry: 'index.d.ts'
                    }
                ],
            },
        ],
    ]
};

module.exports = config;
