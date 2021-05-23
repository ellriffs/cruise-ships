const Ship = require('../src/cruise-ships');


describe('Ship', () =>{
    const ship = new Ship ('the queen mary')
    it('defines if ship is a constructor', () =>{
    expect(ship).toBeInstanceOf(Object)
    })
    it('has a starting point', ()=>{
        const ship = new Ship ('dowver')
        expect(ship.startingPoint).toBe('Dover')
    })
    it('returns number of passengers to the array', ()=>{
    expect(ship.passengers).toEqual([])
    })
    it('pushes passengers to array',() =>{

        ship.board(4)
        expect(ship.passengers[0]).toEqual(4);
    })
    it('notifies the captain of the ship setting sail from current starting point', ()=>{
        ship.setSail()
        expect(ship.startingPoint).toBeFalsy()
    })
    
})