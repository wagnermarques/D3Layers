export abstract class ChartAbst implements IChart{

    dataArray : Array<number>;
    domNode : HTMLElement;

    constructor(dataArray: Array<number>, domNode: HTMLElement){
        this.dataArray = dataArray
        this.domNode = domNode
    }

    render(): void {
        
    }
}


