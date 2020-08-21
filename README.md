# _Mr. Roboger's Neighborhood_

#### A web application that takes a number from a user and returns a range, Aug 21, 2020

#### By _**Natalie Murphy**_

## Description

Create a web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
These exceptions are written from least to most important. The first exception should apply unless the second exception does, and the same with the second and third. So, for example, in your finished program,

The number 13 should be replaced with "Won't you be my neighbor?"
The number 21 should be replaced with "Boop".
The number 32 should be replaced with "Won't you be my neighbor?"
A user should be able to enter a new number and see new results over and over again.

Example: If a user inputs a 5, the program should display a list of values: "0", "Beep!", "Boop", "Won't you be my neighbor?", 4, 5

## Specs

Spec: The program returns a range of numbers from 0 to the users inputted number
Input: "4"
Output: "0, 1, 2, 3, 4"

Spec: program can recognize indivdial numbers in a lager number input
Input: 123
Output: "1","2","3"

Spec: The program returns numbers that start with 3 from list
Input: "4"
Output: "3"

Spec: The program replaces a 3 in array with "Won't you be my neighbor?"
Input: "4"
Output: "0, 1, 2, "Won't you be my neighbor?", 4"

Spec: The program returns numbers that start with 2 from list
Input: "4"
Output: "2"

Spec: The program replaces a 2 in array with "Boop!".
Input: "4"
Output: "0, 1, "Boop!", "Won't you be my neighbor?", 4"

Spec: The program returns numbers that start with 1 from list
Input: "4"
Output: "1"

Spec: The program replaces a 1 in array with "Beep!"
Input: "4"
Output: "0, "Beep!", "Boop!", "Won't you be my neighbor?", 4"



Spec: Program recognizes hiarirchy of #s 3 > 2 > 1 in larger input array list
Input: "15"
output:"0, "Beep!", "Boop!", "Won't you be my neighbor?", 4,5,6,7,8,9,"Beep!","Beep!","Boop!","Won't you be my neighbor?","Beep!","Beep!"

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

Your code will be reviewed for the following objectives:

* JavaScript business logic and user interface logic are separate.
* Tests are included for each behavior and code is committed after each test passes.
* Application implements a loop and works as expected.
* The user can use the application repeatedly and see new results.
* All previous objectives have been met.
* Required functionality is in place by Friday deadline.
* Project demonstrates understanding of this week's concepts. If prompted, you are able to discuss your *  code with an instructor using correct terminology.
* Previous Objectives
* For reference, here are the standards from previous weeks that your app needs to meet this week:

* P roject is in a presentable, portfolio-quality state.
* Code is clean, well-refactored, and easy-to-read. This includes correct indentation, spacing, and * * *   including only necessary comments and debugging tools.
* Variable names are descriptive and use lower camel case (e.g. myVariableExample).
* Commits are made regularly with clear messages that finish the phrase "It will…".
* Project README that includes, bare minimum:
* author name
* program name
* detailed setup instructions
* description
* copyright and license information