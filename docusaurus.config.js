module.exports = {
  title: 'QuickBend',
  tagline: 'This site is an extension of QuickBend. Dedicated to documenting and explaining conduit bending.',
  url: 'https://bhardman1986.github.io',
  baseUrl: '/quickbend-docs/',
  projectName: 'quickbend-docs',
  organizationName: 'bhardman1986',
  favicon: 'img/ic_qbdocs.svg',
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
          title: 'Contact',
          items: [
            {
              label: 'Bret',
              href: 'mailto://rigidpro@outlook.com'
            }
          ]
        },
        {
          title: 'Privacy Policy',
          items: [
            {
              label: 'QuickBend',
              to: 'docs/QuickBend#privacy-policy'
            },
            {
              label: 'MTRList',
              to: 'docs/MTRList#privacy-policy'
            }
          ]
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
          homePageId: 'docs',
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
