import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import About from "./components/About/About";
import Shop from "./components/Shop/Shop";
import Inventory from "./components/Inventory/Inventory";
import Orders from "./components/Orders/Orders";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Shop></Shop>,
        },
        {
          path: "/inventory",
          element: <Inventory></Inventory>,
        },
        {
          path:"/orders",
          element:<Orders></Orders>
        }
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
