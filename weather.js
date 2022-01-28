#!/usr/bin/env node


import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSucces, printError, printWeather } from './services/log.services.js';
import { saveKeyValue, TOKEN_DICTIONARY, getKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
    if (!token.length) {
        printError('token not transfered');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.token, token);  
        printSucces('Token saved');
    } catch (error) {
        printError(e.message);
    }
};

const saveCity = async (city) => {
    if (!city.length) {
        printError('Town not transfered');
        return;
    }
    try {
        await saveKeyValue(TOKEN_DICTIONARY.city, city);  
        printSucces('Town saved');
    } catch (error) {
        printError(e.message);
    }
};



const getForecast = async () => {
    try {
        const city = process.env.CITY ?? await getKeyValue(TOKEN_DICTIONARY.city);
        const weather = await getWeather(city);
        printWeather(weather, '');
    } catch (e) {
        if (e?.response?.status == 404) {
            printError('Not right town');
        } else if (e?.response?.status == 401) {
        printError('Not right token');
        } else {
            printError(e.message);
        }

    }
}



const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        return printHelp();
    }
    if (args.s) {
       return saveCity(args.s);
    }
    if (args.t) {
        return saveToken(args.t);
    }
    return getForecast();
}; 

initCLI();