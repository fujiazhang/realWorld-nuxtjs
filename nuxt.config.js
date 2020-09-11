export default {
  router: {
    extendRoutes(routes, resolve) {
      //清楚默认的生产的路由数组
      routes.splice(0)
      routes.push(...[
        {
          path: '/',
          component: resolve(__dirname, 'pages/layout/'),
          children: [
            {
              path: '/',
              name: 'home',
              component: resolve(__dirname, 'pages/home/')
            },
            {
              path: '/login',
              name: 'login',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/regeister',
              name: 'regeister',
              component: resolve(__dirname, 'pages/login/')
            },
            {
              path: '/articel',
              name: 'articel',
              component: resolve(__dirname, 'pages/articel/')
            },
            {
              path: '/create',
              name: 'create',
              component: resolve(__dirname, 'pages/create/')
            },
            {
              path: '/profile',
              name: 'profile',
              component: resolve(__dirname, 'pages/profile/')
            },
            {
              path: '/settings',
              name: 'settings',
              component: resolve(__dirname, 'pages/settings/')
            }

          ]
        },
      ])
    }
  }
}