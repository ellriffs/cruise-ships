
//port constructor//
(function exportPort(){
function Port(name){
    this.name = name
    this.ships = []
}

Port.prototype = {
    addShip: function(ship){
        this.ships.push(ship)
    },

    removeShip: function(ship){
    this.ships.splice(ship, 1)
    },
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Port;
} else {
    window.Port = Port;
}
}());

