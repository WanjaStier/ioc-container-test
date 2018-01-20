import EventDispatcher from './event-dispatcher';
import Container from './dependency-container';
import ServiceFactory from "./factories/service-factory";
import ModelFactory from "./factories/model-factory";
import ControllerFactory from "./factories/controller-factory";
import eventTypes from './event-types';

export class Library {
    constructor() {
        this.eventBus = new EventDispatcher();
    }

    init(options = {}) {
        const defaulOptions = {
            ...options,
            eventBus: this.eventBus,
            foo: 'bar'
        };

        Container.register(ServiceFactory, defaulOptions);
        Container.register(ModelFactory, defaulOptions);

        const {service1, service2} = Container.resolve(ServiceFactory);

        Container.register(ControllerFactory, {...defaulOptions, service1});
        const {controller} = Container.resolve(ControllerFactory);

        // in a real world app we probably want to avoid calling services from all over the place and dispatch an event / redux action etc instead.
        controller.execMethodOnService1(); // this is a message from ExampleController
        service2.execMethodOnService1(); // this is a message from ServiceTwo

        this.eventBus.dispatch(EventTypes.INITIALISED, options);
    }

    on(type, listener) {
        this.eventBus.addListener(type, listener);
        return this;
    }

    off(type, listener) {
        this.eventBus.removeListener(type, listener);
        return this;
    }

    dispose() {
        // clean up
    }
}

export const EventTypes = eventTypes;