import { Product } from "./Product.js";
export declare class PhysicalProduct extends Product {
    static taxRate: number;
    protected _weight: number;
    constructor(sku: string, name: string, price: number, weight: number);
    getPriceWithTax(): number;
    get weight(): string;
}
//# sourceMappingURL=PhysicalProduct.d.ts.map