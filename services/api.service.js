import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";
// import https from 'https';
import axios from "axios";

const getWeather = async (city) => {
    // return new Promise()
    const token = await getKeyValue(TOKEN_DICTIONARY.token);
    if (!token) {
        throw new Error('Not defined key API, set through -t [API_KEY]');
    }

    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            lang: 'ru',
            units: 'metric'
        }
    })

    return data;
    // const url = new URL('https://api.openweathermap.org/data/2.5/weather');
    // url.searchParams.append('q', city);
    // url.searchParams.append('appid', token);
    // url.searchParams.append('lang', 'ru');
    // url.searchParams.append('units', 'metric');

    // https.get(url, (response) => {
    //     let res = '';
    //     response.on('data', (chunk) => {
    //         res += chunk;
    //     });

    //     response.on('end', () => {
    //         console.log(res);
    //     });

    //     response.on('error', (error) => {

    //     });

    // });
};

export { getWeather };