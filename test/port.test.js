const Port = require('../src/Port')

describe('Port',()=>{
    let port;
    let ship;
    let titanic;
    let queenMary;

    beforeEach(()=>{
        port = new Port ('Dubai');
        ship =  jest.fn()
        titanic = {}
        queenMary = {}
    })
    it('can be instantiated',()=>{

    expect(port).toBeInstanceOf(Port)
    })

    it('adds ship',()=>{
    port.addShip(ship);

    expect(port.ships).toContain(ship);
    })

    it('removes Ship',()=>{
    port.addShip(titanic);
    port.addShip(queenMary);
    port.removeShip(queenMary);

    expect(port.ships).toEqual([titanic]);  
    })
});