import axios from "axios";

const getActualizarCity= (url,id,countryCode,nombreCity, monuments, population, climate, district, activo)=>{
    let urlUpdate = `${url}${id}/`;
    
    if(activo=='on'){
        activo=true
    }
    else{
        activo=false
    }
    console.log('Url: ',urlUpdate);
    console.log('countryCode: ',countryCode);
    console.log('nombreCity: ',nombreCity);
    console.log('monuments: ',monuments);
    console.log('population: ',population);
    console.log('climate: ',climate);
    console.log('district: ',district);
    console.log('activo: ',activo);
    const data = {
        "countryCode": countryCode,
        "nombreCity": nombreCity,
        "monuments": monuments,
        "population": population,
        "climate": climate,
        "district": district,
        "activo": activo
    }
    
    console.log('Objeto: ',data);
    axios.put(urlUpdate, data)
    .then(response => {
        console.log('put success');
        console.log('response',response)
    })
    .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)
    })
}

export default getActualizarCity