import Vue from "vue"
import Router from "vue-router"
import db from "db"

import Login from "@/login"
import Admin from "@/admin"
import AdminApp from "@/admin-app"
import AdminVersion from "@/admin-version"
import Pkg from "@/pkg"
import Version from "@/version"
import App from "@/app"
import Channel from "@/channel"
import NotFound from "@/404"

Vue.use(Router)

const router = new Router({
  mode: "history",
  routes: [
    // admin
    {
      path: "/",
      redirect: () => db.token ? "/admin" : "/login",
    },
    {
      path: "/login",
      component: Login,
    },
    {
      path: "/admin",
      component: Admin,
      children: [
        {
          path: ":id",
          component: AdminApp,
        },
        {
          path: ":id/:version",
          component: AdminVersion,
        },
      ],
    },
    // customer
    {
      path: "/pkg/:id",
      component: Pkg,
    },
    {
      path: "/:id/:version",
      component: Version,
    },
    {
      path: "/:id",
      component: App,
    },
    {
      path: "/:id/channel/:channel",
      component: Channel,
    },
    {
      path: "*",
      component: NotFound,
    },
  ],
})

export default router
