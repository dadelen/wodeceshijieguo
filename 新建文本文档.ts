enum  www {
    p0,
    p1,
    p2,
    p3,
    p4,
}
enum on_off {

//% block="on"
_on = 1,
//% block="off"
_off = 0,
}
//% color="#FFA500" weight=10 icon="\uf2c9" block="Sensor:bit"
namespace sensors {
//% blockId=actuator_buzzer0 block="有源蜂鸣器 pin ：%pin|status %status"   group="有源蜂鸣器"
//% weight=70
//% subcategory="执行器"
export function actuator_buzzer0(pin: www, status: on_off): void {
    pins.digitalWritePin(pin, status)
}

//% blockId=actuator_buzzer1 block="无源蜂鸣器 pin ：%pin|freq %freq"   group="无源蜂鸣器"
//% weight=70
//% subcategory="执行器"
export function actuator_buzzer1(pin: www, freq: number): void {
    pins.analogWritePin(pin, freq)
}
//% blockid=actuator_relay block="actuator_relay pin : %pin|status %status" group="继电器"
//% weight=80
//%subcategory="执行器"
export function actuator_relay(pin: www,status:on_off): void {
    pins.digitalWritePin(pin, status)
    
}
}