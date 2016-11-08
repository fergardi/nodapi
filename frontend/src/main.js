import Vue from 'vue'
import VueRouter from 'vue-router'
import VueI18n from 'vue-i18n'
import locales from './services/locales'

import App from './App.vue'
import Home from './views/Home.vue'
import Items from './views/Items.vue'
import Resources from './views/Resources.vue'
import Spells from './views/Spells.vue'
import Skills from './views/Skills.vue'
import Recipes from './views/Recipes.vue'
import Player from './views/Player.vue'
import Monsters from './views/Monsters.vue'
import Inn from './views/Inn.vue'
import City from './views/City.vue'
import Location from './views/Location.vue'
import Forge from './views/Forge.vue'
import World from './views/World.vue'
import auth from './services/auth'

// router
Vue.use(VueRouter);

// i18n
Vue.use(VueI18n);
Vue.config.lang = 'en';
Object.keys(locales).forEach(function (lang) {
  Vue.locale(lang, locales[lang]);
});

// routes
var router = new VueRouter({
  routes: [
    { path: '/', component: Home, name: 'home' },
    { path: '/home', component: Home, name: 'home' },
    { path: '/world', component: World, name: 'world' },
    { path: '/items', component: Items, name: 'items' },
    { path: '/resources', component: Resources, name: 'resources' },
    { path: '/spells', component: Spells, name: 'spells' },
    { path: '/skills', component: Skills, name: 'skills' },
    { path: '/recipes', component: Recipes, name: 'recipes' },
    { path: '/player', component: Player, name: 'player' },
    { path: '/monsters', component: Monsters, name: 'monsters' },
    { path: '/city', component: City, name: 'city' },
    { path: '/inn', component: Inn, name: 'inn' },
    { path: '/location', component: Location, name: 'location' },
    { path: '/forge', component: Forge, name: 'forge' },
    { path: '*', redirect: '/home' }
  ]
});

// secured routes
var secured = [
  'world',
  'player',
  'city',
  'inn',
  'location',
  'forge'
];

// app
new Vue({
  render: (h) => h(App),
  router
}).$mount('#app');

// redirect to home if not auth
router.beforeEach((to, from, next) => {
  if ((secured.indexOf(to.name) !== -1) && !auth.logged) {
    router.push({ path: '/' });
  } else {
    return next();
  }
});