

(function exportController(){
function Controller(){
    this.initialiseSea()

}

Controller.prototype.initialiseSea = function initialiseSea() {
    const backgrounds = [
        './images/images/water0.png',
        './images/images/water1.png',
    ];
    let backgroundIndex = 0;
        window.setInterval(()=>{document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
        backgroundIndex += 1;
    }, 1000);
}

Controller.prototype.renderPorts = function(ports) {
    const portsElement = document.querySelector('#ports');
    portsElement.style.width = '0px';
    ports.forEach((port, index) => {
        const newPortElement = document.createElement('div');
        const portsElementWidth = parseInt(portsElement.style.width, 10);
        newPortElement.className = 'port';
        portsElement.appendChild(newPortElement);
        portsElement.style.width = `${portsElementWidth + 100}px`;
    })
}

Controller.prototype.renderShip = function (ship) {
    const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
    const portElement = document.querySelector(`[data-port-index='${shipPortIndex}']`);
    const shipElement = document.querySelector('#ship');
    shipElement.style.top = `${portElement.offsetTop +35}px`;
    shipElement.style.left = `${portElement.offsetLeft -35}px`;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = Controller;
} else {
    window.Controller = Controller;
}
}());