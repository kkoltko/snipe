function checkDown () {
    if (input.acceleration(Dimension.Y) < 0 - czulosc) {
        if (y1 > aX) {
            y1 += -1
            return true
        }
    }
    return false
}
input.onButtonPressed(Button.A, function () {
    speed += 0 - 100
    if (speed <= 0) {
        speed = 500
    }
    console.log(speed)
})
function displayCelownik () {
    led.plotBrightness(2, 0, snipe)
    led.plotBrightness(2, 1, snipe)
    led.plotBrightness(2, 2, snipe)
    led.plotBrightness(2, 3, snipe)
    led.plotBrightness(2, 4, snipe)
    led.plotBrightness(0, 2, snipe)
    led.plotBrightness(1, 2, snipe)
    led.plotBrightness(3, 2, snipe)
    led.plotBrightness(4, 2, snipe)
}
function checkUp () {
    if (input.acceleration(Dimension.Y) > czulosc) {
        if (y1 < bX) {
            y1 += 1
            return true
        }
    }
    return false
}
function onStart () {
    x = randint(aX, bX)
    y = randint(aX, bX)
    x1 = x
    y1 = y
    displayCelownik()
    led.plot(x1, y1)
}
function checkLeft () {
    if (input.acceleration(Dimension.X) < 0 - czulosc) {
        if (x1 > aX) {
            x1 += -1
            return true
        }
    }
    return false
}
function checkRight () {
    if (input.acceleration(Dimension.X) > czulosc) {
        if (x1 < bX) {
            x1 += 1
            return true
        }
    }
    return false
}
input.onButtonPressed(Button.B, function () {
    if (x1 == 2 && y1 == 2) {
        if (ileKaczek == 0) {
            basic.showNumber(time / 20)
            basic.pause(2000)
        } else {
            ileKaczek += -1
            basic.showNumber(ileKaczek)
            onStart()
            basic.clearScreen()
        }
    }
})
function rysujPunkt () {
    basic.clearScreen()
    displayCelownik()
    led.plot(x1, y1)
    basic.pause(speed)
}
let time = 0
let x1 = 0
let y = 0
let x = 0
let y1 = 0
let ileKaczek = 0
let snipe = 0
let czulosc = 0
let bX = 0
let aX = 0
let speed = 0
aX = 0
bX = 4
czulosc = 200
speed = 500
snipe = 5
onStart()
ileKaczek = 5
basic.forever(function () {
    if (checkUp() || checkDown() || checkLeft() || checkRight()) {
        rysujPunkt()
    }
    time += 1
})
