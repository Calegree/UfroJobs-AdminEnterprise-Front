import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
   
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/empresa/listaOfertas",
      name: "listaOfertasEmpresa",
      component: () =>
        import("../views/moduloPostulaciones/ListaOfertasEmpresa.vue"),
    },
    {
      //path: "/empresa/perfil/:id",
      path: "/empresa/perfil",
      name: "perfilEmpresa",
      component: () => import("../views/moduloEmpresa/VerPerfilEmpresa.vue"),
    },
    {
      // path: "/empresa/detalleOfertaEmpresa/:id",
      path: "/empresa/detalleOferta",
      name: "detalleOfertaEmpresa",
      component: () =>
        import("../views/moduloPostulaciones/DetalleOfertaEmpresa.vue"),
    },
    {
      path: "/",
      name: "inicioSesion",
      component: () =>
        import("../views/moduloAutentificacion/InicioSesion.vue"),
    },
    {
      path: "/admin/dashboard",
      name: "dashboardAdmin",
      component: () => import("../views/moduloAdmin/DashboardAdmin.vue"),
    },
    {
      path: "/admin/usuarios",
      name: "listaUsuariosAdmin",
      component: () => import("../views/moduloAdmin/ListaUsuariosAdmin.vue"),
    },
    {
      path: "/admin/empresas",
      name: "listaEmpresasAdmin",
      component: () => import("../views/moduloAdmin/ListaEmpresasAdmin.vue"),
    },
    {
      path: "/admin/Solicitudes",
      name: "listaSolicitudesAdmin",
      component: () =>
        import("../views/moduloAdmin/ListaSolicitudesEmpresaAdmin.vue"),
    },
     {
      // path: "/admin/DetalleOfertaAdmin/:id",
      path: "/admin/DetalleOferta",
      name: "DetalleOfertaAdmin",
      component: () =>
        import("../views/moduloAdmin/DetalleOfertaAdmin.vue"),
    },
    {
      path: "/registro",
      name: "registro",
      component: () => import("../views/moduloAutentificacion/Registro.vue"),
    },
     {
      path: "/registro/confirmarCorreoVerificacion",
      name: "confirmarCorreoVerificacionRegistro",
      component: () => import("../views/moduloAutentificacion/ConfirmarVerificacionRegistro.vue"),
    },
        {
      path: "/registro/Exitoso",
      name: "registroExitoso",
      component: () => import("../views/moduloAutentificacion/RegistroExitoso.vue"),
    },
       {
      path: "/olvidePassword",
      name: "olvidePassword",
      component: () => import("../views/moduloAutentificacion/OlvidePassword.vue"),
    },
        {
      path: "/olvidePassword/codigoConfirmacion",
      name: "olvidePasswordCodigoConfirmacion",
      component: () => import("../views/moduloAutentificacion/ConfirmarCorreoOlvidePassword.vue"),
    },
         {
      path: "/olvidePassword/cambiarPassword",
      name: "olvidePasswordCambiarPassword",
      component: () => import("../views/moduloAutentificacion/CambiarPassword.vue"),
    },
  ],
});

export default router;
