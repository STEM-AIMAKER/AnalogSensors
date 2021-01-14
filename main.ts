/**
 * AIMaker STEM Sensors
 */
//% color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
//% groups=['Sound','Ambient Light Sensor','Dissolved Oxygen D21A','Flame Sensor', 'Liquid Temperature D20A','Soil Moisture D19A','Soil Moisture Sensor','Reflective Infrared Sensor','others']
namespace aimakeranalogsensors
{
/**
 * AIMaker STEM Sensors
 */
// color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
// groups=['Sound','Ambient Light Sensor','Dissolved Oxygen D21A','Flame Sensor','Liquid Temperature D20A','Soil Moisture D19A', 'Soil Moisture Sensor','Reflective Infrared Sensor','others']

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
            let v = (1023-pins.analogReadPin(p));
            let ret:number = (100*v/1023)
            return ret.toFixed(1)
        }
    };

    //% group="Dissolved Oxygen D21A"
    export namespace DissolvedOxygen {
        //% blockId=oxygenValue block="Read oxygen level at pin=%p"
        //% group="Dissolved Oxygen"
         export function oxygenValue(p: AnalogPin): number {
            let k = 0.0152420701168614
            let b = -0.4529883138564274
            let v = k*pins.analogReadPin(p)+b
            return v.toFixed(1)
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
         
    //% group="Liquid Temperature D20A"
    export namespace LiquidTemperatureSensor {
        //% blockId=TemperatureValue block="Read temperature value at pin=%p"
        //% group="Liquid Temperature D20A"
        export function TemperatureValue(p: AnalogPin): number {
            let t = pins.analogReadPin(p);
            let x = t*3000/1024;
            let A=0.000000000189554518867839;
            let B=-0.000000889604356394295;
            let C=0.00159126906028872;
            let D=-1.62903761539578;
            let E=834.352750181949;
            let airtemp=A*Math.pow(x,4)+B*Math.pow(x,3)+C*Math.pow(x,2)+D*x+E;
            
            return (airtemp/10.0).toFixed(1);
        }
    };  
        
    //% group="Soil Moisture D19A"
    export namespace MoistureD19A {
        //% blockId=moistureD19AValue block="Read moisture(D19A) value at pin=%p"
        //% group="Soil Moisture D19A"
        export function moistureD19AValue(p: AnalogPin): number {
            let v = pins.analogReadPin(p);
            v = v*100/1024;
            //v = 100 - v;
            let ret:number = v
            return ret.toFixed(1);
        }
    };
        
    //% group="Soil Moisture Sensor"
    export namespace Moisture {
        //% blockId=moistureValue block="Read moisture value at pin=%p"
        //% group="Soil Moisture Sensor"
        export function moistureValue(p: AnalogPin): number {
             let v = pins.analogReadPin(p);
             v = v*100/1024;
            //v = 100 - v;
            let ret:number = v
            return ret.toFixed(1);
        }
    };

    //% group="Reflective Infrared Sensor"
    export namespace LaserDistance {
        //% blockId=trackerValue block="Read tracker value at pin=%p"
        //% group="Reflective Infrared Sensor"
        export function trackerValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isBlackLine block="Black line is detected at pin=%p"
        //% group="Reflective Infrared Sensor"
        export function isBlackLine(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };
}
