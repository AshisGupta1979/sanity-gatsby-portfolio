export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '60c01f7fc9d22526f0b28ffd',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-3edvk7sv',
                  apiId: '80f22668-39bc-47e4-9aa8-a6d588d08db4'
                },
                {
                  buildHookId: '60c01f7f59e0732ccf633865',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-f1t632sh',
                  apiId: 'e91db7ff-c835-4b38-94b9-d6f3541c8aa5'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/AshisGupta1979/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-f1t632sh.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
