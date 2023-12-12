import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ActualizarCountry = () => {
    const navigate = useNavigate();
    const [countries, setCountry] = useState([]);
    const urlBaseConsulta = "http://127.0.0.1:8000/ListCountry/";
    const urlBase = "http://127.0.0.1:8000/UpdateCountry/";
    useEffect(() => {
        // Obtener la lista de autores desde la API
        axios.get(urlBaseConsulta).then(async (res) => { 
            setCountry(res.data);
        }).catch(error => {
            console.error('Error fetching countries:', error);
        });
    }, []);

    const handleCountryOnChange = (e) =>{
        
        let countryCode = document.getElementById('countryCode').value;
        let urlBaseConsultaDetail = "http://127.0.0.1:8000/CountryDetails/" + countryCode;
        console.log('urlBaseConsultaDetail ' + urlBaseConsultaDetail);

        countries.forEach(function (element) {
            console.log(element);
            if (element.id == countryCode) {
                document.getElementById('id').value = element.id;
                document.getElementById('codigoPais').value = element.codigoPais;
                document.getElementById('nombrePais').value = element.nombrePais;
                document.getElementById('continente').value = element.continente;
                document.getElementById('region').value  = element.region;
                document.getElementById('superficieArea').value = element.superficieArea;
                document.getElementById('independencia').value = element.independencia;
                document.getElementById('poblacion').value = element.poblacion;
                document.getElementById('expectativaVida').value = element.expectativaVida;
                document.getElementById('productointernobruto').value = element.productointernobruto;
                document.getElementById('productonacionalbruto').value = element.productonacionalbruto;
                document.getElementById('nombreLocal').value = element.nombreLocal;
                document.getElementById('formaGobierno').value = element.formaGobierno;
                document.getElementById('jefeEstado').value = element.jefeEstado;
                document.getElementById('capital').value = element.capital;
                document.getElementById('segundoCodigo').value = element.segundoCodigo;
                document.getElementById('monedaOficial').value = element.monedaOficial;
                document.getElementById('fronteras').value = element.fronteras;
            }
        });
        
    }
    
    return(
        <div className="Agregar">
            <h1 className="AgregarTittle">Mostrar Pais</h1>
            <form className="AgregarFormulario" >
            <label htmlFor="countries" className='AgregarFormularioInput'>Seleccione el Pais</label>
                <select name="countryCode" id="countryCode" onChange={handleCountryOnChange}>
                    {
                        countries.map(country => (
                            <option key={country.id} value={country.id}>{country.id}-{country.nombrePais}</option>
                        ))
                    }
                </select>
                <input type="number" name="id" id="id" className="id AgregarFormularioInput" placeholder="Id country"></input>
                <input type="number" name="codigoPais" id="codigoPais" className="codigoPais AgregarFormularioInput" placeholder="Codigo Pais"></input>
                <input type="text" name="nombrePais" id="nombrePais" className="nombrePais AgregarFormularioInput" placeholder="Nombre Pais"></input>
                <input type="text" name="continente" id="continente" className="continente AgregarFormularioInput" placeholder="Continente"></input>
                <input type="text" name="region" id="region" className="region AgregarFormularioInput" placeholder="Region"></input>
                <input type="number" name="superficieArea" id="superficieArea" className="superficieArea AgregarFormularioInput" placeholder="Superficie de Area"></input>
                <input type="number" name="independencia" id="independencia" className="independencia AgregarFormularioInput" placeholder="Independencia"></input>
                <input type="number" name="poblacion" id="poblacion" className="poblacion AgregarFormularioInput" placeholder="Poblacion"></input>
                <input type="number" name="expectativaVida" id="expectativaVida" className="expectativaVida AgregarFormularioInput" placeholder="Expectativa de Vida"></input>
                <input type="number" name="productointernobruto" id="productointernobruto" className="productointernobruto AgregarFormularioInput" placeholder="PIB"></input>
                <input type="number" name="productonacionalbruto" id="productonacionalbruto" className="productonacionalbruto AgregarFormularioInput" placeholder="PNB"></input>
                <input type="text" name="nombreLocal" id="nombreLocal" className="nombreLocal AgregarFormularioInput" placeholder="Nombre local"></input>
                <input type="text" name="formaGobierno" id="formaGobierno" className="formaGobierno AgregarFormularioInput" placeholder="Forma de gobierno"></input>
                <input type="text" name="jefeEstado" id="jefeEstado" className="jefeEstado AgregarFormularioInput" placeholder="Jefe estado"></input>
                <input type="text" name="capital" id="capital" className="capital AgregarFormularioInput" placeholder="Capital"></input>
                <input type="text" name="segundoCodigo" id="segundoCodigo" className="segundoCodigo AgregarFormularioInput" placeholder="Segundo codigo"></input>
                <input type="text" name="monedaOficial" id="monedaOficial" className="monedaOficial AgregarFormularioInput" placeholder="moneda oficial"></input>
                <input type="text" name="fronteras" id="fronteras" className="fronteras AgregarFormularioInput" placeholder="Fronteras"></input>
                <label htmlFor="active" className='AgregarFormularioInput'> Activo</label>
                <input type='checkbox' name="active" id="active" className="active AgregarFormularioInput" placeholder="active"></input>
            </form>
        </div>
    )
}

export default ActualizarCountry