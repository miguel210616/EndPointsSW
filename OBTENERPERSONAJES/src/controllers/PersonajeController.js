const { ObtenerSWPersonaje } = require('../services/PersonajeService');

module.exports.ObtenerPersonaje = async () => {
    
    const res = await ObtenerSWPersonaje()
    return{
        status:200,
        body: res
    }

} 