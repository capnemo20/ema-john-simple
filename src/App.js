import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";
import { productsAndCartLoader } from "./loaders/productsAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/shop",
          loader: () => fetch("products.json"),
          element: <Shop></Shop>,
        },
        {
          path: "/orders",
          loader: productsAndCartLoader,
          element: <Orders></Orders>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
      ],
    },
    {
      path: "about",
      element: <About></About>,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
