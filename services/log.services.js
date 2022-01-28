import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ' + ' ' + error));
};

const printSuccess = (message => {
    console.log(chalk.bgGreen(' SUCCESS ' + ' ' + message));
});

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')} 
        Without parameters - show weather
        -s [CITY] for setting weather
        -h for help
        -t [API_KEY] for saving token
        `
        
    );
};

export { printError, printSuccess, printHelp };