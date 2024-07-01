import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  // Variables de estado
  // Lista de usuarios
  const [users, setUsers] = useState([]);

  // Carga los datos del formulario
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Navegacion
  const navigate = useNavigate();

  // Funcion para cargar la lista de usuarios
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios.get("http://localhost:3007/signup").then((res) => {
      console.log(res.data);
    });
  };

  // Funcion para iniciar sesion
  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:3007/signin", {
        username,
        password,
      });
      const token = response.data.token;
      alert("Inicio de sesión exitoso");
      setUsername("");
      setPassword("");
      fetchUsers();
      navigate("/menu");
      window.location.reload();
      localStorage.setItem("token", token);
    } catch (error) {
      console.log("Error al iniciar sesion", error);
    }
  };

  return (
    <>
      {/* Componente principal (Background) */}
      <main className="flex h-svh bg-BG-Blue justify-center">
        {/* Fondo de patron*/}
        <div id="user-pattern"></div>

        {/* Formulario de inicio de sesión */}
        <form className="flex items-center" onSubmit={handleLogin}>
          <Card className="w-96">
            <CardHeader
              variant="gradient"
              color="gray"
              className="mb-4 grid h-28 place-items-center"
            >
              <Typography variant="h3" color="white">
                Te doy la bienvenida
              </Typography>
            </CardHeader>
            <CardBody className="flex flex-col gap-4">
              <Input
                label="Nombre de usuario"
                size="lg"
                color="indigo"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <div>
                <Input
                  type="password"
                  label="Contraseña"
                  size="lg"
                  color="indigo"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Typography
                  variant="small"
                  color="gray"
                  className="mt-2 flex items-center gap-1 font-normal"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="-mt-px h-8 w-8"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Mínimo 8 caracteres, 1 Mayúscula, 1 Minúscula y 1 Número.
                </Typography>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Link to="/menu">
                <Button variant="gradient" fullWidth type="submit">
                  Iniciar sesión
                </Button>
              </Link>
              <Typography variant="small" className="mt-6 flex justify-center">
                ¿No tienes una cuenta?
                <Typography
                  as="a"
                  href="/registro"
                  variant="small"
                  color="blue-gray"
                  className="ml-1 font-bold hover:underline hover:text-indigo-900"
                >
                  REGISTRATE
                </Typography>
              </Typography>
            </CardFooter>
          </Card>
        </form>
      </main>
    </>
  );
}

export default Login;
