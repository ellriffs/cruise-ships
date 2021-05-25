const Itinerary = require('../src/Itineraries')
const Port = require('../src/Port')


describe('Itineraries', ()=>{
    it('can be instanciated', ()=>{
        expect(Itinerary).toBeInstanceOf(Object)
    })
    it('can have ports', ()=>{
        const dover = new Port ('Dover');
        const calais = new Port ('calais');

        const itinerary = new Itinerary([dover, calais]);
        expect(itinerary.ports).toEqual([dover, calais])
    })
})