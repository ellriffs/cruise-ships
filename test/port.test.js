const Port = require('../src/Port')

describe('Port',()=>{
    it('can be instantiated',()=>{
        const port = new Port('Dover');
        expect(port).toBeInstanceOf(Object)
    })
    it('adds ship',()=>{
        const port = new Port ('Dover');
        const ship = {};
        port.addShip(ship);

        expect(port.ships).toContain(ship);
    })

    it('removes Ship',()=>{
        const port = new Port ('Dover');
        const titanic = {}
        const queenMary = {}

        port.addShip(titanic);
        port.addShip(queenMary);
        port.removeShip(queenMary);

        expect(port.ships).toEqual([titanic]);  
    })
})