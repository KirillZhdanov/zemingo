import { Navigate, createBrowserRouter } from "react-router-dom";
import { ROOT_ROUTE, INVENTORY_ROUTE, PRODUCT_ROUTE } from "./routes";
import { Layout } from "../shared/layout";
import { App } from "../App";
import { Inventory } from "../pages/inventory";
import { Product } from "../pages/product";
import { NotFound } from "../pages/not-found";

export const router = createBrowserRouter([
  {
    path: ROOT_ROUTE,
    element: (
      <Layout>
        <App />
      </Layout>
    ),
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to={INVENTORY_ROUTE} />,
      },
      {
        path: INVENTORY_ROUTE,
        element: <Inventory />,
      },
      {
        path: PRODUCT_ROUTE,
        element: <Product />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
