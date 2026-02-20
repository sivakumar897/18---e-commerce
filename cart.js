const cartItems = document.getElementById("cartItems");
const cart = JSON.parse(localStorage.getItem("cart")) || [];

if (cart.length === 0) {
    cartItems.innerHTML = "<h3>Your cart is empty</h3>";
}

cart.forEach(item => {
    cartItems.innerHTML += `
        <div class="product">
            <img src="${item.image}">
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
        </div>
    `;
});
