export class LocationModel
{
    city:string;
    dregreeDays: number;
    dut : number;
    area : string;
    averageTemperature: number;
}

export class PowerHeatpumpModel
{
    name:string;
    corporation: string;
    flowTemp: number;
    brine:number;
    powerOutput:number;
    inputPower:number;
    integratedWaterHeater: boolean;
}