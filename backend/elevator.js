// base class of elevators


class Elevator {
  constructor(name, position) {
    this.name = name;
    this.position = position;
    this.occupied = false;
    this.destination = position;
    this.sendingTime = Date.now()
  }
  eventQueue = []; //elevator specific events

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
      self.eventQueue.push(() => {
        this.sendTo(floor, callback);
      });
    } else {
      this.occupied = true;
      console.log(`sending ${this.name} to ${floor}`);
      console.log(this.occupied);
      this.destination = floor;

      this.sendingTime = Date.now();
      this.arrivalTime = Date.now() + Math.abs(this.position - this.destination) * 1000;


      console.log(this.position - this.destination);
      setTimeout(() => {
        if (this.eventQueue.length === 0) {
          this.arrive();
        } else {
          const event = this.eventQueue[0];
          this.eventQueue = this.eventQueue.splice(1, -1);
          event();

        }
      }, Math.abs(this.position - this.destination) * 1000);
      callback();
    }
  };
}

module.exports = Elevator;
