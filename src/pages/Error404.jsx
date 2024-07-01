import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Typography,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Error404 = () => {
  const navigate = useNavigate();

  return (
    <>
      {/* Componente principal (Background) */}
      <main className="flex h-svh bg-BG-Yellow justify-center">
        {/* Fondo de patron*/}
        <div id="error404-pattern"></div>

        {/* Carta que avisa que se inicio sesion */}
        <div className="flex items-center">
          <Card className="w-[400px]">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Esta página no existe
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4 text-center">
              <Typography variant="h5" color="black">
                Verifique si la URL está escrita correctamente
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

export default Error404;
