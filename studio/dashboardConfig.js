export default {
  widgets: [
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
                  buildHookId: '5ec5954aed78a3771d082e24',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-r5fqfwim',
                  apiId: '35295656-2ab7-4f57-a2c4-636dccee94c1'
                },
                {
                  buildHookId: '5ec5954a472257f2a4230bff',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tqxjg7wo',
                  apiId: 'f20a96e1-7eb0-44f6-a603-407c05f4e393'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/jaimesemp/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tqxjg7wo.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
