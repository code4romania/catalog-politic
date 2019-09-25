module.exports = {
  siteMetadata: {
    title: `Catalog Politic`,
    description: `Catalog Politic este o platformă online care centralizează informațiile existente despre persoanele din funcții publice din România. Scopul este de a pune la dispoziția cetățenilor informații obiective cu privire la cei care le reprezintă interesele. Mai mult, prin baze de date complete și ușor de utilizat, proiectul oferă jurnaliștilor și cercetătorilor suport în activitățile de documentare.`,
    author: `Code for Romania`,
    locales: ['ro', 'en'],
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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
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
