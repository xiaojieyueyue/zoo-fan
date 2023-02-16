robotbit.MotorRun(robotbit.Motors.M1A, 0)
basic.forever(function () {
    if (input.temperature() > 25) {
        basic.showString("T:")
        basic.showNumber(input.temperature())
        robotbit.MotorRun(robotbit.Motors.M1A, pins.map(
        input.temperature(),
        25,
        35,
        100,
        255
        ))
    } else {
        robotbit.MotorRun(robotbit.Motors.M1A, 0)
        basic.showIcon(IconNames.Yes)
    }
})
