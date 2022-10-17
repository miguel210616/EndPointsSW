const { dFetch } = require('../../../utils/dFetch');
const { PersonajeRes } = require('../models/PersonajeRes');
const AWS = require('aws-sdk');

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


module.exports.obtenerSWPeopleDyDB = async () => {
    try{

        const dynamodb = new AWS.DynamoDB.DocumentClient();
        
        const result = await dynamodb.scan({
            TableName: 'PersonajesSW'
        }).promise();
        const personajes = result.Items;
        
        return personajes;

    }catch(error){
        console.log(error);
    }
}