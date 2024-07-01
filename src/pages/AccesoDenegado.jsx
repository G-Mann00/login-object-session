import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
const AccesoDenegado = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Componente principal (Background) */}
      <main className="flex h-svh bg-BG-Red justify-center">
        {/* Fondo de patron*/}
        <div id="denied-pattern"></div>

        {/* Carta que avisa que se inicio sesion */}
        <div className="flex items-center">
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Acceso Denegado
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4 text-center">
              <Typography variant="h5" color="black">
                Usted no tiene acceso para entrar a esta página
              </Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button variant="gradient" fullWidth onClick={() => navigate(-1)}>
                Regresar
              </Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
};

export default AccesoDenegado;
