import { Product } from "./Product.js";

export class DigitalProduct extends Product{

    protected _fileSize: number; 

    constructor(sku:string, name:string, price:number, fileSize: number){
        super(sku, name,price);
        this._fileSize= fileSize;
    }

    getPriceWithTax(): number {
        return this.price
    }

    get fileSize():string{
        return `${this._fileSize} MB`   
    }
}