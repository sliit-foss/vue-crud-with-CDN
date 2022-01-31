const routes = [
  { path: '/home', component: Home },
  { path: '/employee', component: Employee },
  { path: '/department', component: Department },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount('#app');
