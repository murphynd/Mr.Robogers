# _Mr. Roboger's Neighborhood_

#### A web application that takes a number from a user and returns a range, Aug 21, 2020

#### By _**Natalie Murphy**_

## Description

Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

1. Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
2. Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
3. Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
4. These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

5. The number 13 should be replaced with "Won't you be my neighbor?"
6. The number 21 should be replaced with "Boop".
7. The number 32 should be replaced with "Won't you be my neighbor?"
8. A user should be able to enter a new number and see new results over and over again.


## Specs
```
[] Spec: The program returns a range of numbers from 0 to the users inputted number
[] Input: "4"
[] Output: "0, 1, 2, 3, 4"
``` 
```
[] Spec: The program returns numbers that start with 3 from list
[] Input: "4"
[] Output: "3"
```
```
[] Spec: The program replaces a 3 in array with "Won't you be my neighbor?"
[] Input: "4"
[] Output: "0, 1, 2, "Won't you be my neighbor?", 4"
```
```
[]Spec: The program returns numbers that start with 2 from list
[]Input: "4"
[]Output: "2"
```
```
[]Spec: The program replaces a 2 in array with "Boop!".
[]Input: "4"
[]Output: "0, 1, "Boop!", "Won't you be my neighbor?", 4"
```
```
[]Spec: The program returns numbers that start with 1 from list
[]Input: "4"
[]Output: "1"
```
```
[]Spec: The program replaces a 1 in array with "Beep!"
[]Input: "4"
[]Output: "0, "Beep!", "Boop!", "Won't you be my neighbor?", 4"
```
```
[]Spec: program can recognize indivdial numbers in a lager number input
[]Input: 123
[]Output: "1","2","3"
```
```
Spec: Program recognizes hiarirchy of #s 3 > 2 > 1 in larger input array list
Input: "15"
output:"0, "Beep!", "Boop!", "Won't you be my neighbor?", 4,5,6,7,8,9,"Beep!",
"Beep!"(11),"Boop!"(12),"Won't you be my neighbor?"(13),"Beep!"(14),"Beep!"(15),"Beep!"(16),"Beep!"(17),"Beep!"(18),"Beep!"(19)
"Boop!"(21),"Boop!"(22),"Won't you be my neighbor?"(23),"Boop!"(24),"Boop!"(25),"Boop!"(26),"Boop!"(27),"Boop!"(28),"Boop!"(29)
```

## Setup/Installation Requirements

open index.html to view in browser

## Known Bugs

## Support and contact details

If you run into any issues or have questions, ideas or concerns contact Natalie Murphy at Nataliemurphy500@gmail.com or make a contribution to the code.

## Technologies Used

JavaScript / jQuery / Html / Bootstrap / CSS

### License

MIT

Copyright (c) 2020 **_Natalie Murphy_**
