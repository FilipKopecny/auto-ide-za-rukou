let pocet_tlesnuti = 0
let vzdialenost = 0
input.onSound(DetectedSound.Loud, function () {
    if (input.soundLevel() > 140) {
        pocet_tlesnuti += 1
        if (pocet_tlesnuti == 1) {
            Rover.setALLRGB(Rover.colors(RoverColors.White))
        }
        if (pocet_tlesnuti == 2) {
            Rover.setALLRGB(Rover.colors(RoverColors.Black))
            Rover.MotorStopAll(MotorActions.Stop)
        }
    }
})
basic.forever(function () {
    if (pocet_tlesnuti == 1) {
        vzdialenost = Rover.Ultrasonic()
        if (vzdialenost > 25) {
            Rover.MotorStopAll(MotorActions.Stop)
        }
        if (vzdialenost < 25 && vzdialenost > 15) {
            Rover.MotorRunDual(255, 255)
        }
        if (vzdialenost < 15 && vzdialenost > 5) {
            Rover.MotorRunDual(-255, -255)
        }
        if (vzdialenost < 5) {
            Rover.MotorStopAll(MotorActions.Stop)
        }
    }
})
