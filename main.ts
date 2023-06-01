radio.onReceivedNumber(function (receivedNumber) {
    let Mi_jugada = 0
    let Jugada_rival = 0
    if (Jugada_rival == 1) {
        if (Mi_jugada == 1) {
            basic.showString("Empate")
        } else if (Mi_jugada == 2) {
            basic.showString("Perdistes")
        } else if (Mi_jugada == 3) {
            basic.showString("Ganastes")
        }
    } else if (Jugada_rival == 2) {
        if (Mi_jugada == 1) {
            basic.showString("Ganastes")
        } else if (Mi_jugada == 2) {
            basic.showString("Empate")
        } else if (Mi_jugada == 3) {
            basic.showString("Perdistes")
        }
    } else if (Jugada_rival == 3) {
        if (Mi_jugada == 1) {
            basic.showString("Ganastes")
        } else if (Mi_jugada == 2) {
            basic.showString("Perdistes")
        } else if (Mi_jugada == 3) {
            basic.showString("Empate")
        }
    }
})
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Square)
    radio.sendNumber(3)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Scissors)
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.SmallSquare)
    radio.sendNumber(2)
})
radio.setGroup(97)
