const user = {
  firstName: 'Alice',
  lastName: 'Wonderland',
  fullName: function() {
    this.fullName();
    return `Hello ${this.firstName} ${this.lastName}`
  }
}

// console.log(user.fullName())

const car = {
  color: 'yellow',
  licensePlate: '111aaa',
  car2: {
    color:'red',
    licensePlate: '222bbb',
    sayColor: function() {
      return `${this.color} - is my car`
    }
  }
}

console.log(car.car2.sayColor())