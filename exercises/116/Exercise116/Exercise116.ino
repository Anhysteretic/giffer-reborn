//**************ACTIVITIES TO CHECK WHILE GRADING**********BEGIN*********
//
// 1.	Make sure that an array named TwoLEDsUpDownTogether has been created and used
// 2.	Ensure that a function has been created named ArraysSequenceTwoLEDsUpAndDownTogether
// 3.	The order of the LED’s should be 2&9, 3&10, 4&11,5&12, 6&13,7&14, 8&15, then 7&14, 6&13, 5&12, 4&11, 3&10, 2&9
// 4.	Make sure that function uses three parameters (example – but not required - ledOnTime, ledOffTime, and repeatCount)
//
// ***************ACTIVITIES TO CHECK WHILE GRADING END*********************

void setup()
{
  int LEDNum;

  for(LEDNum = 2; LEDNum <= 15; LEDNum++)
  {
    pinMode(LEDNum, OUTPUT);
  }
}

void loop()
{
  ArraysSequenceTwoLEDsUpAndDownTogether(150,150, 5);
}

void ArraysSequenceTwoLEDsUpAndDownTogether(int ledOnTime, int ledOffTime, int repeatCount)
{
  int TwoLEDsUpDownTogether[26] = {
    2, 9, 3, 10, 4, 11, 5, 12, 6, 13, 7, 14, 8, 15, 7, 14, 6, 13, 5, 12, 4, 11, 3, 10, 2, 9    };
  int index;
  int count;

  for (count = 1; count <= repeatCount; count++)
  {
    for (index = 0; index <= 25; index=index+2)
    {
      digitalWrite(TwoLEDsUpDownTogether[index], HIGH);
      digitalWrite(TwoLEDsUpDownTogether[index+1], HIGH);
      delay(ledOnTime);
      digitalWrite(TwoLEDsUpDownTogether[index], LOW);
      digitalWrite(TwoLEDsUpDownTogether[index+1], LOW);
      delay(ledOffTime);
    }
  }
}

// ************************************************BOARD+CONFIGURATION FOOTER BEGIN****************************************************
//
// Please do not modify the content of the footer, except for what comes between the triple hashtags (###...###). Thank you!
// If you're curious, the #%! is to help parse the text for the board and configuration information.
// In the following line of commented code, please ensure that the board type is correct (either "LED Board" or "KS Board").
// If you would like additional digital or analog inputs in the exercise, please enter them with the following format:
// (Keep in mind that the time is in units of milliseconds and the value can range from 0 to 1023.)
// EXAMPLE 1: "board": {"type":"LED Board", "setup":{"pinKeyframes":[]}}
// EXAMPLE 2: "board": {"type":"KS Board", "setup":{"pinKeyframes":[{"time":0,"pin":5,"value":0},{"time":2750,"pin":5,"value":260}]}}
//
// ACTUAL:#%!"board": {"type":"LED Board", "setup":{"pinKeyframes":[]}}#%!
//
// *************************************************BOARD+CONFIGURATION FOOTER END*****************************************************
