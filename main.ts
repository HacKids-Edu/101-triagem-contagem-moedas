/**
 * 0,05 - P2
 * 
 * 0,10 - P1
 * 
 * 0,25 - P1 & P2
 * 
 * 0,50 - P0
 * 
 * 1,00 - P0 & P2
 */
/**
 * P0 - Verde
 * 
 * P1 - Azul
 * 
 * P2 - Laranja
 * 
 * GND - Marrom
 */
let P0 = false
let P1 = false
let P2 = false
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        P0 = true
    } else {
        P0 = false
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        P1 = true
    } else {
        P1 = false
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        P2 = true
    } else {
        P2 = false
    }
    basic.pause(100)
    if (P0 && P2) {
        basic.showNumber(1)
    } else {
        if (P1 && P2) {
            basic.showNumber(0.25)
        } else {
            if (P2) {
                basic.showNumber(0.05)
            } else {
                if (P1) {
                    basic.showNumber(0.1)
                } else {
                    if (P0) {
                        basic.showNumber(0.5)
                    } else {
                        basic.clearScreen()
                    }
                }
            }
        }
    }
    basic.clearScreen()
    basic.pause(100)
    P0 = false
    P1 = false
    P2 = false
})
