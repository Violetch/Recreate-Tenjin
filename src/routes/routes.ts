import {
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import Layout from "../layouts/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const rootRoute = createRootRoute({
  component: Layout,
  notFoundComponent: NotFound,
});

const HomeRoute = createRoute({
  path: "/",
  getParentRoute: () => rootRoute,
  component: Home,
});

const routeTree = rootRoute.addChildren([HomeRoute]);

export const router = createRouter({ routeTree });
