import AbstractFactory from './abstract-factory';
import ExampleController from "../controllers/example-controller";

export default class ControllerFactory extends AbstractFactory {
    constructor() {
        super();
    }

    init(options) {
        // initialise the application model here....
        this.instance = {
            controller: new ExampleController(options.service1, options.eventBus)
        }
    }
}
