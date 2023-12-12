import axios from "axios";

const getActualizarCountry = (url,id,codigoPais, nombrePais, continente, region, superficieArea, independencia, poblacion,  expectativaVida, productointernobruto,productonacionalbruto, nombreLocal, formaGobierno, jefeEstado, capital, segundoCodigo, monedaOficial,fronteras,activo)=>{
    let urlUpdate = `${url}${id}/`;
    if(activo=='on'){
        activo=true
    }
    else{
        activo=false
    }
    console.log('Url: ',urlUpdate);
    console.log('codigoPais: ',codigoPais);
    console.log('nombrePais: ',nombrePais);
    console.log('continente: ',continente);
    console.log('region: ',region);
    console.log('superficieArea: ',superficieArea);
    console.log('independencia: ',independencia);
    console.log('poblacion: ',poblacion);
    console.log('expectativaVida: ', expectativaVida);
    console.log('productointernobruto : ', productointernobruto );
    console.log('productonacionalbruto: ', productonacionalbruto);
    console.log('nombreLocal: ', nombreLocal);
    console.log('formaGobierno: ', formaGobierno);
    console.log('jefeEstado: ', jefeEstado);
    console.log('capital: ', capital);
    console.log('segundoCodigo: ', segundoCodigo);
    console.log('monedaOficial: ', monedaOficial);
    console.log('fronteras: ', fronteras);
    console.log('activo: ',activo);
    const data = {
        "codigoPais": codigoPais,
        "nombrePais": nombrePais,
        "continente": continente,
        "region": region,
        "superficieArea": superficieArea,
        "independencia": independencia,
        "poblacion": poblacion,
        "expectativaVida":  expectativaVida,
        "productointernobruto":  productointernobruto,
        "productonacionalbruto": productonacionalbruto,
        "nombreLocal": nombreLocal,
        "formaGobierno": formaGobierno,
        "jefeEstado": jefeEstado,
        "segundoCodigo": segundoCodigo,
        "monedaOficial":monedaOficial,
        "fronteras": fronteras,
        "activoPais": activo
    }
    console.log('salida Objeto: ',data);
    axios.put(urlUpdate, data)
    .then(response => {
        console.log('post success');
        console.log('response',response)
    })
    .catch(error => {
        console.log('Oh No! Error!');
        console.log(error)
    })
}

export default getActualizarCountry