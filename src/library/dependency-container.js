const instances = new Map();

/**
 * Makes sure that the type is a function.
 * We could also allow for more flexibility and resolve the clazz type from a string via a RegEx
 * @param {*} clazz
 */
function enforceType(clazz) {
    if (typeof clazz !== 'function') {
        throw new Error(`argument clazz ${clazz} needs to be of type function`);
    }
}

export default class DependencyContainer {
    /**
     * Registers a class instance (assuming the class will manage its own dependencies.
     * Otherwise we would have to provide extra functionality for registering / resolving class dependencies which would then be injected into the constructor
     * @param {function} clazz
     */
    static register(clazz, options) {
        enforceType(clazz);
        const instance = new clazz();
            instance.init(options);
        instances.set(clazz, instance);
    }

    /**
     * Resolves the instance for a given class
     * @param {function} clazz
     * @returns {Object}
     */
    static resolve(clazz) {
        enforceType(clazz);
        if (!instances.get(clazz)) {
            throw new Error(`instance for clazz ${clazz} could not be found.`)
        }

        return instances.get(clazz).getInstance();
    }

}