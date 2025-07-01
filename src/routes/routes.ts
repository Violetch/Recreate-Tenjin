import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "../layouts/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Cart from "./pages/Cart";

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

const CartRoute = createRoute({
  path: "/cart",
  getParentRoute: () => rootRoute,
  component: Cart,
});

const routeTree = rootRoute.addChildren([HomeRoute, LoginRoute, CartRoute]);

export const router = createRouter({ routeTree });
