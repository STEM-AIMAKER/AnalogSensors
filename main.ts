/**
 * AIMaker STEM Sensors
 */
//% color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
//% groups=['Sound','Ambient Light Sensor','Dissolved Oxygen Sensors','Flame Sensor', 'Liquid Temperature Sensor','PH Sensor','High Accurate Soil Moisture Sensor','Soil Moisture Sensor','Tracker Sensor','others']
namespace aimakeranalogsensors
{
/**
 * AIMaker STEM Sensors
 */
// color=190 weight=100 icon="\uf1ec" block="AIMaker: analog sensors"
// groups=['Sound Sensor','Ambient Light Sensor','Dissolved Oxygen D21A','Flame Sensor','Liquid Temperature Sensor','High Accurate Soil Moisture Sensor', 'Soil Moisture Sensor','Tracker Sensor','others']

    //% group="Sound Sensor"
    export namespace AnalogSound {
        //% blockId=soundValue block="Read sound value at pin=%p"
        //% group="Sound Sensor"
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
            //let ret = Math.floor((100*v/1023)*10)
            //return (ret/10)
            return v
        }
    };

    //% group="Dissolved Oxygen Sensors"
    export namespace DissolvedOxygen {
        //% blockId=oxygenValue block="Read oxygen level at pin=%p"
        //% group="Dissolved Oxygen Sensors"
         export function oxygenValue(p: AnalogPin): number {
            let k = 0.0152420701168614
            let b = -0.4529883138564274
            let v = k*pins.analogReadPin(p)+b
            v = Math.floor(v*10)
            return (v/10)
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
         
    //% group="Liquid Temperature Sensor"
    export namespace LiquidTemperatureSensor {
        //% blockId=TemperatureValue block="Read temperature value at pin=%p"
        //% group="Liquid Temperature Sensor"
        export function TemperatureValue(p: AnalogPin): number {
            let t = pins.analogReadPin(p);
            let x = t*3000/1024;
            let A=0.000000000189554518867839;
            let B=-0.000000889604356394295;
            let C=0.00159126906028872;
            let D=-1.62903761539578;
            let E=834.352750181949;
            let airtemp=A*Math.pow(x,4)+B*Math.pow(x,3)+C*Math.pow(x,2)+D*x+E;
            airtemp = Math.floor(airtemp)
            return (airtemp/10)
        }
    };  
        
    
    //% group="PH Sensor"
    export namespace PHMeterD17A {
        //% blockId=phD17AValue block="Read PH value at pin=%p"
        //% group="PH Sensor"
        export function phD17AValue(p: AnalogPin): number {
            let v = pins.analogReadPin(p);
            v = (v*3.1)/1024
            let k = 0.0
            let b = 0.0
            if( v <= 1.91 ) {
                k = (6.86-9.18) / (1.91-1.65)
            } else {
                k = (6.86-4.01) / (1.91-2.15)
            }
            b = 6.86 - k*1.91
            v = k*v+b
            let ret:number = Math.floor(v*100)
            return (ret/100)
        }
    };

    //% group="High Accurate Soil Moisture Sensor"
    export namespace HighAccurateSoilMoisture {
        //% blockId=HighAccurateSoilMoistureValue block="Read high accurate moisture value at pin=%p"
        //% group="High Accurate Soil Moisture Sensor"
        export function highaccuratemoistureValue(p: AnalogPin): number {
            let v = pins.analogReadPin(p);
            v = v*100/1024;
            //v = 100 - v;
            let ret:number = Math.floor(v*10)
            return (ret/10)
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
            let ret:number = Math.floor(v*10)
            return (ret/10)
        }
    };

    //% group="Tracker Sensor"
    export namespace Tracker {
        //% blockId=trackerValue block="Read tracker value at pin=%p"
        //% group="Tracker Sensor"
        export function trackerValue(p: AnalogPin): number {
            return pins.analogReadPin(p);
        }

        //% blockId=isBlackLine block="Black line is detected at pin=%p"
        //% group="Tracker Sensor"
        export function isBlackLine(p: AnalogPin): boolean {
            if( pins.analogReadPin(p) >= 50 ) {
                return true;
            }
            return false;
        }
    };

    //% group="Power Meter"
    export namespace PowerMeter {
        //% blockId=voltageValue block="Read Voltage value at pin=%p (mV)"
        //% group="Power Meter"
        export function voltageValue(p: AnalogPin): number {
            let v = (11.72*pins.analogReadPin(p));
            return v
        }

        //% blockId=currentValue block="Read Current value at pin=%p (mA)"
        //% group="Power Meter"
        export function currentValue(p: AnalogPin): number {
            let v = 4.43*pins.analogReadPin(p)-1894;
            return v
        }
    };
}
