class User {
  constructor(username, email, password) {
    this.name = username;
    this.email = email;
    this.password = password;
  }
  encryptPassword() {
    // Encrypt password
    return `${this.password}123`;
  }
  changeUsername() {
    return `${this.name.toUpperCase()}`;
  }
}

let user1 = new User("johndoe", "ahsan@gmail.com", "abc");
console.log(user1.encryptPassword());
console.log(user1.changeUsername());

//same thing using prototype approach

function Userr(username, email, password) {
  this.name = username;
  this.email = email;
  this.password = password;
}

Userr.prototype.encryptPassword = function () {
  // Encrypt password
  return `${this.password}123`;
};

Userr.prototype.changeUsername = function () {
  return `${this.name.toUpperCase()}`;
};

let user2 = new Userr("Mughal", "mughal@gmail.com", "absdc");
console.log(user2.encryptPassword());
console.log(user2.changeUsername());
