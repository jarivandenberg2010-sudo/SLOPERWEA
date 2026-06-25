function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " is toegevoegd aan je winkelmandje!");
}function addToCart(name, price, image) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.push({
    name: name,
    price: price,
    image: image
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert(name + " is toegevoegd aan je winkelmandje!");
}

function loadCart() {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  if (!cartItems || !cartTotal) return;

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    total += item.price;

    cartItems.innerHTML += `
      <div class="cart-item">
        <img src="${item.image}">
        <div>
          <h3>${item.name}</h3>
          <p>€${item.price.toFixed(2).replace(".", ",")}</p>
          <button onclick="removeItem(${index})">Verwijderen</button>
        </div>
      </div>
    `;
  });

  cartTotal.textContent = total.toFixed(2).replace(".", ",");
}

function removeItem(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];

  cart.splice(index, 1);

  localStorage.setItem("cart", JSON.stringify(cart));
  loadCart();
}

loadCart();
