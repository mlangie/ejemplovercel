//const User=require("../../models/User");
const {User} = require("../../models");

class UsersService{
//obtenerUser es el metodo
    static async obtenerUsuarios() {
           return await User.findAll();//trae todos los atributos
            
      }
//metodo crear usuario
      static async crearUsuario(nombre,correo,contrasena){
        return await User.create({nombre,correo,contrasena});
      }
  }

module.exports = UsersService;