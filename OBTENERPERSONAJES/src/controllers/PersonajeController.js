const { ObtenerSWPersonaje } = require('../services/PersonajeService');
const { ObtenerSWPersonajeDyDB } = require('../services/PersonajeService');

module.exports.ObtenerPersonaje = async () => {
    
    const res = await ObtenerSWPersonaje()
    return{
        status:200,
        body: res
    }

} 

module.exports.ObtenerPersonajesDyDB = async () => {
    
    const res = await ObtenerSWPersonajeDyDB()
    return{
        status:200,
        body: res
    }

} 