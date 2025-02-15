
class UsersService{
    static async obtenerU() {
        try {
            let users = await User.findAll();
            return users;
         }
          catch(e){
              
          }
      }
  }

module.exports = UsersService;