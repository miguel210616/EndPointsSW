
const { GuardarPersonajeDyDB } = require('../repository/PersonajeRepo');

module.exports.GuardarPersonaje = async (req) => {
 
    return await GuardarPersonajeDyDB(req);

}