const Itinerary = require('../src/Itineraries')
const Port = require('../src/Port')


describe('Itineraries', ()=>{
    it('can be instanciated', ()=>{
        expect(Itinerary).toBeInstanceOf(Object)
    })

    it('can have ports', ()=>{
        const dover =  jest.fn();
        const calais = jest.fn();

        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais])
    })
})