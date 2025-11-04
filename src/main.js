import { DigitalProduct } from "./models/DigitalProduct.js";
import { PhysicalProduct } from "./models/PhysicalProduct.js";
import { calculateTax } from "./utils/taxCalculator.js";
const products = [
    new DigitalProduct("P100", "Movie", 29, 1000),
    new PhysicalProduct("P200", "Laptop", 499, 5.6)
];
for (const product of products) {
    console.log(product.displayDetails());
    console.log(`Price with tax: $${calculateTax(product).toFixed(2)}`);
}
//# sourceMappingURL=main.js.map