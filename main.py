"""

P0 - Verde

P1 - Azul

P2 - Laranja

GND - Marrom

"""
"""

0,10 - P2

0,05 - P0

0,50 - P1

0,25 - P0 & P2

1,00 - P1 & P2

"""
P0 = False
P1 = False
P2 = False

def on_forever():
    global P0, P1, P2
    if input.pin_is_pressed(TouchPin.P0):
        P0 = True
    else:
        P0 = False
    if input.pin_is_pressed(TouchPin.P1):
        P1 = True
    else:
        P1 = False
    if input.pin_is_pressed(TouchPin.P2):
        P2 = True
    else:
        P2 = False
    basic.pause(100)
    if P0 and P2:
        basic.show_number(4)
    else:
        if P1 and P2:
            basic.show_number(3)
        else:
            if P2:
                basic.show_number(2)
            else:
                if P1:
                    basic.show_number(1)
                else:
                    if P0:
                        basic.show_number(0)
                    else:
                        basic.clear_screen()
    basic.clear_screen()
    basic.pause(100)
    P0 = False
    P1 = False
    P2 = False
basic.forever(on_forever)
