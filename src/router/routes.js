
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Home.vue') },
      { path: 'loan', component: () => import('pages/Loan.vue'),
      children:[
        {path:'', component:() => import('pages/Apply.vue')},
        {path:'repay', component:() => import('pages/Repay.vue')},
      ]
    },
      { path: 'settings', component: () => import('pages/Settings.vue') },
      { path: 'offers', component: () => import('pages/Offers.vue') },
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
