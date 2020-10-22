const config = require('./config/config');
const SerialPort = require('serialport');

// Adjust the baudRate to your Arduino configuration
const port = new SerialPort(config.serial.port, {
    baudRate: 57600
});

// Module dependencies
const getCount = require('./modules/youtubeApi');
const formatter = require('./modules/formatter');


let subCount = 0;

// Refreshing the subscriber count depending on the refreshTimer value (in ms)
setInterval(async () => {
    try {
        // We wait for the new numeric subcount
        const newCount = await getCount();
        const dateFormat = new Date();
        const timeStamp = Date.now();

        console.log(`Sub count on ${dateFormat.toISOString(timeStamp)}: ${newCount} subs`);
        // If it differs from the old one
        if (newCount !== subCount) {
            subCount = newCount;
            // We write the String formatted value to the Arduino
            port.write(formatter(subCount), (error) => {
                if (error) {
                    console.error(error);
                }
            });
        }
    } catch (error) {
        console.error(error);
    }
}, config.api.refresh);