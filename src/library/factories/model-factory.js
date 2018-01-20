import AbstractFactory from './abstract-factory';

export default class ModelFactory extends AbstractFactory {
    constructor() {
        super();
    }

    init(options) {
        // initialise the application model here....
        this.instance = {
            config: options,
            items: [{id: 1}, {id: 2}, {id: 3}]
        }
    }
}
