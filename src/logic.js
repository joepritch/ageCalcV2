export class GetAge {
  getCurrentYear(){
    const currentYear = new Date().getFullYear();
    return currentYear;
  }
  getBirthYear(birthDate){
    const birthYear = new Date(birthDate).getFullYear();
    return birthYear;
  }
}
