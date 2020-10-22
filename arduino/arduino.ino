#include <MD_Parola.h>
#include <MD_MAX72xx.h>
#include <SPI.h>

// Define the number of devices we have in the chain and the hardware interface
// NOTE: These pin numbers will probably not work with your hardware and may
// need to be adapted
#define HARDWARE_TYPE MD_MAX72XX::FC16_HW
#define MAX_DEVICES 4

#define CLK_PIN   13
#define DATA_PIN  11
#define CS_PIN    10
#define TXT_BUFFER 8

// Hardware SPI connection
MD_Parola P = MD_Parola(HARDWARE_TYPE, CS_PIN, MAX_DEVICES);
// Arbitrary output pins
// MD_Parola P = MD_Parola(HARDWARE_TYPE, DATA_PIN, CLK_PIN, CS_PIN, MAX_DEVICES);

static char text[TXT_BUFFER] = "";
static char printText[] = "YTSub";
bool pause = false;
bool newMessageAvailable = false;
int exitScroll = PA_NO_EFFECT;

void setup(void)
{
  Serial.begin(57600);
  P.begin();
  P.setIntensity(1);
  P.setTextAlignment(PA_RIGHT);
  P.displayText(printText, PA_RIGHT, 50, 50, PA_SCROLL_RIGHT);
}

void loop(void)
{
  if (P.displayAnimate() && !pause) {
    pause = true;
  }
  if (newMessageAvailable) {
    newMessageAvailable = false;
    P.displayText(text, PA_RIGHT, 50, 50, PA_SCROLL_RIGHT);
    P.displayReset();
    pause = false;
  }

  readSerial();
}

void readSerial(void)
{
  static char *cp = text;
  while (Serial.available())
  {
    *cp = (char)Serial.read();
    if ((*cp == '\n') || (cp - text >= TXT_BUFFER - 2)) // end of message character or full buffer
    {
      *cp = '\0'; // end the string
      // restart the index for next filling spree and flag we have a message waiting
      cp = text;
      newMessageAvailable = true;
      Serial.println(text);
    }
    else  // move char pointer to next position
      cp++;
  }
}