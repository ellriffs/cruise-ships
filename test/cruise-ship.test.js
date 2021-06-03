
const Ship = require('../src/cruise-ships');


let dubai;
let losAngeles;
let passenger;

describe('Ship', () =>{

describe('with ports and an itinerary',()=>{
        beforeEach( ()=>{
        dubai = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name:'Dubai',
                ships:[]
        };

        losAngeles = {
        addShip: jest.fn(),
        removeShip: jest.fn(),
        name:'LosAngeles',
        ships:[]
        };

        itinerary ={
        ports: [dubai, losAngeles]
        };

        ship = new Ship (itinerary)
        passenger = Number
});

        it('can be instantiated', () =>{
        expect(ship).toBeInstanceOf(Ship)

});

        it('has a starting port', ()=>{
        expect(ship.currentPort).toBe(dubai)

});
        it('can add passengers to array', () => {
        ship.board()
        expect(ship.passengers[0]).toEqual(passenger)
});

        it('can set sail', ()=>{
        ship.setSail();

        expect(ship.currentPort).toBeFalsy();
        expect(dubai.removeShip).toHaveBeenCalledWith(ship)
});

        it('gets added to the port on instantiation',()=>{
        expect(dubai.addShip).toHaveBeenCalledWith(ship)

});

        it('can dock at a different port', ()=>{
        ship.setSail();
        ship.dock();

        expect(ship.currentPort).toBe(losAngeles);
        expect(losAngeles.addShip).toHaveBeenCalledWith(ship);
})
        it('cant set sail further than its itinerary',()=>{
        ship.setSail();
        ship.dock();

        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });
});
});