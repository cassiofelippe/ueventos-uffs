import Vue from 'vue'
import Router from 'vue-router'
import EventosIndex from '@/components/EventosIndex.vue'
import EventosNew from '@/components/EventosNew.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/eventos', component: EventosIndex },
    { path: '/eventos/new', component: EventosNew },
    //{ path: '*', component: NotFound }
  ]
});

export default router;
