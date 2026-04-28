// OOP Shopping Cart - GoMyCode Checkpoint
// Object-Oriented Programming in JavaScript

// 1. Product Class - stores id, name, and price
class Product {
    constructor(id, name, price) {
          this.id = id;
          this.name = name;
          this.price = price;
    }
}

// 2. ShoppingCartItem Class - stores product and quantity
class ShoppingCartItem {
    constructor(product, quantity) {
          this.product = product;
          this.quantity = quantity;
    }

  // 3. Method to calculate total price of the item
  getTotalPrice() {
        return this.product.price * this.quantity;
  }
}

// 4. ShoppingCart Class - contains an array of ShoppingCartItem instances
class ShoppingCart {
    constructor() {
          this.items = [];
    }

  // Method: Add items to the cart
  addItem(product, quantity) {
        const existingItem = this.items.find(
                (item) => item.product.id === product.id
              );
        if (existingItem) {
                existingItem.quantity += quantity;
                console.log(`Updated quantity of ${product.name} to ${existingItem.quantity}`);
        } else {
                const newItem = new ShoppingCartItem(product, quantity);
                this.items.push(newItem);
                console.log(`Added ${product.name} to cart`);
        }
  }

  // Method: Remove items from the cart
  removeItem(productId) {
        const index = this.items.findIndex(
                (item) => item.product.id === productId
              );
        if (index !== -1) {
                console.log(`Removed ${this.items[index].product.name} from cart`);
                this.items.splice(index, 1);
        } else {
                console.log("Item not found in cart");
        }
  }

  // Method: Get total of all items in the cart
  getTotal() {
        return this.items.reduce((total, item) => total + item.getTotalPrice(), 0);
  }

  // Method: Display cart items
  displayCart() {
        if (this.items.length === 0) {
                console.log("Cart is empty");
                return;
        }
        console.log("\n--- Shopping Cart ---");
        this.items.forEach((item) => {
                console.log(
                          `Product: ${item.product.name} | Price: $${item.product.price} | Quantity: ${item.quantity} | Subtotal: $${item.getTotalPrice()}`
                        );
        });
        console.log(`Total: $${this.getTotal()}`);
        console.log("---------------------\n");
  }
}

// Testing our objects

// Create products
const laptop = new Product(1, "Laptop", 999.99);
const phone = new Product(2, "Phone", 499.99);
const headphones = new Product(3, "Headphones", 149.99);

// Create a shopping cart
const cart = new ShoppingCart();

// Add items to the cart
cart.addItem(laptop, 1);
cart.addItem(phone, 2);
cart.addItem(headphones, 1);

// Display the cart
cart.displayCart();

// Remove an item from the cart
cart.removeItem(2); // Remove phone

// Display the cart again after removal
cart.displayCart();
