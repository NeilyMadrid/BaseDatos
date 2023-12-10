import axios from "axios";

const getCountryApi = (url) => {
    return axios.get(url).then(async (res) => {        
        let paisesArray = [];
        res.data.map((paises) => {
            paisesArray.push(paises);
        })
        return paisesArray;
    });
};

export default getCountryApi;