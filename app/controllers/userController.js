 let UsersService = require("../services/usersService");
 
 class UserController{
    static async obtenerUsuarios(req, res) {
        try {
            const users = await UsersService.obtenerUsuarios();
            res.json(users);
        } catch (e) {
            res.json( {error: "error en la peticion"} );
    }
    }
    static async login(req, res) {
        try {
        
        } catch (e) {
            
    }
    }

    //aqui voy a consumir el crear usuario, AQUI VOY A LLAMAR
    static async register(req, res) {
    try {
        let {nombre, correo, contrasena} = req.body;
        let user = await UsersService.crearUsuario(nombre,correo,contrasena);
        res.json(user);
        //let user = await UsersService.crearUsuarios(req.body)
    } catch (e) {
        res.json( {error: "error en la peticion"} );
    }
    }

       static async eliminarUsuarios(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
         static async actualizarUsuarios(req, res) {
        try {
        
        } catch (e) {
            
    }
    }
}
module.exports = UserController;