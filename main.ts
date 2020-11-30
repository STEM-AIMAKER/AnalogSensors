/**
 * AIMaker STEM Sensors
 */
//% color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
//% groups=['Sound','Ambient Light','Flame', 'Soil Moisture','Tracker','others']
namespace AIMakerAnalogSensors
{
/**
 * AIMaker STEM Sensors
 */
// color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
// groups=['Sound'，'Ambient Light','
    ', 'Soil Moisture','Tracker','others']

    //% group="Sound"
    export namespace AnalogSound {
        //% blockId=soundValue block="Read sound value at pin=%p"
        //% group="Sound"
        export function soundValue(p: AnalogPin): number {
            return pins.analogReadPin(p)
        }
    };

    //% group="Ambient Light"
    export namespace AmbientLignt {
        //% blockId=lightValue block="Read light value at pin=%p"
        //% group="Ambient Light"
        export function lightValue(p: AnalogPin): number {
            return (1024-pins.analogReadPin(p));
        }
    };

    //% group="Flame"
    export namespace Flame {
        //% blockId=flameValue block="Read flame value at pin=%p"
        //% group="Flame"
        export function flameValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isFlame block="Is flame at pin=%p"
        //% group="Flame"
        export function isFlame(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };

    //% group="Soil Moisture"
    export namespace Moisture {
        //% blockId=moistureValue block="Read moisture value at pin=%p"
        //% group="Soil Moisture"
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
