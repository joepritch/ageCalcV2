## Planetary Age Calculator
---

#### Joe Pritchett

### Description

The goal of this project is to display to the user their age on various different planets in the solar system. It also displays how many years they have left to live assuming they will live to 80.

I considered just having the user input their age via a number input, but I wanted to try using the 'Date' input for this project, since I used the 'Date' object in my JS. The logic behind finding the users age is simplistic, as it only compares the year of the users birth date to the current year. As a result, the application essentially assumes that the users birthday is January 1st, which, while not optimal, is fine for the scale of this project.

## Setup
**Note, this project uses a webpack environment that is tailored for windows, some commands may not run properly on other operating systems**

Make sure you have Node.js installed!

* Clone or download this repo
* Using the terminal or a console emulator, navigate to the project directory
* Run the commands 'npm install', 'npm run build', 'npm run start' consecutively


## Specs

The user enters the date they were born.
Let user age equal current year minus birth year.

Calculate user age on various planets:

For Mercury:
  let mercury age equal user age divided by .24

For Venus:
  let venus age equal user age divided by .62

For Mars:
  let mars age equal user age divided by 1.88

For Jupiter:
  let jupiter age equal user age divided by 11.86

 

Calculate life expectancy:

~~If the user owns a space suit:~~

  Let life expectancy equal 80 years.

  Let remaining years equal life expectancy minus user age.

  ~~if remaining years is negative:~~

  ~~congratulate the user for outliving their life expectancy.~~

  ~~else~~

  return remaining years

~~If the user doesn't own a space suit:~~

  ~~return a snarky comment about how the user can't survive without a suit.~~

## Technologies Used

_Webpack (dependencies can be found in package.json), JavaScript, NPM, HTML, Git Bash, Atom_

## License

MIT license, Copyright © 2019 Joe Pritchett
