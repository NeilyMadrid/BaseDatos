import postCountryLanguageApi from "../api/postCountryLanguage"
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const AgregarCountryLanguage = () => {
    const navigate = useNavigate();
    const [countries, setCountry] = useState([]);
    const urlBaseConsulta = "http://127.0.0.1:8000/ListCountry/";
    const urlBase = "http://127.0.0.1:8000/CreateCountryLanguage/";

    useEffect(() => {
        // Obtener la lista de autores desde la API
        axios.get(urlBaseConsulta).then(async (res) => { 
            setCountry(res.data);
        }).catch(error => {
            console.error('Error fetching countries:', error);
        });
    }, []);

    const handleCountryLanguage = (e) =>{
        e.preventDefault();
        
        let language = document.getElementById('language').value
        let isofficial = document.getElementById('isofficial').value
        let porcentaje = document.getElementById('porcentaje').value
        let alfabeto = document.getElementById('alfabeto').value
        let numeroHablantes = document.getElementById('numeroHablantes').value
        let countryCodeLanguage = document.getElementById('countryCodeLanguage').value
        let active = document.getElementById('active').value

        
        console.log('countries es: '+countryCodeLanguage)
        console.log('language es: '+language)
        console.log('isofficial : '+isofficial)
        console.log('porcentaje: '+porcentaje)
        console.log('alfabeto: '+alfabeto)
        console.log('numeroHablantes: '+numeroHablantes)
    
        
        const CountryLanguagePost = async () => {
                const response = await postCountryLanguageApi(urlBase, language, isofficial, porcentaje, alfabeto, numeroHablantes, countryCodeLanguage,active);
                console.log('response: '+response);
        };
        CountryLanguagePost()
    }
    return(
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar language</h1>
            <form className="AgregarFormulario" onSubmit={handleCountryLanguage}>
                
                <input type="text" name="language" id="language" className="language AgregarFormularioInput" placeholder="language"></input>
                <label htmlFor="isofficial" className='AgregarFormularioInput'>isofficial</label>
                <input type="checkbox" name="isofficial" id="isofficial" className="isofficial AgregarFormularioInput" placeholder="Es oficial"></input>
                <input type="number" name="porcentaje" id="porcentaje" className="porcentaje AgregarFormularioInput" placeholder="Porcentaje"></input>
                <input type="text" name="alfabeto" id="alfabeto" className="alfabeto AgregarFormularioInput" placeholder="Alfabeto"></input>
                <input type="number" name="numeroHablantes" id="numeroHablantes" className="numeroHablantes AgregarFormularioInput" placeholder="Numero Hablantes"></input>
                
                
                <label htmlFor="countries" className='AgregarFormularioInput'>Seleccione el Pais</label>
                <select name="countryCodeLanguage" id="countryCodeLanguage">
                    {
                        countries.map(country => (
                            <option key={country.id} value={country.id}>{country.id}-{country.nombrePais}</option>
                        ))
                    }
                </select>
                <label htmlFor="active" className='AgregarFormularioInput'> Activo</label>
                <input type='checkbox' name="active" id="active" className="active AgregarFormularioInput" placeholder="active"></input>
                <button className="AgregarFormularioBtn" type="submit" name="countrylanguage">Agregar</button>
            </form>
        </div>
    )
}

export default AgregarCountryLanguage;