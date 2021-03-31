const getTotalPrice = (cart) => {
  let price = 0;
  if (cart.length) {
    for (let i = 0; i < cart.length; i++) {
      price += parseFloat(cart[i].price) * cart[i].quantity;
    }
    return Number(price.toFixed(2));
  }
  return 0;
};

test("that a number is returned", () => {
  // 1. Definera start tillståndet
  const cart = [
    {
      price: "25",
      quantity: 2,
    },
    {
      price: "100",
      quantity: 1,
    },
    {
      price: "50",
      quantity: 5,
    },
  ];
  // 2. Kör funktionen
  const totalPrice = getTotalPrice(cart);
  // 3. Validera resultatet
  expect(typeof totalPrice).toBe("number");
});

test("that zero is returned when given an empty array", () => {
  const cart = [];
  const result = getTotalPrice(cart);
  expect(result).toBe(0);
});

test("that given an array with positive integers the correct sum is returned", () => {
  const cart = [
    {
      price: "25",
      quantity: 2,
    },
    {
      price: "100",
      quantity: 1,
    },
    {
      price: "50",
      quantity: 5,
    },
  ];
  const totalPrice = getTotalPrice(cart);
  expect(totalPrice).toBe(400);
});

test("that given an array with decimals the correct sum is returned", () => {
  const cart = [
    {
      price: "25.99",
      quantity: 2,
    },
    {
      price: "99.99",
      quantity: 1,
    },
    {
      price: "49.99",
      quantity: 5,
    },
  ];
  const totalPrice = getTotalPrice(cart);
  expect(totalPrice).toBe(401.92);
});
