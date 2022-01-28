#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { getWeather } from './services/api.service.js';
import { printHelp, printSucces, printError } from './services/log.services.js';
import { saveKeyValue, TOKEN_DICTIONARY } from './services/storage.service.js';

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
}

const initCLI = () => {
    const args = getArgs(process.argv);
    if (args.h) {
        printHelp();
    }
    if (args.s) {
       
    }
    if (args.t) {
        return saveToken(args.t);
    }
    getWeather('tokyo');
}; 

initCLI();