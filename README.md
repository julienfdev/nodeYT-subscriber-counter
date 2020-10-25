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
 - 8x H5x6mm hex posts
 - 8x M3x8mm Socket Head Cap Screws
 - 4x 3.2x5mm Hex or Phillips screws (backplate fixation)
 - 5x 2.54mm (0.1" in Yankee units) male pin headers

__*Total BOM : 17.8€ + enclosure*__

## ESP8266 Configuration 

### Configuration and Upload
 - Clone the repository
 - Create a config.h file in ./esp8266, as following :

        #define MODE_SUBSCRIBERS 0

        String apiKey = "YOUR_YOUTUBE_API_KEY";
        String channelId = "YOUR_YOUTUBE_CHANNEL_ID";
        String ssid = "WIFI_SSID_TO_CONNECT_TO";
        String wifiPass = "WPA||WPA2__KEY";
        long refreshMillis = ;            // Refresh time in milliseconds
        int timezone = ; // Your Timezone eg : 1 for GMT+1 and -7 for GMT-7
        const char trustRoot[] PROGMEM = R"EOF(
                -----BEGIN CERTIFICATE-----
                THE_GOOGLE_API_CERTIFICATE
                -----END CERTIFICATE-----
                )EOF";
        // Caution, you must begin and end the String with R"EOF( )EOF" as shown;
        // To find the valid certificate just fetch anything at https://www.googleapis.com/ and click the lock next to the URL
        // Take the X509 Certificate and not SHA1 or SHA256 signature as they expires eventually

        String apiCall = String("https://www.googleapis.com/youtube/v3/channels?part=statistics&id=" + channelId + "&key=" + apiKey);


- Open the Arduino IDE and add the following source to the Additionnal Board Manager (Preferences)

        https://arduino.esp8266.com/stable/package_esp8266com_index.json

- Install the ESP8266 boards with the Board Manager
- Install the following libraries : 

        ArduinoJson // by Benoit Blanchon
        MD_Parola

- Select NodeMCU 1.0 and keep the default settings
- Open and upload the sketch to the board

### Remarks / Misc

__Boot sequence__

The NodeYT counter go through the following boot sequence : 
- Prints nodeYT during WiFi connection
- Synchronizes to NTP servers
- Prints the current local Time
- Fetches and print the subscriber count

__Serial debugger__

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

- "HTTPS" : Can't establish https tunnel (verify your X509 certificate)
- "APIKey" : Bad Request code received from the YT API, most likely related to a bad API Private key
- "channel" : No channel exists with the ID provided in config.h
- err"xxx" : Generic error handler, displays the response code from the server


### WIP

- Clock Mode?
- Mode pushbutton (views-subs-clock)
- LED intensity potentiometer

## 3D printed case

### Hardware modifications :

A single mod needs to be done to the LED Matrix in order to fit into the RTM case (no mod if you're using the prototype one, but it's not advised as the RTM model is daaaamn slicker).

- Desolder the angled pin headers
- Solder the straight pin headers back, facing the side without any components (duh)

### Provided Files

The STL and Cura files provided assume a 20x123.5mm fixation pattern for the 8x32 LED Matrix

Disclamer about the prototype CATIA files : they are absolute shit as it's a revamp from the RPI+Arduino version.
RTM should be cleaner ^^

### Printing

Printing at 200/60°C with Geetech black PLA, 0.24mm layer height, tree support and faceplate ironing yields great results on an Ender3.
