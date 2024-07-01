import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Navbar from "../components/Navbar";

function MenuSesion() {
  return (
    <>
      {/* Barra de navegación */}
      <Navbar />
      {/* Componente principal (Background) */}
      <main className="flex h-svh bg-BG-Green justify-center">
        {/* Fondo de patron*/}
        <div id="gear-pattern"></div>

        {/* Carta que avisa que se inicio sesion */}
        <div className="flex items-center">
          <Card>
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                ¡Hola!
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Typography variant="h5" color="black">
                Has iniciado sesión exitosamente
              </Typography>
            </CardBody>
          </Card>
        </div>
      </main>
    </>
  );
}

export default MenuSesion;
