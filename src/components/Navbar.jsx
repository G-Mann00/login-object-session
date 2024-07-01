import { Button } from "@material-tailwind/react";
import { IoMdExit } from "react-icons/io";
import { Link } from "react-router-dom";

const Navbar = () => {
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
