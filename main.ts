radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Forward()
        Forward2()
    }
    if (receivedNumber == 2) {
        Backward()
        Backward2()
    }
    if (receivedNumber == 3) {
        Backward()
    }
    if (receivedNumber == 4) {
        Backward2()
    }
})
function Forward () {
    pins.servoSetPulse(AnalogPin.P8, 1300)
    control.waitMicros(20000)
}
function Backward2 () {
    pins.servoSetPulse(AnalogPin.P13, 1700)
    control.waitMicros(20000)
}
function servo () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    Distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
}
function Forward2 () {
    pins.servoSetPulse(AnalogPin.P13, 1300)
    control.waitMicros(20000)
}
function Backward () {
    pins.servoSetPulse(AnalogPin.P8, 1700)
    control.waitMicros(20000)
}
let Distance = 0
radio.setGroup(1)
Distance = 0
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
})
