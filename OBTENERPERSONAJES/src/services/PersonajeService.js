const { obtenerSWPeople } = require('../respository/PersonajeRepo');


module.exports.ObtenerSWPersonaje = async () => {
    
   return await obtenerSWPeople();

}