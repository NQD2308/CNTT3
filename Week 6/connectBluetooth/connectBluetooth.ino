#include <SoftwareSerial.h>
#define TX_PIN D7 //chân D7 arduino có chức năng của TX
#define RX_PIN D6 // chân D6 arduino có chức năng của RX
String data;
int led = D4;
int flag = 0;
SoftwareSerial bluetooth(RX_PIN, TX_PIN); //RX_PIN Arduino nối vào chân TX của HC_06
//HC05 và TX_PIN Arduino nối với RX của HC_06/HC_05
void setup() {
 Serial.begin(9600);
 bluetooth.begin(9600);

 pinMode(led, OUTPUT);
 pinMode(RX_PIN, INPUT);
 pinMode(TX_PIN, OUTPUT);

 digitalWrite(led, HIGH);
 Serial.println("Bluetooth On please press 1 or 0 blink LED");
}
void loop() {
if (bluetooth.available() > 0) {
 char c = bluetooth.read();
 switch (c)
 {
 case '1':
 data = "on";
 break;
 case '0':
 data = "off";
 break;
 default:
 break;
 }
 }

 if (data.length() > 0) {
 if(data == "on")
 {
 digitalWrite(led, HIGH);
 Serial.println("LED On");
 bluetooth.println("turn on led done");
 }
 else if(data == "off")
 {
 digitalWrite(led, LOW);
 Serial.println("LED Off");
 bluetooth.println("turn off led done");
 }
 data="";
 }
}