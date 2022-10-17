const { obtenerSWPeople } = require('../respository/PersonajeRepo');
const { obtenerSWPeopleDyDB } = require('../respository/PersonajeRepo');

module.exports.ObtenerSWPersonaje = async () => {
    
   return await obtenerSWPeople();

}

module.exports.ObtenerSWPersonajeDyDB = async () => {
    
   return await obtenerSWPeopleDyDB();

}