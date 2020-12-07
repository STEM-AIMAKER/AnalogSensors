/**
 * AIMaker STEM Sensors
 */
//% color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
//% groups=['Sound','Ambient Light Sensor','Flame Sensor', 'Soil Moisture Sensor','Reflective Infrared Sensor','others']
namespace aimakeranalogsensors
{
/**
 * AIMaker STEM Sensors
 */
// color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
// groups=['Sound','Ambient Light Sensor','Flame Sensor', 'Soil Moisture Sensor','Reflective Infrared Sensor','others']

    //% group="Sound"
    export namespace AnalogSound {
        //% blockId=soundValue block="Read sound value at pin=%p"
        //% group="Sound"
        export function soundValue(p: AnalogPin): number {
            return pins.analogReadPin(p)
        }
    };

    //% group="Ambient Light Sensor"
    export namespace AmbientLight {
        //% blockId=lightValue block="Read light value at pin=%p"
        //% group="Ambient Light Sensor"
        export function lightValue(p: AnalogPin): number {
            return (1024-pins.analogReadPin(p));
        }
    };

    //% group="Flame Sensor"
    export namespace Flame {
        //% blockId=flameValue block="Read flame value at pin=%p"
        //% group="Flame Sensor"
        export function flameValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isFlame block="When flame exists at pin=%p"
        //% group="Flame Sensor"
        export function isFlame(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };

    //% group="Soil Moisture Sensor"
    export namespace Moisture {
        //% blockId=moistureValue block="Read moisture value at pin=%p"
        //% group="Soil Moisture Sensor"
        export function moistureValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }
    };

    //% group="Reflective Infrared Sensor"
    export namespace LaserDistance {
        //% blockId=trackerValue block="Read tracker value at pin=%p"
        //% group="Reflective Infrared Sensor"
        export function trackerValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isBlackLine block="Detected black line  at pin=%p"
        //% group="Reflective Infrared Sensor"
        export function isBlackLine(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };
}
