import { Library, EventTypes } from './library';

/**
 * Example client which instantiates a library with options and registers for library events
 */
export default class Client {
    constructor() {
        const library = new Library()
            .on(EventTypes.INITIALISED, (event) => void console.log('Library initialised', event)) // Library initialised { type: 'com.sky.library::initialised', propositionId: 1 }
            .on(EventTypes.CHANGE, (event) => void console.log('change event', event))
            .init({ propositionId: 1 })

    /*    this is message number 1 from ExampleController
        change event { type: 'com.sky.library::CHANGE', count: 0 }
        this is message number 2 from ExampleController
        change event { type: 'com.sky.library::CHANGE', count: 1 }
        this is message number 3 from ExampleController
        change event { type: 'com.sky.library::CHANGE', count: 2 }
        this is message number 4 from ExampleController
        change event { type: 'com.sky.library::CHANGE', count: 3 }*/
    }
}

new Client();