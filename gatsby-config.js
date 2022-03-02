module.exports = {
  siteMetadata: {
    title: `Programming Test`,
    description: `Completing this test will prove you're able to work in JAMstack environment.`,
    author: `@element6`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require('tailwindcss'), require('autoprefixer')],
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: {
        apiURL: 'http://172.105.25.208:1420',
        queryLimit: 1000,
        singleTypes: [`home`],
      },
    },
  ],
};
