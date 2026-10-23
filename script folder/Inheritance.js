// Use of SUPER KEYWORD in JavaScript is primarily associated with classes and inheritance. It allows a subclass to call methods or access properties from its parent class. Here’s a brief overview of how to use the `super` keyword:

class User {

  constructor(username){
      this.username = username
  }

  callme(){
    console.log(`UserName is ${this.username}.`);
  }
}
class Teacher extends User{

  constructor(username, email, password){
    super(username)
    this.email = email
    this.password = password
  }

  addCourse(){
    console.log(`A course was added by ${this.username}.`);
    
  }
}

const atharv = new Teacher("Atharv","atharv@gmail.com","123")

atharv.addCourse();
atharv.callme();

const Rohit = new Teacher("Rohit","rohit@gmail.com","234")

Rohit.addCourse();

// instanceof keyword is used to check the is object instance of any class or not.

console.log(atharv instanceof Teacher);
