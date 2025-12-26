fetch("http://localhost:3000/products")
  .then(res => res.json())
  .then(data => {
    const productsDiv = document.getElementById("products");
    data.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = `
        <h3>${p.name}</h3>
        <p>₹${p.price}</p>
        <button onclick="addToCart('${p.name}')">Add to Cart</button>
      `;
      productsDiv.appendChild(div);
    });
  });

function addToCart(name) {
  fetch("http://localhost:3000/cart", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ product: name })
  })
  .then(res => res.json())
  .then(() => loadCart());
}

function loadCart() {
  fetch("http://localhost:3000/cart")
    .then(res => res.json())
    .then(data => {
      const cart = document.getElementById("cart");
      cart.innerHTML = "";
      data.forEach(item => {
        const li = document.createElement("li");
        li.innerText = item.product;
        cart.appendChild(li);
      });
    });
}
