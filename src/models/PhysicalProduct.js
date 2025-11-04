import { Product } from "./Product.js";
export class PhysicalProduct extends Product {
    static taxRate = 0.10;
    _weight;
    constructor(sku, name, price, weight) {
        super(sku, name, price);
        this._weight = weight;
    }
    getPriceWithTax() {
        return this.price * (PhysicalProduct.taxRate + 1);
    }
    get weight() {
        return `${this._weight} kg`;
    }
}
//# sourceMappingURL=PhysicalProduct.js.map