import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "./page/home";

export const routes: IRoutes = {
  root: {
    path: "/",
    display: "Home Page",
  },
};
export const router = createBrowserRouter(
  [
    {
      path: routes.root.path,
      element: <HomePage />,
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
        },
  }
);

export interface IRoute {
  path: string;
  display: string;
}

export type IRoutes = {
  root: IRoute;
};
