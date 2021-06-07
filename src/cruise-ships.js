
(function exportShip(){
const passenger = Number


class Ship {
        constructor(itinerary) {
        this.passengers = []
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this)
    }
        setSail() {
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);
        if (currentPortIndex === (itinerary.ports.length - 1)) {
        throw new Error('End of itinerary reached');
        }
        this.previousPort = this.currentPort;
        this.currentPort = false;
        this.previousPort.removeShip(this)
    }
        dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this)
    }

    board() {
        this.passengers.push(passenger)
    }
}
    

    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Ship;
    } else {
        window.Ship = Ship;
    };
    }());