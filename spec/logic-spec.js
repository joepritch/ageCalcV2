import { GetAge } from "./../src/logic.js"

describe("GetAge", function(){
  it('should create a new Date object with the current date', function(){
    let currentDate = new Date();
    expect(currentDate.getFullYear()).toEqual(2019);
  });

  it('should create a new Date object with the users input birth date', function(){

  });

  it('should read the year from both date objects and subtract the users "birth date" year from the "current date" year', function(){

  });

  it('should divide the users age (determined in the previous step) by various numbers to determine their age on different planets', function(){

  });

  it('should subtract the users age from 80 to determine the users life expectancy', function(){

  });
});
