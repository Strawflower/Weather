#!/usr/bin/env node

import { getArgs } from './helpers/args.js';
import { printHelp, printSucces, printError } from './services/log.services.js';
import { saveKeyValue } from './services/storage.service.js';

const saveToken = async (token) => {
    try {
        await saveKeyValue('token', token);  
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

}; 

initCLI();