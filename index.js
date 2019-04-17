const five = require('johnny-five');
const board = new five.Board();

board.on('ready', () => {
    const led = new five.Led(13);
    
    led.blink(500);
    
    setTimeout(() => {
        led.blink(300);
        setTimeout(() => {
            led.blink(150);
            setTimeout(() => {
                led.blink(50);
                setTimeout(() => {
                    led.stop().off();
                }, 1000);
            }, 2000);
        }, 0);
    }, 3000);

})