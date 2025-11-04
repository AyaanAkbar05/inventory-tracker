#Critical Thinking

1. Type safety:
TypeScript enforces type safety by ensuring that variables, parameters, and return values match their declared types at compile time. This prevents accidental type mismatches and catches errors before running the code.

2. Inheritance reducing duplication:
Both PhysicalProduct and DigitalProduct share common properties and methods (like name, price, or tax calculation) from the base Product class. Inheritance allows them to reuse that logic instead of rewriting it, reducing redundancy.

3. Encapsulation and access modifiers:
Encapsulation hides internal details and protects data integrity. Access modifiers — public, private, and protected — control what can be accessed or modified from outside the class, keeping the code clean, secure, and easier to maintain.

4. Polymorphism for easy extension:
By defining shared behavior in the base Product class and allowing subclasses to override specific methods, a new type like SubscriptionProduct can be added with minimal changes to existing code. It can follow the same interface and be used wherever other products are handled.
