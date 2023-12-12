import React from 'react'
import postEliminarCityApi from "../api/postEliminarCity"
import { useNavigate } from 'react-router-dom'

const EliminarCity = () => {
    const navigate = useNavigate()    
    const urlBase = "http://127.0.0.1:8000/DeleteCity/";
    const handleCity = (e) =>{
        e.preventDefault();
        let city = document.getElementById('city').value
        console.log('city: '+city)
        const CityPost = async () => {
                const response = await postEliminarCityApi(urlBase,city);
        };
        CityPost()
    }
    return(
        <div className="Agregar">
            <h1 className="AgregarTittle">Eliminar Ciudad</h1>
            <form className="AgregarFormulario" onSubmit={handleCity}>
                <input type="number" name="city" id="city" className="city AgregarFormularioInput" placeholder="Id"></input>
                <button className="AgregarFormularioBtn" type="submit" name="country">Eliminar</button>
            </form>
        </div>
    )
}

export default EliminarCity