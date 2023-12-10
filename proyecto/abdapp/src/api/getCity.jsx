import axios from "axios";

const getCityApi = (url) => {
    return axios.get(url).then(async (res) => {        
        let ciudadesArray = [];
        res.data.map((ciudades) => {
            ciudadesArray.push(ciudades);
        })
        return ciudadesArray;
    });
};

export default getCityApi;