const Port = require('../src/Port')

describe('Port',()=>{
    it('can be instantiated',()=>{
        const port = new Port('Dover')
        expect(port).toBeInstanceOf(Object)
    })
})