let P0 = false
let P1 = false
let P2 = false
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        P0 = true
    }
    if (input.pinIsPressed(TouchPin.P1)) {
        P1 = true
    }
    if (input.pinIsPressed(TouchPin.P2)) {
        P2 = true
    }
    if (P0 && P2) {
        basic.showNumber(4)
    } else {
        if (P1 && P2) {
            basic.showNumber(3)
        } else {
            if (P2) {
                basic.showNumber(2)
            } else {
                if (P1) {
                    basic.showNumber(1)
                } else {
                    if (P0) {
                        basic.showNumber(0)
                    } else {
                        basic.clearScreen()
                    }
                }
            }
        }
    }
    basic.clearScreen()
    P0 = false
    P1 = false
    P2 = false
})
