//task 01. a "person" class to hold all the details.

console.log("person class to hold all the details");

class Person {
    constructor(firstName, lastName, age, contactNumber, MailId, location, profession) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.contactNumber = contactNumber;
      this.MailId = MailId;
      this.location = location;
      this.profession =profession;
    }
    getFullName() {
      const fullName = this.firstName + ' ' + this.lastName
      return fullName
    }
    getPro(){
        return `Hi this ${this.firstName+" "+this.lastName} and i'm a ${this.profession}!!!`
    }
    set updateNum(newNum){
        this.contactNumber=newNum;
    }
}

let topdevelopers = new Person("Natrayan","S", 28, 9876543210 , "s.natrayan06ayan96@gmail.com", "Palani","Developer");
 
console.log(topdevelopers);
topdevelopers.updateNum = "0123456789";
console.log(topdevelopers.getFullName());
console.log(topdevelopers.getPro());
console.log(topdevelopers);
