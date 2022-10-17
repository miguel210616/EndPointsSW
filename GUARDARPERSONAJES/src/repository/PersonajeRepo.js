const {v4} = require('uuid');
const AWS = require('aws-sdk');
const { PersonajReq } = require('../models/PersonajeReq');

module.exports.GuardarPersonajeDyDB = async (req) => {
    try{

        const dynamodb = new AWS.DynamoDB.DocumentClient();
        const id = v4();

        const newPersonaje = new PersonajReq({ ...req, id: id })


        await dynamodb.put({
            TableName: 'PersonajesSW',
            Item: newPersonaje
        }).promise()

        return {message: "Se guardo exitosamente", body:newPersonaje}
    }catch(error){

        console.log(error);

    }
}