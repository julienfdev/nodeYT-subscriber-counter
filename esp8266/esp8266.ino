// Networking
#include <ArduinoJson.h>
#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <WiFiClientSecureBearSSL.h>

// LED Matrix
#include <MD_Parola.h>
#include <MD_MAX72xx.h>
#include <SPI.h>
#define HARDWARE_TYPE MD_MAX72XX::FC16_HW
//#define MAX_DEVICES 1    //DEBUG
#define MAX_DEVICES 4
#define CLK_PIN   D5 // or SCK
#define DATA_PIN  D7 // or MOSI
#define CS_PIN    D8 // or SS

// Initializing the LED Matrix object with hardware SPI
MD_Parola P = MD_Parola(HARDWARE_TYPE, CS_PIN, MAX_DEVICES);

#include "config.h"

/*
   GLOBAL VARIABLES
*/
long subscriberCount = 0;
byte displayMode = MODE_SUBSCRIBERS;

// Creating an X509 Certificate based on the trustRoot signature in config.h
X509List cert(trustRoot);

// Creating the JSON Document Placeholder
const size_t capacity = JSON_ARRAY_SIZE(1) + JSON_OBJECT_SIZE(1) + 2 * JSON_OBJECT_SIZE(4) + JSON_OBJECT_SIZE(5) + 300;
DynamicJsonDocument doc(capacity);

void setup() {

  // Serial debugger
  Serial.begin(115200);
  Serial.println();

  // Setting up the display
  P.begin();
  P.setIntensity(1);
  P.setTextAlignment(PA_RIGHT);
  // Printing the welcome text
  P.displayText("NodeYT", PA_RIGHT, 50, 50, PA_SCROLL_RIGHT);
  // While the animation isn't finished
  while (!P.displayAnimate()) {
    ESP.wdtFeed(); // Feeding the Watchdog to avoid soft reset
  }


  // Initializing WiFi with SSID and provided in config file
  WiFi.begin(ssid, wifiPass);

  // Looping while not connected, need to be perfected to take errors into account ant print them
  while (WiFi.status() != WL_CONNECTED)
  {
    delay(500);
    Serial.print(".");
    wifiErrorHandler();
  }
  Serial.println();

  Serial.print("Connected, IP address: ");
  Serial.println(WiFi.localIP());
  Serial.println("");

  // Synchronising Time (GMT+1)
  configTime(timezone * 3600, 0, "pool.ntp.org", "time.nist.gov");
  // DST function to be done and recalled

  Serial.print("Waiting for NTP time sync: ");
  time_t now = time(nullptr);
  while (now < 8 * 3600 * 2) {
    delay(500);
    Serial.print(".");
    now = time(nullptr);
  }
  Serial.println("");
  struct tm timeinfo;
  struct tm timeLocal;
  gmtime_r(&now, &timeinfo);
  localtime_r(&now, &timeLocal);
  Serial.print("Zulu Time: ");
  Serial.print(asctime(&timeinfo));
  Serial.print("Local Time :");
  Serial.print(asctime(&timeLocal));

  // Printing local Time (DST to be implemented)
  String minutes = String(String(timeLocal.tm_min));
  Serial.println(minutes.length());
  if (!(minutes.length() > 1)) {
    minutes = String("0" + minutes);
  }
  String timeString = String(String("") + timeLocal.tm_hour + ":" + minutes);
  wipeScreen();
  printSubroutine(String("Clock:  "), PA_CENTER, PA_SCROLL_LEFT);
  printSubroutine(timeString, PA_CENTER, PA_SCROLL_LEFT);
  // Print the clock during 5 seconds
  delay(5000);

  // Wiping screen before getting subscriber count
  wipeScreen();
}


void loop() {
  if (displayMode == MODE_SUBSCRIBERS) {
    printHandler(getSubscriberCount());
    delay(refreshMillis); // To be changed to millis() comparison subroutine
  }
  // TBI : Mode change handler
}

String getSubscriberCount() {
  String payload = performApiCall();
  if (payload.startsWith("error-")) {
    return payload;
  }
  else {
    String subscriberFetch = extractSubscriberString(payload);
    return subscriberFetch;
  }
}

String performApiCall() {
  // Instancing a SSL Client
  BearSSL::WiFiClientSecure client;
  //
  //client.setTrustAnchors(&cert);
  // Uncomment following if you've got issues validating the cert (should be okay)
  client.setInsecure();

  // Creating an HTTPClient to perform the requests
  HTTPClient https;

  // We initiate a connection using the SSL client, to the apiCall string concatened from config variables
  Serial.print("[HTTPS] begin...\n");
  if (https.begin(client, apiCall)) {  // HTTPS

    Serial.print("[HTTPS] GET...\n");
    // start connection and send HTTP header
    int httpCode = https.GET();

    // httpCode will be negative on error
    if (httpCode > 0) {
      // HTTP header has been send and Server response header has been handled
      Serial.printf("[HTTPS] GET... code: %d\n", httpCode);

      // if we get a 200
      if (httpCode == HTTP_CODE_OK || httpCode == HTTP_CODE_MOVED_PERMANENTLY) {
        String payload = https.getString();
        return payload;
      }
      else if (httpCode == 400) {
        Serial.println("Bad Request - Most likely Bad API Key");
        return "error-APIKey";
      }
      else {
        Serial.printf("[HTTPS] GET... failed, error: %d\n", httpCode);
        subscriberCount = 0;
        return String("error-err" + String(httpCode));
      }
    } else {
      Serial.printf("[HTTPS] GET... failed, error: %d\n", httpCode);
      subscriberCount = 0;
      return String("error-err" + String(httpCode));

    }

    https.end();
  } else {
    Serial.printf("[HTTPS] Unable to connect\n");
    return "error-HTTPS";
  }
}

void printHandler(String rawCount) {
  // Every payload starting with "error-" will be handled as errors
  if (rawCount.startsWith("error-")) {
    String errorCode = rawCount.substring(6);
    printSubroutine(errorCode, PA_RIGHT, PA_SCROLL_RIGHT);
  }
  else {
    long fetchedSubCountInteger = rawCount.toInt();
    if (fetchedSubCountInteger != subscriberCount ) {
      subscriberCount = fetchedSubCountInteger; // COMMENT FOR DEBUG
      Serial.printf("Subscriber count is : %d\n", fetchedSubCountInteger);
      String formattedString = formatSubscriberCount(subscriberCount); // Formatting function
      printSubroutine(formattedString, PA_RIGHT, PA_SCROLL_RIGHT); //Display function
    }
    else {
      Serial.println("Same subscriber count - skipping");
    }
  }
}

void printSubroutine(String stringToPrint, textPosition_t textAlignment, textEffect_t effectDirection) {
  P.displayText(stringToPrint.c_str(), textAlignment, 50, 50, effectDirection);
  P.displayReset();
  while (!P.displayAnimate()) {
    ESP.wdtFeed(); // Feeding the Watchdog to avoid soft reset
  }
} // While the animation isn't finished

void wipeScreen() {
  P.displayText(" ", PA_RIGHT, 50, 50, PA_SCROLL_RIGHT);
  P.displayReset();
  while (!P.displayAnimate()) {
    ESP.wdtFeed(); // Feeding the Watchdog to avoid soft reset
  }
}

String formatSubscriberCount(long subscriberCount) {
  if (subscriberCount < 1000) {
    return String(subscriberCount);
  }
  else if (subscriberCount < 10000) {
    // example 1337, want 1.37k, need to perform round operation from 133.7 --> 134
    double floatBuffer = ((double)subscriberCount / (double)10.);
    double roundedValue = round(floatBuffer); // 134
    roundedValue = roundedValue / (double)100.; // 1.3400000
    String numericPart = String(roundedValue, 2); // "1.34"

    return String(numericPart + "k");
  }
  else if (subscriberCount < 100000) {
    // example 85625, want 85.6k, need to perform round operation from 856.2 --> 856
    double floatBuffer = ((double)subscriberCount / (double)100.);
    double roundedValue = round(floatBuffer); // 856
    roundedValue = roundedValue / (double)10.; // 85.600000000000
    String numericPart = String(roundedValue, 1); // "85.6"

    return String(numericPart + "k");
  }
  else if (subscriberCount < 1000000) {
    // example 856256, want 856k, need to perform round operation from 856.2 --> 856
    double floatBuffer = ((double)subscriberCount / (double)1000.);
    double roundedValue = round(floatBuffer); // 856
    String numericPart = String(roundedValue, 0); // "856"

    return String(numericPart + "k");
  }
  else if (subscriberCount < 10000000) {
    // example 8 562 560, want 8,56m, need to perform round operation from 856.2 --> 856
    double floatBuffer = ((double)subscriberCount / (double)10000.);
    double roundedValue = round(floatBuffer); // 856
    roundedValue = roundedValue / (double)100.; // 8.56000000
    String numericPart = String(roundedValue, 2); // "8.56"

    return String(numericPart + "M");
  }

}

String extractSubscriberString(String payload) {
  // Breaking down Json into objects
  deserializeJson(doc, payload);

  // Error handling
  int resultsPerPage = doc["pageInfo"]["resultsPerPage"];
  if (resultsPerPage == 0) {
    return "error-channel";
  }
  else {
    JsonObject items = doc["items"][0];
    JsonObject stats = items["statistics"];
    String subscriberCount = stats["subscriberCount"];

    return String(subscriberCount);
  }

}

/*
   Checks the WiFi connection status and print Error accordingly
*/
void wifiErrorHandler() {
  if (WiFi.status() == WL_NO_SSID_AVAIL) {
    Serial.println("SSID Unreachable - Sleeping 30s");
    wipeScreen();
    printHandler("error-SSID");
    delay(30000);
  }
  else if (WiFi.status() == WL_CONNECT_FAILED) {
    Serial.println("Wrong WiFi passkey - Sleeping 30s");
    wipeScreen();
    printHandler("error-Passwd");
    delay(30000);
  }
}

// Takes a dateTime and checks for the date (Europe DST)
bool daylightSavingChecker(tm dateTime) {

}
