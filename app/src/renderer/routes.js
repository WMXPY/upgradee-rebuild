export default [{
    path: '/',
    name: 'main-page',
    component: require('components/upgradee')
  },
  {
    path: '*',
    redirect: '/'
  }
]