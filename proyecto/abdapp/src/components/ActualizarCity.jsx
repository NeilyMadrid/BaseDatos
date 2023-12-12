import postCityApi from "../api/getActualizarCity"
import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ActualizarCity = () => {
    const navigate = useNavigate();
    const [cities, setCity] = useState([]);
    const urlBaseConsulta = "http://127.0.0.1:8000/ListCity/";
    const urlBase = "http://127.0.0.1:8000/UpdateCity/";
    useEffect(() => {
        // Obtener la lista de autores desde la API
        axios.get(urlBaseConsulta).then(async (res) => { 
            setCity(res.data);
        }).catch(error => {
            console.error('Error fetching cities:', error);
        });
    }, []);

    const handleCityOnChange = (e) =>{
        
        let id = document.getElementById('cityCode').value;
        console.log('element.updateCiudadID ' + id);
        cities.forEach(function (element) {
            console.log(element);
            if (element.id == id) {
                document.getElementById('updateCiudadID').value = element.id;
                document.getElementById('countryCode1').value = element.countryCode;
                document.getElementById('nombreCity').value = element.nombreCity;
                document.getElementById('monuments').value = element.monuments;
                document.getElementById('population').value = element.population;
                document.getElementById('climate').value = element.climate;
                document.getElementById('district').value = element.district;
            }
        });

    }
        

    const handleCity = (e) =>{
            e.preventDefault();
            let id = document.getElementById('updateCiudadID').value
            let countryCode = document.getElementById('countryCode1').value
            let nombreCity = document.getElementById('nombreCity').value
            let monuments = document.getElementById('monuments').value
            let population = document.getElementById('population').value
            let climate = document.getElementById('climate').value
            let district = document.getElementById('district').value
            let active = document.getElementById('active').value

            const CityPost = async () => {
            const response = await postCityApi(urlBase, id, countryCode, nombreCity,monuments,population,climate, district, active);
        };
        CityPost()
    }
    return(
        <div className="Agregar">
            <h1 className="AgregarTittle">Actualizar Ciudad</h1>
            <form className="AgregarFormulario" onSubmit={handleCity}>
            <label htmlFor="countries" className='AgregarFormularioInput'>Seleccione ciudad</label>
                <select name="cityCode" id="cityCode" onChange={handleCityOnChange}>
                    {
                        cities.map(city => (
                            <option key={city.id} value={city.id}>{city.id}-{city.nombreCity}</option>
                        ))
                    }
                </select>
                <input type="number" name="updateCiudadID" id="updateCiudadID" className="id AgregarFormularioInput" placeholder="Id City"></input>
                <input type="number" name="countryCode1" id="countryCode1" className="countryCode AgregarFormularioInput" placeholder="Codigo Pais"></input>
                <input type="text" name="nombreCity" id="nombreCity" className="nombreCity AgregarFormularioInput" placeholder="Nombre ciudad"></input>
                <input type="text" name="monuments" id="monuments" className="monuments AgregarFormularioInput" placeholder="Monumentos"></input>
                <input type="number" name="population" id="population" className="population AgregarFormularioInput" placeholder="Poblacion"></input>
                <input type="text" name="climate" id="climate" className="climate AgregarFormularioInput" placeholder="Clima"></input>
                <input type="text" name="district" id="district" className="district AgregarFormularioInput" placeholder="Distrito"></input>
                <label htmlFor="active" className='AgregarFormularioInput'> Activo</label>
                <input type='checkbox' name="active" id="active" className="active AgregarFormularioInput" placeholder="active"></input>
                <button className="AgregarFormularioBtn" type="submit" name="city">Actualizar</button>
            </form>
        </div>
    )
}

export default ActualizarCity