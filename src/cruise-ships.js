const x = Number
isAtDock = true


function Ship(name, portName){
    this.name = name
    this.startingPort = 'Dover'
    this.passengers = []
}

Ship.prototype.isAtDock = function () {
    if(isAtDock === true){
        return true
}   if (isAtDock === false){
    return false
}

}
Ship.prototype.board = function(x){
    this.passengers.push(x)
    console.log(`${this.passengers}` + ' passengers have now boarded '+ `${this.name}`)
};
    Ship.prototype.setSail = function(){
        isAtDock = !isAtDock 
        console.log(`${this.name}`+' has set sail from '+ `${this.startingPort}`)
    }



module.exports = Ship
