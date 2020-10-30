/**
 * Hanshin STEM Sensors
 */
//% color=190 weight=100 icon="\uf1ec" block="Hanshin STEM analog sensors"
//% groups=['Analog Sound','Ambient Light','Flame', 'Moisture','Tracker','others']
namespace HanshinAnalogSensors
{
/**
 * Hanshin STEM Sensors
 */
// color=190 weight=100 icon="\uf1ec" block="Hanshin STEM analog sensors"
// groups=['Analog Sound'，'Ambient Light','Flame', 'Moisture','Tracker','others']

    //% group="Analog Sound"
    export namespace AnalogSound {
        //% blockId=soundValue block="Read sound value at pin=%p"
        //% group="Analog Sound"
        export function soundValue(p: AnalogPin): number {
            return pins.analogReadPin(p)
        }
    };

    //% group="Ambient Light"
    export namespace AmbientLignt {
        //% blockId=lightValue block="Read light value at pin=%p"
        //% group="Ambient Light"
        export function lightValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }
    };

    //% group="Flame"
    export namespace Flame {
        //% blockId=flameValue block="Read frame value at pin=%p"
        //% group="Flame"
        export function flameValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isFlame block="Is frame at pin=%p"
        //% group="Flame"
        export function isFlame(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };

    //% group="Moisture"
    export namespace Moisture {
        //% blockId=moistureValue block="Read moisture value at pin=%p"
        //% group="Moisture"
        export function moistureValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }
    };

    //% group="Tracker"
    export namespace Tracker {
        //% blockId=trackerValue block="Read tracker value at pin=%p"
        //% group="Tracker"
        export function trackerValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isBlackLine block="Is black line at pin=%p"
        //% group="Tracker"
        export function isBlackLine(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };
}
