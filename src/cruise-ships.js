const Port = require("./Port");

const x = Number
isAtDock = true



function Ship(currentPort){
    this.currentPort = currentPort
    this.passengers = []

}
Ship.prototype.isAtDock = function () {
    if(isAtDock === true){
        return ("Ship is currently at  "+ `${this.currentPort}`)
}   if (isAtDock === false){
    return ('Ship is out to sea')
}

};
Ship.prototype.board = function(x){
    this.passengers.push(x)
    console.log(`${this.passengers}` + ' passengers have now boarded' )
};
Ship.prototype.setSail = function(){
        isAtDock = !isAtDock 
        console.log( 'Ship has set sail')
};
Ship.prototype.dock = function(newPort){
    return this.currentPort = newPort


}

module.exports = Ship

