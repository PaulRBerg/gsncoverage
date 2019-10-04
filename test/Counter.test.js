const Counter = artifacts.require('Counter');

contract('Counter', ([_, other]) => {
    it('should increment', async () => {
        const counter = await Counter.new();
        await counter.increase({ from: other });
        const value = await counter.value();
        assert.equal(value, 1, 'The value was not 1.');
    });
});