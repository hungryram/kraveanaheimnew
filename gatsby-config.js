module.exports = {
  siteMetadata: {
    title: `Krave Anaheim`,
    siteUrl: `https://www.kraveanaheim.com`
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-netlify",
    "gatsby-plugin-react-helmet", 
    "gatsby-plugin-sitemap", 
    {
    resolve: 'gatsby-plugin-manifest',
    options: {
      icon: `src/images/krave-favicon.png`,
      name: `Krave Nutritrion`,
      short_name: `Krave Nutritrion`,
      start_url: `/`,
      theme_color: `#36cde6`,
      display: `standalone`,
      lang: `en`,
      description: `The best nutrition drinks in Anaheim`,
    }
  },
  `gatsby-plugin-offline`,
  "gatsby-transformer-remark", 
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", 
  {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    }, 
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "content",
        "path": "./content/pages"
      },
      __key: "pages"
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-SM1VXDM7ZS", // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
        },
      },
    },
  ]
};