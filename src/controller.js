
(function exportController() {
    class Controller {
        constructor (ship) {
        this.ship = ship;
        document.querySelector('#sailbutton').addEventListener('click', () => {
            this.setSail();
        });
        document.querySelector('#resetbutton').addEventListener('click', () => {
            location.reload();
    });
        window.document.querySelector('#boardbutton').addEventListener('click', () => {
        prompt ('Tickets Please!! \n What is your Name?')
        
        });
};

        initialiseSea() {
        const backgrounds = [
            './images/images/water0.png',
            './images/images/water1.png',
        ];
        let backgroundIndex =0;
        window.setInterval(()=>{
            document.querySelector('#viewport').style.backgroundImage = `url('${backgrounds[backgroundIndex % backgrounds.length]}')`;
            backgroundIndex += 1;   
        }, 1000);
    };

    renderPorts(ports) {
        const portsElement = document.querySelector('#ports');
        portsElement.style.width = '0px';
        

        ports.forEach((port, index) => {
            const newPortElement = document.createElement('div');
            newPortElement.dataset.portName = port.name;
            newPortElement.dataset.portIndex = index;
            newPortElement.className = 'port';

            const portsElementWidth = parseInt(portsElement.style.width, 10);
            portsElement.style.width = `${portsElementWidth + 256}px`;
        
        
            portsElement.appendChild(newPortElement);
        })
    };

    renderShip() {
        const ship = this.ship
        const shipPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const portElement = document.querySelector(`[data-port-index ='${shipPortIndex}']`);
        const shipElement = document.querySelector('#ship');
        shipElement.style.top = `${portElement.offsetTop + 32}px`;
        shipElement.style.left = `${portElement.offsetLeft - 32}px`;
    };

    setSail() {
        const ship = this.ship
        const currentPortIndex = ship.itinerary.ports.indexOf(ship.currentPort);
        const nextPortIndex = currentPortIndex + 1;
        const shipElement = document.querySelector('#ship');
        
        const sailInterval = setInterval(() => {
        const shipLeft = parseInt(shipElement.style.left, 10);
        const nextPortElement = document.querySelector(`[data-port-index='${nextPortIndex}']`);
        if (!nextPortElement) {
        return alert('End of the line!');
}
    this.renderMessage(`Now departing ${ship.currentPort.name}`);

    if (shipLeft === (nextPortElement.offsetLeft - 32)) {
    ship.setSail();
    ship.dock();
    this.renderMessage(`Now arriving at ${ship.currentPort.name}`);
    clearInterval(sailInterval);
    }
    
    shipElement.style.left = `${shipLeft + 1}px`;
    }, 30);
    
};
    renderMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.id = 'message';
    messageElement.innerHTML = message;

    const viewport = document.querySelector('#viewport');
    viewport.appendChild(messageElement);

    setTimeout(() => {
        viewport.removeChild(messageElement);
    }, 2300);
    };
};
        
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = Controller;
    } else {
        window.Controller = Controller;
    }
    }());