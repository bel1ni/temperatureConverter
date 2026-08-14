const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output:process.stdout
});

rl.question('Write the temperature: ', (temperature)=>{
    rl.question(`[1]Celsius [2]Fahrenheit [3]Kelvin \n`,(metric)=>{
        metric= Number(metric);
        temperature = Number(temperature);
        switch (metric) {
            case 1:
                console.log(`${temperature}°C to \nFahrenheit: ${(temperature*1.8+32).toFixed(2)}°F \nKelvin: ${(temperature+273.15).toFixed(2)}K`);
                break;
            case 2:
                console.log(`${temperature}°F to \nCelsius: ${(5/9*(temperature-32)).toFixed(2)}°C \nKelvin: ${((temperature-32)*5/9+273.15).toFixed(2)}K`);
                break;
            case 3:
                console.log(`${temperature}K to \nCelsius: ${(temperature-273.15).toFixed(2)}°C \nFahrenheit: ${((temperature-273.15)*9/5+32).toFixed(2)}°F`);
                break;
            default:
                console.log("Invalid option!");
        };
        rl.close();
    });
});