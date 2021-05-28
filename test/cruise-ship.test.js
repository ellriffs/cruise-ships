
const Ship = require('../src/cruise-ships');
const Port = require('../src/Port.js');
const Itinerary = require('../src/Itineraries');



describe('Ship', () =>{
    const port = new Port ('Dover')
    const itinerary = new Itinerary([port])
    const ship = new Ship (itinerary)
    it('can be instantiated', () =>{
    expect(ship).toBeInstanceOf(Object)
    })

    it('has a starting port', ()=>{
        const port = new Port('Dover');
        const itinerary = new Itinerary([port]);
        const ship = new Ship(itinerary);

        expect(ship.currentPort).toBe(port)
    })

    it('returns number of passengers to the array', ()=>{
    expect(ship.passengers).toEqual([])
    })

    it('pushes passengers to array',() =>{
        ship.board(4)
        expect(ship.passengers[0]).toEqual(4);
    })

    it('can set sail', ()=>{
        const dover = new Port('Dover');
        const calais = new Port('Calais')
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);

        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
        expect(dover.ships).not.toContain(ship)
    })
    
    it('can dock at a different port', ()=>{
        const dover = new Port('Dover');
        const calais = new Port('Calais');
        const itinerary = new Itinerary([dover, calais])
        const ship = new Ship(itinerary);

        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(calais);
        expect(calais.ships).toContain(ship);
    })

    it('cant set sail further than its itinerary',()=>{
        const dover = new Port('Dover');
        const calais = new Port ('Calais');
        const itinerary = new Itinerary([dover, calais]);
        const ship = new Ship(itinerary);
        
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
    })
    
    it('gets added to the port on instantiation',()=>{
        const dover = new Port ('Dover');
        const itinerary = new Itinerary([dover]);
        const ship = new Ship(itinerary);

        expect(dover.ships).toContain(ship)
    })
})