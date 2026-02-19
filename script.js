const products = [
    { id: 1, name: "Headphones", price: 1999, image: "https://picsum.photos/200?1" },
    { id: 2, name: "Smart Watch", price: 2999, image: "https://picsum.photos/200?2" },
    { id: 3, name: "Shoes", price: 2499, image: "https://picsum.photos/200?3" },
    { id: 4, name: "Backpack", price: 1499, image: "https://picsum.photos/200?4" }
];

let cartCount = 0;

function displayProducts() {
    const container = document.getElementById("products");

    products.forEach(product => {
        const div = document.createElement("div");
        div.classList.add("product");
        div.innerHTML = `
            <img src="${product.image}">
            <h3>${product.name}</h3>
            <p>₹${product.price}</p>
            <button onclick="addToCart()">Add to Cart</button>
        `;
        container.appendChild(div);
    });
}

function addToCart() {
    cartCount++;
    document.getElementById("cartCount").innerText = cartCount;
}

function toggleDropdown() {
    const menu = document.getElementById("dropdownMenu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}

displayProducts();
