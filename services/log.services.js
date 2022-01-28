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

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow (' WEATHER ')} Weather in town ${res.name}
        ${icon} ${res.weather[0].description}
        Temp: ${res.main.temp} (feels like ${res.main.feels_like})
        Moisture: ${res.main.humidity}%
        Wind speed: ${res.wind.speed}
        `
    );
};


export { printError, printSucces, printHelp, printWeather };