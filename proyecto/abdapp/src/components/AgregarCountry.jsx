import React from 'react'
import postCountryApi from "../api/postCountry"
import { useNavigate } from 'react-router-dom'

export const AgregarCountry = () => {
    const navigate = useNavigate()
    const urlBase = "http://127.0.0.1:8000/CreateCountry/";
    const handleCountry = (e) =>{
        e.preventDefault();
        let codigoPais = document.getElementById('codigoPais').value
        let nombrePais = document.getElementById('nombrePais').value
        let continente = document.getElementById('continente').value
        let region = document.getElementById('region').value
        let superficieArea = document.getElementById('superficieArea').value
        let independencia = document.getElementById('independencia').value
        let poblacion = document.getElementById('poblacion').value
        let expectativaVida = document.getElementById('expectativaVida').value
        let productointernobruto = document.getElementById('productointernobruto').value
        let productonacionalbruto = document.getElementById('productonacionalbruto').value
        let nombreLocal = document.getElementById('nombreLocal').value
        let formaGobierno= document.getElementById('formaGobierno').value
        let jefeEstado = document.getElementById('jefeEstado').value
        let capital = document.getElementById('capital').value
        let segundoCodigo = document.getElementById('segundoCodigo').value
        let monedaOficial = document.getElementById('monedaOficial').value
        let fronteras = document.getElementById('fronteras').value
        let active = document.getElementById('active').value

        
        console.log('codigoPais es: '+codigoPais)
        console.log('nombrePais es: '+nombrePais)
        console.log('continente : '+continente)
        console.log('region: '+region)
        console.log('superficieArea: '+superficieArea)
        console.log('independencia: '+independencia)
        console.log('poblacion: '+poblacion)
        console.log('expectativaVida: '+expectativaVida)
        console.log('productointernobruto: '+ productointernobruto)
        console.log('productonacionalbruto: '+ productonacionalbruto)
        console.log('nombreLocal: '+nombreLocal)
        console.log('formaGobierno: '+formaGobierno)
        console.log('jefeEstado: '+jefeEstado)
        console.log('capital: '+ capital)
        console.log('segundoCodigo: '+segundoCodigo)
        console.log('monedaOficial: '+monedaOficial)
        console.log('fronteras: '+fronteras)
        
        
        const CountryPost = async () => {
                const response = await postCountryApi(urlBase, codigoPais, nombrePais, continente, region, superficieArea, independencia, poblacion,expectativaVida, productointernobruto, productonacionalbruto, nombreLocal,formaGobierno,jefeEstado, capital,segundoCodigo,monedaOficial,fronteras, active);
                console.log('response: '+response);
        };
        CountryPost()
    }
    return(
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar Pais</h1>
            <form className="AgregarFormulario" onSubmit={handleCountry}>
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
                <button className="AgregarFormularioBtn" type="submit" name="country">Agregar</button>
            </form>
        </div>
    )
}

export default AgregarCountry;