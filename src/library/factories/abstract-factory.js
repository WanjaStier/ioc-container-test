export default class AbstractFactory {
    constructor() {}
    /**
     * Thou shall not pass options to a Singleton access method
     * @returns {Object}
     */
    getInstance() {
        if (!this.instance) {
            throw new Error('Singleton insances need to be initialised with options');
        }
        return this.instance;
    }

    init(options) {}
}
