let temp = 0
input.onButtonPressed(Button.A, function () {
    radio.setGroup(2)
    temp = input.temperature()
    basic.showString("" + (temp))
    if (input.temperature() > 15) {
        radio.sendString("positive")
        music.playTone(147, music.beat(BeatFraction.Breve))
        basic.showString("Go home")
    } else {
        radio.sendString("Negative")
        music.playTone(262, music.beat(BeatFraction.Eighth))
        music.playTone(523, music.beat(BeatFraction.Quarter))
        basic.showString("Welcome")
    }
    basic.clearScreen()
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
basic.forever(function () {
	
})
