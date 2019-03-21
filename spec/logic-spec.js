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
    let currentYear = instance.getCurrentYear();
    let birthYear = instance.getBirthYear('1996-07-17');
    let userAge = instance.getUserAge(birthYear, currentYear);
    expect(userAge).toEqual(23);
  });

  it('should divide the users age (determined in the previous step) by various numbers to determine the users age on different planets', function(){
    let currentYear = instance.getCurrentYear();
    let birthYear = instance.getBirthYear('1996-07-17');
    let userAge = instance.getUserAge(birthYear, currentYear);
    let agesArray = instance.getPlanetaryAge(userAge);
    let mercuryAge = agesArray[0];
    let venusAge = agesArray[1]
    let marsAge = agesArray[2]
    let jupiterAge = agesArray[3]
    expect(mercuryAge).toEqual(95);
    expect(venusAge).toEqual(37);
    expect(marsAge).toEqual(12);
    expect(jupiterAge).toEqual(1);
  });

  it('should subtract the users age from 80 to determine the users life expectancy', function(){
    let currentYear = instance.getCurrentYear();
    let birthYear = instance.getBirthYear('1996-07-17');
    let userAge = instance.getUserAge(birthYear, currentYear);
    let remainingYears = instance.getLifeExpectancy(userAge);
    expect(remainingYears).toEqual(57);
  });

  it('should take the users remaning earth years and divid it by various numbers to determine the users remaining years on different planets', function(){
    
  });
});
