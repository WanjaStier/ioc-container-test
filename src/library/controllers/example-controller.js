import EventTypes from '../event-types';

export default class ExampleController {
    constructor(service, eventBus) {
        this.service = service;
        this.eventBus = eventBus;
    }

    execMethodOnService1(count = 0) {
        this.service.log(`this is message number ${count} from ExampleController`);
        this.service.fetchCount(setTimeout, count)
            .then(c => {
                if (count < 3) {
                    this.execMethodOnService1(c);
                }
                this.eventBus.dispatch(EventTypes.CHANGE, {count});
            })
    }


}
