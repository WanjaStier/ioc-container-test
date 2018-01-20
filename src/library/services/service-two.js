export default class ServiceTwo {
    constructor(options, service1) {
        this.options = options;
        this.service1 = service1;
    }

  execMethodOnService1() {
      this.service1.log('this is a message from ServiceTwo');
  }
}
