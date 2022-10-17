const { dFetch } = require('../../../utils/dFetch');
const { PersonajeRes } = require('../models/PersonajeRes');

module.exports.obtenerSWPeople = async () => {
    try{
   
        const res = await dFetch({verb: 'get', path: '/people', headers : {
            'Content-Type': 'application/json'}
        }).then(response => {
            return response.data
        })

        const personajes =res.results.map(personaje => {
            return person = new PersonajeRes(personaje);
        })

        return personajes

    }catch(error){
        console.log(error);
    }
}