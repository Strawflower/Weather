#!/usr/bin/env node
import { getArgs } from './helpers/args.js'
import { printHelp } from './services/log.services.js'

const initCLI = () => {
    const args = getArgs(process.argv);
    console.log(args);
    if (args.h) {
        printHelp();
    }
    if (args.h) {
        
    }
    if (args.h) {
        
    }
    
};

initCLI();

