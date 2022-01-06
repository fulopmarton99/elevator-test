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

  setOnFreeCallback = (callback) => {
    this.onFreeCallback = callback;
  };
  arrive = () => {
    this.occupied = false;
    this.position = this.destination;
    this.onFreeCallback(this.name);
  };
  sendTo = (floor, callback) => {
    if (this.occupied) {
      console.log("ERROR: Trying to send occupied elevator");
    } else {
      this.occupied = true;
      console.log(`sending ${this.name} to ${floor}`);
      console.log(this.occupied);

      this.destination = floor;
      
      console.log(this.position - this.destination);
      setTimeout(() => {
        this.arrive();
      }, Math.abs(this.position - this.destination) * 1000);
      callback();
    }
  };
}

module.exports = Elevator;
