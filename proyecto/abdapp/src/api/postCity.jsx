import axios from "axios";

const postCityApi = (url,countryCode,nombreCity, monuments, population, climate, district, activo)=>{

    console.log('Url: ',url);
    console.log('countryCode: ',countryCode);
    console.log('nombreCity: ',nombreCity);
    console.log('monuments: ',monuments);
    console.log('population: ',population);
    console.log('climate: ',climate);
    console.log('district: ',district);
    console.log('activo: ',activo);
    if(activo=='on'){
        activo=true
    }
    else{
        activo=false
    }
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
export default postCityApi;