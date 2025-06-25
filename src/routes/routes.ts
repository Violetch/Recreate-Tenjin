import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "../layouts/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";

const rootRoute = createRootRoute({
  component: Layout,
  notFoundComponent: NotFound,
});

const HomeRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: Home,
});

const LoginRoute = createRoute({
  path: "/account/login",
  getParentRoute: () => rootRoute,
  component: Login,
});

const routeTree = rootRoute.addChildren([HomeRoute, LoginRoute]);

export const router = createRouter({ routeTree });
