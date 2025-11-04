import { Product } from "./Product.js";

export class PhysicalProduct extends Product{

    static taxRate: number= 0.10;
    protected _weight: number; 

    constructor(sku:string, name:string, price:number, weight: number){
        super(sku, name,price);
        this._weight= weight;
    }

    getPriceWithTax(): number {
        return this.price*(PhysicalProduct.taxRate+1)
    }

    get weight():string{
        return `${this._weight} kg`   
    }
}