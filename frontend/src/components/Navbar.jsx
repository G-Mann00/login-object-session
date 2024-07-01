import { Button } from "@material-tailwind/react";
import { IoMdExit } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  // Comprueba si el usuario está autenticado, lo hace mediante el token almacenado en el localStorage
  const isUserSignedIn = !!localStorage.getItem("token");

  // Navegacion
  const navigate = useNavigate();

  // Funcion para cerrar sesion
  const handleSignOut = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    // Barra de navegación
    <nav className="bg-gradient-to-r from-[#2A2A2C] via-[#2D2D30] to-[#38383E] sticky top-0 z-50 py-2 relative">
      <div className="flex container px-4 mx-auto relative lg:text-sm justify-end">
        {/* Boton de salida */}
        <Link to="/">
          <Button
            variant="text"
            size="lg"
            className="flex items-center gap-2 text-white"
            onClick={handleSignOut}
          >
            <IoMdExit className="text-white text-2xl" />
            Salir
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
