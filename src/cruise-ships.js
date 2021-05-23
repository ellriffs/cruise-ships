const startingPort = this.port
x = Number

function Ship(name){
    this.name = name
    this.startingPoint = 'Dover';
    this.passengers = []
}
Ship.prototype.board = function(x){
    this.passengers.push(x)
    console.log(`${this.passengers}` + ' passengers have now boarded '+ `${this.name}`)
};
    Ship.prototype.setSail = function(){
    this.startingPoint = !this.startingPoint
    }



module.exports = Ship
