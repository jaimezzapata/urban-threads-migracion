import Home from "../pages/Home";
import Productos from "../pages/Productos";
import Contacto from "../pages/Contacto";

export const routerApp = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/productos",
    element: <Productos />,
  },
  {
    path: "/contacto",
    element: <Contacto />,
  },
];
