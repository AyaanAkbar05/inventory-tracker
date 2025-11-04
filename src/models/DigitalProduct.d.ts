import { Product } from "./Product.js";
export declare class DigitalProduct extends Product {
    protected _fileSize: number;
    constructor(sku: string, name: string, price: number, fileSize: number);
    getPriceWithTax(): number;
    get fileSize(): string;
}
//# sourceMappingURL=DigitalProduct.d.ts.map