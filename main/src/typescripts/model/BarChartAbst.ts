import { ChartAbst } from "./ChartAbst";

export abstract class  BarChartAbst extends ChartAbst{

    constructor(dataArray: Array<number>, domNode: HTMLElement){
        super(dataArray,domNode);
    }

}

