import Vue from 'vue'
import Router from 'vue-router'
import EventosIndex from '@/components/EventosIndex.vue'
import Eventos from '@/components/Eventos.vue'
import UsuariosIndex from '@/components/UsuariosIndex.vue'
import Usuarios from '@/components/Usuarios.vue'

Vue.use(Router);

const router = new Router({
  routes: [
    { path: '/eventos', component: EventosIndex },
    { path: '/eventos/new', component: Eventos },
    { path: '/eventos/:idEvento', component: Eventos },
    { path: '/usuarios', component: UsuariosIndex },
    { path: '/usuarios/new', component: Usuarios },
    { path: '/usuarios/:idUsuario', component: Usuarios }
    //{ path: '*', component: NotFound }
  ]
});

export default router;
