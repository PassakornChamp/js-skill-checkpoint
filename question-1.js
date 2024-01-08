// Question #1: Inventory Management

const inventory = {
  apple: { price: 35, quantity: 100 },
  banana: { price: 10, quantity: 50 },
};

// เริ่มเขียนโค้ดตรงนี้
inventory.apple.quantity = 200;
inventory.orange = {};
inventory.orange.price = 20;
inventory.orange.quantity = 300;
let sum = 0;
for (let stock in inventory) {
  const totalPrice = inventory[stock].price * inventory[stock].quantity;
  sum += totalPrice;
}
console.log(`Total inventory value: ${sum} baht`);
