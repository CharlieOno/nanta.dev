// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'nanta.dev',
  siteDescription: 'Entrepreneuse développeuse full-stack - essentiellement tournée sur les technologies web les plus récentes.',
  siteUrl: 'https://nanta.dev',
  host: '127.0.0.1',
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'blog/**/*.md',
        typeName: 'Post',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          },
        }
      }
    },
    {
      use: 'gridsome-plugin-gtag',
      options: {
          config: {
              id: "G-EHNG6TJ3D4",
          },
      },
    },
  ],
  templates: {
    Tag: '/tag/:id',
    Post: '/blog/:path',
  },
  transformers: {
    remark: {
      autolinkClassName: 'icon icon-link heading-anchor',
      externalLinksTarget: '_blank',
      externalLinksRel: ['noopener', ],
      anchorClassName: 'icon icon-link',
    }
  },
}