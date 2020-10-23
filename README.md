# NodeYT Subscriber Counter
## ESP8266 Version
A cheap ESP8266 - NodeMCU v3 subscriber counter - CC BY 4.0

See branch arduino-rpi for the Arduino / Raspberry Pi version (not maintained)

## Overview

The Node YT Subscriber Counter is a small and cheap LED Matrix YouTube counter based on a nodeMCU board (ESP8266) and a 8x32 MAX7219 LED Matrix.
As the name suggests... it counts YouTube subscribers

 ## Bill Of Material

### Mandatory
 - NodeMCU V3 ESP8266 Developement board - __7.79€__ https://amzn.to/31ySlPQ
 - 8x32 MAX7219 LED Matrix - __9.99€__ https://amzn.to/2HclQzS 
 - Arduino IDE 1.8+

### Optional
 - A 3D printer to print the case

__*Total BOM : 17.8€ + enclosure*__

## ESP8266 Configuration 

### Configuration and Upload
 - Clone the repository
 - Create a config.h file in ./esp8266, as following :

        String apiKey = "YOUR_YOUTUBE_API_KEY";
        String channelId = "YOUR_YOUTUBE_CHANNEL_ID";
        String ssid = "WIFI_SSID_TO_CONNECT_TO";
        String wifiPass = "WPA||WPA2__KEY";
        long refreshMillis = ;            // Refresh time in milliseconds

        String apiCall = String("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + channelId + "&key=" + apiKey);


- Open the Arduino IDE and add the following source to the Additionnal Board Manager (Preferences)

        https://arduino.esp8266.com/stable/package_esp8266com_index.json

- Install the ESP8266 boards with the Board Manager
- Select NodeMCU 1.0 and keep the default settings
- Open and upload the sketch to the board

### Remarks / Misc

The ESP8266 opens a Serial at 115200 bauds, it sends various debug data :

- WiFi IP address
- Start / Response of HTTPS GET requests
- Current subscriber count or "same sub count" message
- Errors (to be improved)

Current soft watchdog implemementation assumes the animateDisplay() always eventually sends a true at the end of an animation. 

### Errors codes

Even if the serial provides detailed information about what's going on, one would find interesting to quick diagnose any problems. The displays thus prints various error codes depending on the issue : 

__WiFi related error codes__

- SSID : The SSID in config.h can't be reached
- Passwd : Wrong WPA||WPA2 Passkey

__API Related error codes__

- HTTPS : Can't establish https tunnel (shouldn't happen)
- APIKey : Bad Request code received from the YT API, most likely related to a bad API Private key
- err"xxx" : Generic error handler, displays the response code from the server
- channel : No channel exists with the ID provided in config.h

### WIP

- X509 certificate verification instead of client.setInsecure() call
- Clock display?
- Mode pushbutton (views-subs-clock)
- LED intensity potentiometer

## 3D printed case

### Provided Files

The STL and Cura files provided assume a 20x123.5mm fixation pattern for the 8x32 LED Matrix

Disclamer about CATIA files : they are absolute shit as it's a revamp from the RPI+Arduino version.

### Printing

Printing at 200/60°C with Geetech black PLA, 0.24mm layer height, tree support and faceplate ironing yields great results on an Ender3.
