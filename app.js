const routes = [
  { path: '/', component: Home },
  { path: '/department', component: Department },
  { path: '/employee', component: Employee },
];

const router = new VueRouter({
  routes,
});

const app = new Vue({
  router,
}).$mount('#app');
