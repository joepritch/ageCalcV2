export class GetAge {
  getCurrentYear(){
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  getBirthYear(birthDate){
    const birthYear = new Date(birthDate).getFullYear();
    return birthYear;
  }
  getUserAge(birthYear, currentYear){
    const userAge = currentYear - birthYear;
    return userAge;
  }
  getPlanetaryAge(userAge){
    const planetaryArray = [.24, .62, 1.88, 11.86];
    let ageArray = [];
    for (var i = 0; i < planetaryArray.length; i++) {
      let modifier = planetaryArray[i];
      let age = Math.floor(userAge / modifier);
      ageArray.push(age);
    }
    return ageArray;
  }
  getLifeExpectancy(userAge){
    const remainingYears = 80 - userAge;
    return remainingYears;
  }
}
