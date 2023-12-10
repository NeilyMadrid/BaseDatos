import React from 'react'
import postCityApi from "../api/postCity"
import { useNavigate } from 'react-router-dom'

export const AgregarCity = () => {
    const navigate = useNavigate()
    const urlBase = "http://127.0.0.1:8000/CreateCity/";
    const handleCity = (e) =>{
        e.preventDefault();
        let countryCode = document.getElementById('countryCode').value
        let nombreCity = document.getElementById('nombreCity').value
        let monuments = document.getElementById('monuments').value
        let population = document.getElementById('population').value
        let climate = document.getElementById('climate').value
        let district = document.getElementById('district').value
        let active = document.getElementById('active').value
        console.log('countryCode: '+countryCode)
        console.log('nombreCity: '+nombreCity)
        console.log('monuments: '+monuments)
        console.log('population: '+population)
        console.log('climate: '+climate)
        console.log('district: '+district)
        const CityPost = async () => {
                const response = await postCityApi(urlBase, countryCode, nombreCity,monuments,population,climate, district, active);
                console.log('response: '+response);
        };
        CityPost()
    }
    return(
        <div className="Agregar">
            <h1 className="AgregarTittle">Agregar Ciudad</h1>
            <form className="AgregarFormulario" onSubmit={handleCity}>
                <input type="number" name="countryCode" id="countryCode" className="countryCode AgregarFormularioInput" placeholder="Codigo Pais"></input>
                <input type="text" name="nombreCity" id="nombreCity" className="nombreCity AgregarFormularioInput" placeholder="Nombre ciudad"></input>
                <input type="text" name="monuments" id="monuments" className="monuments AgregarFormularioInput" placeholder="Monumentos"></input>
                <input type="number" name="population" id="population" className="population AgregarFormularioInput" placeholder="Poblacion"></input>
                <input type="text" name="climate" id="climate" className="climate AgregarFormularioInput" placeholder="Clima"></input>
                <input type="text" name="district" id="district" className="district AgregarFormularioInput" placeholder="Distrito"></input>
                <label htmlFor="active" className='AgregarFormularioInput'> Activo</label>
                <input type='checkbox' name="active" id="active" className="active AgregarFormularioInput" placeholder="active"></input>
                <button className="AgregarFormularioBtn" type="submit" name="city">Agregar</button>
            </form>
        </div>
    )
}

export default AgregarCity;