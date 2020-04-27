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
                  buildHookId: '5ea6d2c95418c3a57b1d7018',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-gzer9k8h',
                  apiId: '527eeea5-21ac-4114-926d-454e63c1bdc1'
                },
                {
                  buildHookId: '5ea6d2c93ea009930e4efc98',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-jyfbczon',
                  apiId: '052a571b-0909-4488-b69b-459606298281'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/danudenny/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-jyfbczon.netlify.app',
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
