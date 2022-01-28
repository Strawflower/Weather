import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed('ERROR') + ' ' + error);
};

const printSucces = (message) => {
    console.log(chalk.bgGreen('SUCCESS') + ' ' + message);
};

const printHelp = () => {
  console.log(
      dedent`${chalk.bgCyan(' HELP ')}
      Withour parameters 
      -s [CITY] 
      -h show help
      -t [API_KEY]
      `
  );
};

export { printError, printSucces, printHelp };