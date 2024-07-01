import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./pages/Login.jsx";
import Error404 from "./pages/Error404.jsx";
import MenuSesion from "./pages/MenuSesion.jsx";
import AccesoDenegado from "./pages/AccesoDenegado.jsx";

// Router
const router = createBrowserRouter([
  {
    // Ruta al Login (Principal)
    path: "/",
    element: <Login />,
    errorElement: <Error404 />,
  },
  {
    // Ruta al Menu
    path: "/menu",
    element: <MenuSesion />,
  },
  {
    // Ruta al Acceso Denegado
    path: "/denied",
    element: <AccesoDenegado />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
