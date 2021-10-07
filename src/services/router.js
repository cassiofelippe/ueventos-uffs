import Vue from 'vue'
import Router from 'vue-router'
import EventosIndex from '@/components/EventosIndex.vue'
import Eventos from '@/components/Eventos.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/eventos', component: EventosIndex },
    { path: '/eventos/new', component: Eventos },
    { path: '/eventos/:id', component: Eventos },
    //{ path: '*', component: NotFound }
  ]
});

export default router;
