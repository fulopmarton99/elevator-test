// base class of elevators

class Elevator {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.occupied = false;
    this.destination = position;
    this.sendingTime = Date.now();
  }
  eventQueue = []; //elevator specific events

  setOnFreeCallback = (callback) => {
    this.onFreeCallback = callback;
  };
  arrive = () => {
    setTimeout(() => {
      this.occupied = false;
      this.position = this.destination;

      if (this.eventQueue.length === 0) {
        this.onFreeCallback(this.name);
      } else {
        const event = this.eventQueue[0];
        this.eventQueue = this.eventQueue.splice(1, -1);
        event();
      }
    }, 1000);
  };
  intercept = (floor, direction) => {
    // try to intercept if possible
    const elevatorDirection = this.position < this.destination ? 1 : -1;
    if (elevatorDirection != direction) {
      //
      return false;
    }
    const [minf, maxf] = Math.min(this.position, this.destination);
    if (minf > floor) {
      return false;
    }
    if (maxf < floor) {
      return false;
    }
    const currentTime = Date.now();
    if (currentTime > this.arrivalTime) {
      // Elevator already arrived to destination
      return false;
    }
    // calculate current position of elevator
    const currentPosition =
      this.position +
      (this.destination - this.position) *
        ((currentTime - this.sendingTime) /
          (this.arrivalTime - this.sendingTime));

    // check if elevator went past intercepting floor
  };
  sendTo = (floor, callback) => {
    if (this.occupied) {
      this.eventQueue.push(() => {
        this.sendTo(floor, callback);
      });
    } else {
      this.occupied = true;
      console.log(`sending ${this.name} to ${floor}`);

      this.destination = floor;

      this.sendingTime = Date.now();
      this.arrivalTime =
        Date.now() + Math.abs(this.position - this.destination) * 1000;

      setTimeout(() => {
        this.arrive();
      }, Math.abs(this.position - this.destination) * 1000);
      callback();
    }
  };
}

module.exports = Elevator;
