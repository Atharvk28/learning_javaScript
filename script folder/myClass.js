class User{

  constructor (userName, email, password){
    this.userName = userName
    this.email = email
    this.password = password
  }

  encryptedpassword(){
    return `${this.password}abc`
  }
  
  channgeUsername(){
    return `${this.userName.toUpperCase()}`
  }

  static myclass(name,roll) {
    return   console.log(`My name is ${name}. and my roll no is ${roll}`);
    
  }

  
}
   const obj =new User("atharv","atharv@gmail.com","123")
// console.log(obj);
// console.log(obj.encryptedpassword());
// console.log(obj.channgeUsername());
// console.log(new User("Anurag","anurag@gmail.com","434"));     //directly printing the constructor.

myclass("Atharv","45");

