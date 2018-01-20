import AbstractFactory from './abstract-factory';
import ServiceOne from "../services/service-one";
import ServiceTwo from "../services/service-two";

export default class ServiceFactory extends AbstractFactory {
  constructor() {
    super();
  }

    /**
     * Thou shall not pass options to a Singleton access method
     * @returns {Object}
     */
  getInstance() {
    if (!this.instance) {
      throw new Error('Services must need to be initialised with options');
    }
    return this.instance;
  }

  init(options) {
    const service1 = new ServiceOne(options);
    const service2 = new ServiceTwo(options, service1);
    this.instance = {
      service1,
      service2
    }
  }
}
