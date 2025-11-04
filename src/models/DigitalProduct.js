import { Product } from "./Product.js";
export class DigitalProduct extends Product {
    _fileSize;
    constructor(sku, name, price, fileSize) {
        super(sku, name, price);
        this._fileSize = fileSize;
    }
    getPriceWithTax() {
        return this.price;
    }
    get fileSize() {
        return `${this._fileSize} MB`;
    }
}
//# sourceMappingURL=DigitalProduct.js.map