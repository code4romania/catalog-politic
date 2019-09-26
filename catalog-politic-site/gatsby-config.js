module.exports = {
  pathPrefix: `catalog-politic/${process.env.CODEBUILD_WEBHOOK_TRIGGER}`,
  siteMetadata: {
    title: `Catalog Politic`,
    description: `Catalog Politic is powered by the desire to centralise all public information on elected representatives and lower the information cost necessary for citizens, making public information truly public. For this end we are digitising hundreds of thousands of asset declarations, scraping dozens of official websites and manually collecting data where no automation is possible.`,
    author: `Code for Romania`,
    locales: ['ro', 'en'], // First locale is assumed to be the default
    menuLinks: [{
      name: 'Politicians',
      path: '/politicieni',
      special: false
    }, {
      name: 'Parties',
      path: '/partide',
      special: false
    }, {
      name: 'Data',
      path: '/date',
      special: false
    }, {
      name: 'Visualisations',
      path: '/vizualizari',
      special: false
    }, {
      name: 'Presidential election',
      path: '/prezidentiale',
      special: true
    }]
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`postcss-preset-env`)({ stage: 0 }),
          require(`postcss-color-function`)({ preserveCustomProps: false }),
          require(`postcss-font-weights`)()
        ]
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
        options: {
            rule: {
              include: /\.inline\.svg$/
            }
        }
    }
  ]
}
