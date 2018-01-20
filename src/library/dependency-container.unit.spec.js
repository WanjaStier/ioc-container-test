import Container from './dependency-container';
import ServiceFactory from './factories/service-factory';

import assert from 'assert'
import AbstractFactory from "./factories/abstract-factory";

describe('DependencyContainer', () => {
    it('should initialise instance with options', () => {
        const options = {foo: 'bar'};
        class TestFactory extends AbstractFactory {
            init(o) {
                assert.deepEqual(o, options)
            }
        }

        Container.register(TestFactory, options);
    });

    it('should resolve a Singleton instance', () => {
        Container.register(ServiceFactory, {});

        const factory1 = Container.resolve(ServiceFactory);
        const factory2 = Container.resolve(ServiceFactory);

        assert.strictEqual(factory1, factory2);
    })
});