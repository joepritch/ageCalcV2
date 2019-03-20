import { GetAge } from "./../src/logic.js"

describe("GetAge", function(){
  var instance;

  beforeEach(function(){
    instance = new GetAge;
  });

  it('should create a new Date object of the current date and assign the year to a variable', function(){
    let currentYear = instance.getCurrentYear();
    expect(currentYear).toEqual(2019);
  });

  it('should create a new Date object with the users input birth date and assign the year to a variable', function(){
    let birthYear = instance.getBirthYear('1996-07-17');
    expect(birthYear).toEqual(1996);
  });

  it('should read the year from both date objects and subtract the users "birth date" year from the "current date" year', function(){
    let currentYear = 2019;
    let birthYear = 1996;
    let userAge = currentYear - birthYear;
    expect(userAge).toEqual(23);
  });

  it('should divide the users age (determined in the previous step) by various numbers to determine the users age on different planets', function(){
    let userAge = 23;
    let mercuryAge = Math.floor(userAge / .24);
    let venusAge = Math.floor(userAge / .62);
    let marsAge = Math.floor(userAge / 1.88);
    let jupiterAge = Math.floor(userAge / 11.86);
    expect(mercuryAge).toEqual(95);
    expect(venusAge).toEqual(37);
    expect(marsAge).toEqual(12);
    expect(jupiterAge).toEqual(1);
  });

  it('should subtract the users age from 80 to determine the users life expectancy', function(){
    let userAge = 23;
    let avgLife = 80;
    let remainingYears = avgLife - userAge;
    expect(remainingYears).toEqual(57);
  });
});
