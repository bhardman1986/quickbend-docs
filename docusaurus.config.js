module.exports = {
  title: 'QuickBend',
  tagline: 'This site is an extension of QuickBend. Dedicated to documenting and explaining conduit bending.',
  url: 'bhardman1986/github.io',
  baseUrl: '/quickbend-docs',
  favicon: 'img/ic_qbdocs.svg',
  organizationName: 'H-Tech, LLC.', // Usually your GitHub org/user name.
  projectName: 'QuickBend Docs', // Usually your repo name.
  themeConfig: {
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'QuickBend Docs',
      logo: {
        alt: 'QuickBend Icon',
        src: 'img/ic_qbdocs.svg',
      },
      links: [
        {
          to: 'docs/introduction',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog/', 
          label: 'Versions', 
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/introduction',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
        {
          title: 'Download',
          items: [
            {
              label: "iOS",
              href: 'https://apps.apple.com/app/id1010311475'
            },
            {
              label: 'Android',
              href: 'https://play.google.com/store/apps/details?id=hardman.bret.quickbend.pro'
            }
          ]
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Bret H. Hardman`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // It is recommended to set document id as docs home page (`docs/` path).
          homePageId: 'doc1',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
