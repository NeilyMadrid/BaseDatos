import axios from "axios";
import React, { useEffect, useState } from 'react';

const postCountryLanguageApi = (url,language, isofficial, porcentaje, alfabeto, numeroHablantes,countries, activo)=>{

    console.log('Url: ',url);
    console.log('language: ',language);
    console.log('isofficial: ',isofficial);
    console.log('porcentaje: ',porcentaje);
    console.log('alfabeto: ',alfabeto);
    console.log('numeroHablantes: ',numeroHablantes);
    console.log('countries: ',countries);
    console.log('activo: ',activo);
    if(activo=='on'){
        activo=true
    }
    else{
        activo=false
    }
    const data = {
        "language": language,
        "isofficial": isofficial,
        "porcentaje": porcentaje,
        "alfabeto": alfabeto,
        "numeroHablantes": numeroHablantes,
        "codigoPais": countries,
        "activoPais": activo
    }
    console.log('Objeto: ',data);
    axios.post(url, data)
    .then(response => {
        console.log('post success');
        console.log('response',response)
    })
    .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)
    })
}
export default postCountryLanguageApi;