// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  routes: [
    {
      path: '/',
      component: '../layouts/index',
     
      routes: [
        { path: '/', component: '../pages/index' },
        { path: '/order', component: '../pages/order' },
        { path: '/users/', component: '../pages/users/index' },
        { path: '/users/:id?', component: '../pages/users/$id$.js' },
        { path: '/:post/', component: '../pages/$post/index.js' },
        { path: '/:post/comments', component: '../pages/$post/comments.js' },
      ],
    },
  ],
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: 'Learn UmiJS',
        dll: false,

        routes: {
          exclude: [/components\//],
        },
      },
    ],
  ],
};
