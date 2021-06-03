

(function exportController(){
function Controller(){
    this.initialiseSea()

}

Controller.prototype = {

    initialiseSea() {
    window.setInterval(() =>{
        const backgrounds =[
            './images/images/water0.png',
            './images/images/water1.png',
        ];
        let backgroundIndex = 0;
        window.setInterval(() =>{
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            backgroundIndex+= 1;
        }, 1000)
    })
},
}
if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}
}());