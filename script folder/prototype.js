function createUser(productname,price ){
this.productname = productname
this.price = price
return this
}
createUser.prototype.increment = function(){
  price++;
}
createUser.prototype.printme = function(){
  console.log(`the price is ${this.price}`);
  
}

const chai =  new createUser('chai',30)

chai.printme()