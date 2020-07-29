/**
 * 0,05 - P2
 * 
 * 0,10 - P1 & P2
 * 
 * 0,25 - P1 
 * 
 * 0,50 - P0 & P1
 * 
 * 1,00 - P0
 */
let P0 = 0
let P1 = 0
let P2 = 0
basic.forever(function () {
    P0 = 0
    P1 = 0
    P2 = 0
    if (input.pinIsPressed(TouchPin.P0)) {
        P0 = 1
    } else {
        P0 = 0
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        P1 = 1
    } else {
        P1 = 0
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        P2 = 1
    } else {
        P2 = 0
    }
    if (P0 == 1 && P1 == 1) {
        basic.showNumber(0.5)
        P0 = 0
        P1 = 0
    }
    if (P1 == 1 && P2 == 1) {
        basic.showNumber(0.1)
        P1 = 0
        P2 = 0
    }
    if (P2 == 1) {
        basic.showNumber(0.05)
        P2 = 0
    }
    if (P1 == 1) {
        basic.showNumber(0.25)
        P1 = 0
    }
    if (P0 == 1) {
        basic.showNumber(1)
        P0 = 0
    }
    basic.clearScreen()
    basic.pause(1000)
})
