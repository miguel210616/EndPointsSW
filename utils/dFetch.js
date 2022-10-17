const axios = require('axios');

const axinstance = axios.create({
    baseURL: "https://swapi.py4e.com/api",
    timeout: 12000,
});

module.exports.dFetch = ({ verb, path, data = undefined, params = undefined, headers }) => axinstance({
    method: verb,
    url: path,
    params,
    headers: headers,
    data: data
}).catch(function (error){
    console.log(error.response);
})