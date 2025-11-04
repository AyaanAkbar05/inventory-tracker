export class Product {
    sku;
    name;
    price;
    constructor(sku, name, price) {
        this.sku = sku;
        this.name = name;
        this.price = price;
    }
    displayDetails() {
        return `Sku: ${this.sku}, Name: ${this.name}, Price: ${this.price}`;
    }
    getPriceWithTax() {
        return this.price * (1.05);
    }
}
//# sourceMappingURL=Product.js.map