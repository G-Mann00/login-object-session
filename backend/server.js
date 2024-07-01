// Importando las librerías necesarias para crear el servidor
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Importando el modelo de usuario
const User = require("./models/userModel");

// Conexion a la aplicacion Express
const app = express();

// Clave secreta para el token
const SECRET_KEY = "super-secret-key";

// Conexion a la BD de MongoDB mediante MondoDB Atlas
const dbURL =
  "mongodb+srv://luswidanilotorres:9VHCJRXrt8mhX2iJ@cluster2.scu5bdj.mongodb.net/LosDB?retryWrites=true&w=majority&appName=Cluster2";

mongoose
  .connect(dbURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(3007, () => {
      console.log("Server conectado al puerto 3007 y MongoDB");
    });
  })
  .catch((error) => {
    console.log("No se pudo conectar al Server y/o MongoDB", error);
  });

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Rutas (Backend)

// REGISTRO Y POST-REGISTRO (GET, POST)
app.post("/signup", async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Encripta la contraseña
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crea un nuevo usuario
    const newUser = new User({ email, username, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al registrarse" });
  }
});

// Cargar lista de usuarios registrados
app.get("/signup", async (req, res) => {
  try {
    const users = await User.find();

    // Carga la lista de usuarios en formato JSON
    res.status(201).json(users);
  } catch (error) {
    res.status(500).json({ error: "No se pudo cargar la lista de usuarios" });
  }
});

// INICIO DE SESION (POST)
app.post("/signin", async (req, res) => {
  try {
    // Obtiene el usuario y la contraseña
    const { username, password } = req.body;

    // Busca el usuario en la BD
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(401).json({ error: "Credenciales invalidas" });
    }

    // Compara la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res
        .status(401)
        .json({ error: "Credenciales invalidas, la contraseña no es igual" });
    }

    // Genera el token de la sesion con una duración de 2 minutos
    const token = jwt.sign({ userId: user._id }, SECRET_KEY, {
      expiresIn: "2min",
    });
    res.json({ message: "Inicio de sesion exitoso" });
  } catch (error) {
    res.status(500).json({ error: "Error al iniciar sesion" });
  }
});
