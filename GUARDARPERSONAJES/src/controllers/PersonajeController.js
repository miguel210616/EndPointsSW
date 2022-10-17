const { GuardarPersonaje } = require('../services/PersonajeService')

module.exports.InsertarPersonaje = async (event) => {
    
    try{

        const res = await GuardarPersonaje(JSON.parse(event.body))
        return{
            status:200,
            message: res.message,
            body: res.body
        }

    }catch(error){
        console.log(error);
    }

} 