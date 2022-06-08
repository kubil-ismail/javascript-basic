const biodata = {
  firstName: "Bilkis", // Property
  lastName: "Ismail", // Property
  // Method
  //   getFullName: function () {
  //     console.log(this);
  //     // return `${this.firstName} ${this.lastName}`;
  //   },
  //   getFullName: _ => {
  //     console.log(this);
  //     //   hanya mencakup di dalam sini saja
  //     // return `${this.firstName} ${this.lastName}`;
  //   },
  getFullName() {
    return `${this.getFirstName()} ${this.getLastName(this)}`;
  },
  getFirstName() {
    return this.firstName;
  },
  getLastName: ({ lastName }) => lastName,
};

biodata.getFullName(); // Bilkis Ismail
