export default class ServiceOne {
  constructor(options) {
    this.options = options;
  }

  fetchCount(setTimeout, count) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(++count), 1000);
    })
  }

  log(message) {
    console.log(message);
  }
}
