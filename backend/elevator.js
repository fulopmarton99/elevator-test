// base class of elevators

// const Elevator = (name, position) => {
//   var occupied = false;

//   // var [name, position] = [elevatorName, elevatorPosition];
//   return {
//     getOccupied: () => {
//       return this.occupied;
//     },
//     setOccupied: (value) => {
//       this.occupied = value;
//     },
//     name,
//     position,
//     occupied: false,
//     destination: position,
//     sendTo: (floor) => {
//       if (this.occupied) {
//         console.log("ERROR: Trying to send occupied elevator");
//       } else {
//         console.log(`sending ${this.name} to ${floor}`);
//         console.log(this.occupied);
//         this.occupied = true;
//         destination = floor;
//         console.log(occupied);
//       }
//     },
//   };
// };

class Elevator {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.occupied = false;
    this.destination = position;
  }
  arrive = () => {
    this.occupied = false;
    this.position = this.destination;
  };
  sendTo = (floor) => {
    if (this.occupied) {
      console.log("ERROR: Trying to send occupied elevator");
    } else {
      console.log(`sending ${this.name} to ${floor}`);
      console.log(this.occupied);
      this.occupied = true;
      this.destination = floor;
      console.log(this.occupied);
      setTimeout(() => {
        this.arrive();
      }, 3000);
    }
  };
}

module.exports = Elevator;
