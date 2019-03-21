export class GetAge {
  getYear(birthDate){
    let year = new Date(birthDate).getFullYear();
    if (isNaN(year)) {
      year = new Date().getFullYear();
    }
    return year;
  }
  getUserAge(birthYear, currentYear){
    const userAge = currentYear - birthYear;
    return userAge;
  }
  getPlanetary(userAge){
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
