const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Sui Docs",
  tagline:
    "Sui is a next-generation smart contract platform with high throughput, low latency, and an asset-oriented programming model powered by Move",
  favicon: "img/favicon.ico",
  url: "https://sui-docs-sui-foundation.vercel.app/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/sui-foundation/sui-docs/tree/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Sui Docs",
        logo: {
          alt: "Sui Docs Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "learn/about-sui/sui-glossary",
            label: "Learn",
          },
          {
            type: "doc",
            docId: "build/setup/install-sui",
            label: "Build",
          },
          {
            type: "doc",
            docId: "reference/sui-json-format",
            label: "Reference",
          },
          {
            type: "doc",
            docId: "contribute/improve-documentation",
            label: "Contribute",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Resources",
            items: [
              {
                label: "Developer Portal",
                href: "https://sui.io/developers",
              },
              {
                label: "Developer Grants",
                href: "https://sui.io/developer-grants",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Developer Forum",
                href: "https://forums.sui.io/",
              },
              {
                label: "Discord",
                href: "https://discord.gg/sui",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/SuiNetwork",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "GitHub",
                href: "https://github.com/MystenLabs/sui",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sui`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
