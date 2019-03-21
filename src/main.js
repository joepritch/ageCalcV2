import 'bootstrap';
import 'bootstrap/scss/bootstrap.scss';
import 'jquery';
import 'jquery/src/jquery.js';
import './sass/styles.scss';
import { GetAge } from './logic.js';

$(document).ready(function(){
  $("#submit").click(function(){
    const instance = new GetAge();
    const birthDate = $("input").val();
    const birthYear = instance.getYear(birthDate);
    const currentYear = instance.getYear();
    const userAge = instance.getUserAge(birthYear, currentYear);
    const agesArray = instance.getPlanetary(userAge);
    const remainingYears = instance.getLifeExpectancy(userAge);
    const remainingArray = instance.getPlanetary(remainingYears);
    console.log(remainingArray);
    $('.earth').text(`Your age is ${userAge}, and you have ${remainingYears} years left to live.`)
    $('.mercury').text(`Your age is ${agesArray[0]}, and you have ${remainingArray[0]} years left to live.`)
    $('.venus').text(`Your age is ${agesArray[1]}, and you have ${remainingArray[1]} years left to live.`)
    $('.mars').text(`Your age is ${agesArray[2]}, and you have ${remainingArray[2]} years left to live.`)
    $('.jupiter').text(`Your age is ${agesArray[3]}, and you have ${remainingArray[3]} years left to live.`)
  });
});
