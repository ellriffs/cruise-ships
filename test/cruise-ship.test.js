const Ship = require('../src/cruise-ships');
const Port = require('../src/Port.js')





describe('Ship', () =>{
    const ship = new Ship ('the queen mary')
    it('defines if ship is a constructor', () =>{
    expect(ship).toBeInstanceOf(Object)
    })

    it('has a starting port', ()=>{
        const port = new Port('Dover');
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port)
    })
    it('returns number of passengers to the array', ()=>{
    expect(ship.passengers).toEqual([])
    })
    it('pushes passengers to array',() =>{
        ship.board(4)
        expect(ship.passengers[0]).toEqual(4);
    })
    it('notifies the captain of the ship setting sail from current starting point', ()=>{
        const port = new Port('Calais')
        const ship = new Ship (port)
        ship.setSail()
        expect(isAtDock).toBeFalsy()
    })
    it('will return whether ship is currently docked', () => {
        const port = new Port('Calais')
        const ship = new Ship (port)
        ship.isAtDock()
    expect(isAtDock).toEqual(false)
    })
    it('can dock at a different port', ()=>{
        const dover = new Port('Dover');
        const ship = new Ship (dover);
        const calais = new Port('calais');
        ship.dock(calais);

        expect(ship.currentPort).toBe(calais);
    })
    
});