const mongoose = require("mongoose");

// Esquema de usuario
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

// Modelo de usuario
const User = mongoose.model("User", userSchema);

// Exportar el modelo
module.exports = User;
