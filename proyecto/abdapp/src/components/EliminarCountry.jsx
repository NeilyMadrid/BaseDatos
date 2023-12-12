import React from 'react'
import postEliminarCountryApi from "../api/postEliminarCountry"
import { useNavigate } from 'react-router-dom'

const EliminarCountry = () => {
    const navigate = useNavigate()    
    const urlBase = "http://127.0.0.1:8000/DeleteCountry/";
    const handleCountry = (e) =>{
        e.preventDefault();
        let country = document.getElementById('country').value
        console.log('country: '+country)
        const CountryPost = async () => {
                const response = await postEliminarCountryApi(urlBase,country);
        };
        CountryPost()
    }
    return(
        <div className="Agregar">
            <h1 className="AgregarTittle">Eliminar Pais</h1>
            <form className="AgregarFormulario" onSubmit={handleCountry}>
                <input type="number" name="country" id="country" className="country AgregarFormularioInput" placeholder="Id"></input>
                <button className="AgregarFormularioBtn" type="submit" name="country">Eliminar</button>
            </form>
        </div>
    )
}

export default EliminarCountry