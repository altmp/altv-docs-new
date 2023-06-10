// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('./src/theme/highlightDark.js');

const path = require('path');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'alt:V Documentation',
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://altv-docs-new.vercel.app',
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
                docs: {
                    routeBasePath: '/',
                    sidebarPath: require.resolve('./sidebars.js'),
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
                                to: '/api',
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
                                label: 'CDN Links',
                                to: '/utilities/cdn_links',
                            },
                            {
                                label: 'JOAAT',
                                to: '/utilities/joaat',
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
            },
        }),

    plugins: [
        [
            'docusaurus-plugin-typedoc-api',
            {
                minimal: true,
                projectRoot: path.join(__dirname, 'typings'),
                packages: [
                    {
                        slug: 'shared',
                        path: 'js-module/shared',
                        entry: 'index.d.ts'
                    },
                    {
                        slug: 'client',
                        path: 'js-module/client',
                        entry: 'index.d.ts'
                    },
                    {
                        slug: 'server',
                        path: 'js-module/server',
                        entry: 'index.d.ts'
                    }
                ],
            },
        ],
    ]
};

module.exports = config;
