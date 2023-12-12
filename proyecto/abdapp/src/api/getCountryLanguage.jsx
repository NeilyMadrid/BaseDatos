import axios from "axios";

const getCountryLanguageApi = (url) => {
    return axios.get(url).then(async (res) => {        
        let lenguajesArray = [];
        res.data.map((lenguajes) => {
            lenguajesArray.push(lenguajes);
        })
        return lenguajesArray;
    });
};

export default getCountryLanguageApi;