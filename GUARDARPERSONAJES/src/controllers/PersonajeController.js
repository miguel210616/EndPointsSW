const { GuardarPersonaje } = require('../services/PersonajeService')

module.exports.InsertarPersonaje = async (event) => {
    
    try{

        const res = await GuardarPersonaje(event.body)
        console.log(event.body)
        return{
            status:200,
            message: res.message,
            body: res.body
        }

    }catch(error){
        console.log(error);
    }

} 