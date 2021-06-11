const AdvancedStorage = artifacts.require('AdvancedStorage');

let advancedStorage = null;
before(async () =>{
    advancedStorage = await AdvancedStorage.deployed();
});

contract('AdvancedStorage',() => {
    it('Should add an element', async () => {
        await advancedStorage.add(10);
        const result = await advancedStorage.ids(0);
        assert(result.toNumber() === 10);
    });
    it('Should get an element', async () => {
        await advancedStorage.add(20);
        const result = await advancedStorage.get(1);
        assert(result.toNumber() === 20);
    });
    it('Should get all an element', async () => {
        const rawId = await advancedStorage.getAll();
        const ids = rawId.map(id => id.toNumber());
        assert.deepEqual(ids , [10,20]);
    });
});