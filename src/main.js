import Vue from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import Skills from "./components/Skills.vue";
import HelloWorld from "./components/HelloWorld.vue";
import Now from "./components/Now.vue";
import Terminal from "./components/Terminal.vue";
import MyImpossibleList from "./components/MyImpossibleList.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        { path: '/', component: HelloWorld},
        { path: '/easymalayalam', component: Skills},
        { path: '/now', component: Now},
        { path: '/nerdstats', component: Terminal},
        { path: '/myimpossiblelist', component: MyImpossibleList}
    ],
    mode: "history",
});

new Vue({
    router,
    render: (h) => h(App),
}).$mount("#app");

export default router