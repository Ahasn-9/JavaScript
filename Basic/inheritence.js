class user {
  constructor(username) {
    this.username = username;
  }
  logUser() {
    console.log(`User: ${this.username}`);
  }
}

class admin extends user {
  constructor(username, password, email) {
    super(username);
    this.password = password;
    this.email = email;
  }
  logAdmin() {
    console.log(`Admin: ${this.username}, ${this.password}, ${this.email}`);
  }
}

const user1 = new admin("ahsan", "mughal", "1213");

user1.logUser();
