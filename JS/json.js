const user = {
  id: 1,
  name: "Sahabul Islam SIfat",
  age: 21,
  profession: "Student",
  hubby: "Traveling and foodie",
};
// console.log(user);

// JavaScript Object Notation

const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
  Owner: "Sifat",
  address: {
    street: "Kochutkhet bhoot er goli",
    city: "Dhaka",
    country: "Bangladesh",
  },
  products: ["Lapatop", "sell Phone", "mac", "Smart Watch"],
  revenue: 465000,
  isOpen: true,
  isNew: false,
};

// console.log(shop);
const shopJSON = JSON.stringify(shop);
console.log(shopJSON);

const objJSON = JSON.parse(shopJSON);
console.log(objJSON);
