# NodeYT Subscriber Counter
# TBUPDATED!!!!!!!!!!

A cheap NodeJS and Arduino subscriber counter - CC BY 4.0

## Overview

The Node YT Subscriber Counter is a small and cheap LED Matrix YouTube counter based on a Raspberry Pi 3A+, an Arduino Nano and a 8x32 MAX7219 LED Matrix.
As the name suggests... it counts YouTube subscribers

 ## Bill Of Material

### Mandatory
 - Raspberry Pi 3A+ - __24.37€__ https://amzn.to/2IB41uH
 - Arduino Nano (cheap clone is fine) - __8.99€__ https://amzn.to/3kcQSWT
 - 8x32 MAX7219 LED Matrix - __9.99€__ https://amzn.to/2HclQzS 
 - Short mini USB cable - __8.34€__ https://amzn.to/31hT2wT
### Optional
 - A 3D printer to print the case

### Total BOM : 51.69€ + enclosure

 ## Arduino (Client-Side)

 ### WIP

 ## Raspberry Pi

 ### Configuration : 

 - Clone the repository
 - Create a config.js file in ./config, file structure as shown :

        const config = {
            api: {
                key: "YOUR_YT_API_KEY",
                channel: "YOUR_YT_CHANNEL_ID"
            },
            serial: {
                port: '/dev/ttyUSB0' // Most likely, the USB Serial port you program your Arduino with
            }
        }

        module.exports = config

 - Install the following packages

        sudo apt install nodejs
        sudo npm install pm2@latest -g
        cd ./node

- Follow this awesome tutorial, starting at step 3, replacing __hello.js__ by __index.js__ : https://do.co/37oXJsu

# WIP
