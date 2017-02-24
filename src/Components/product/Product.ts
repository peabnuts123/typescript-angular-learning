export default class Product {
    public name: string;
    public cost: number;

    private _isSold: boolean = false;

    constructor(name: string, cost: number) {
        this.name = name; 
        this.cost = cost;
    }

    isSold(): boolean {
        return this._isSold;
    }

    sell(): void {
        this._isSold = true;
    }
}