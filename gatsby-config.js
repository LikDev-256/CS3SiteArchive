module.exports = {
  siteMetadata: require("./metadata"),
  pathPrefix: '__GATSBY_IPFS_PATH_PREFIX__',
  plugins: [
    'gatsby-plugin-sitemap',
    { resolve: 'gatsby-plugin-robots-txt', options: { policy: [{userAgent: '*', allow: '/'}] } },
    {
      resolve: `gatsby-plugin-runtime-path-prefix`,
      options: {
        prefix: `__GATSBY_IPFS_PATH_PREFIX__`,
        pattern: /^(\/(?:ipfs|ipns)\/[^/]+)/
      },
    },
    {
      resolve: `gatsby-plugin-compile-es6-packages`,
      options: {
        modules: require("./babel-modules")
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-preact',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/docs/",
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          'gatsby-remark-smartypants',
          // not working without puppeteer
          //{ resolve: 'gatsby-remark-mermaid', options: { theme: "dark", mermaidOptions: { themeCSS: ".mermaid foreignObject {overflow: visible;}" } } },
          { resolve: 'gatsby-remark-prismjs', options: { showLineNumbers: false, } },
        ]
      }
    },
    { resolve: 'gatsby-plugin-html-attributes', options: { lang: 'en', 'data-theme': 'dark' } },
    { resolve: 'gatsby-plugin-nprogress', options: { color: '#6419E6' } },
    { resolve: 'gatsby-plugin-manifest', options: require("./manifest") },
    { resolve: 'gatsby-plugin-canonical-urls', options: { siteUrl: require("./metadata").siteUrl } },
    'gatsby-plugin-no-sourcemaps',
  ]
};
