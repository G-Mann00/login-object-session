import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registro from "./pages/Registro";
import Error404 from "./pages/Error404";
import AccesoDenegado from "./pages/AccesoDenegado";
import MenuSesion from "./pages/MenuSesion";

function App() {
  // Comprueba si el usuario está autenticado, lo hace mediante el token almacenado en el localStorage
  const isUserSignedIn = !!localStorage.getItem("token");

  return (
    <>
      {/* Rutas (Frontend) */}
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<Home />} />

        {/* Ruta de Login */}
        <Route path="/login" element={<Login />} />

        {/* Ruta de Registro */}
        <Route path="/registro" element={<Registro />} />

        {/* Ruta de Error404 */}
        <Route path="*" element={<Error404 />} />

        {/* Ruta de Acceso Denegado */}
        <Route path="/denied" element={<AccesoDenegado />} />

        {/* Ruta del Menu de la sesion */}
        {/* Si el usuario está autenticado, muestra el menú de la sesión */}
        {isUserSignedIn && <Route path="/menu" element={<MenuSesion />} />}
      </Routes>
    </>
  );
}

export default App;
