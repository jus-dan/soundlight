input.onButtonPressed(Button.A, function () {
    mode = 0
    basic.showNumber(mode)
    flash()
})
function flash () {
    if (mode == 0) {
        strip.showColor(neopixel.colors(NeoPixelColors.White))
        basic.pause(20)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    } else {
        strip.showColor(neopixel.rgb(randint(0, 255), randint(0, 255), randint(0, 255)))
        basic.pause(20)
        strip.showColor(neopixel.colors(NeoPixelColors.Black))
    }
}
input.onButtonPressed(Button.B, function () {
    mode = 1
    basic.showNumber(mode)
    flash()
})
input.onGesture(Gesture.ThreeG, function () {
    flash()
})
let mode = 0
let strip: neopixel.Strip = null
strip = neopixel.create(DigitalPin.P0, 30, NeoPixelMode.RGB)
basic.showNumber(mode)
