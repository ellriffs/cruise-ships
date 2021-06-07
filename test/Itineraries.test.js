const Itinerary = require('../src/Itinerary')

let ports;
let dubai;
let losAngeles;
let itinerary;


describe('Itinerary', ()=>{
    beforeEach(()=>{
        dubai = jest.fn()
        losAngeles = jest.fn()
        ports = [dubai, losAngeles]
        itinerary = new Itinerary(ports);

    })
    it('can be instantiated', ()=>{
        expect(itinerary).toBeInstanceOf(Itinerary)
    })

    it('can have ports', ()=>{
        expect(itinerary.ports).toEqual([dubai, losAngeles])
    })
})