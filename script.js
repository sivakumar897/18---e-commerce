const products = [
    { id: 1, name: "Apple iPhone 14", price: 69999, image: "https://m.media-amazon.com/images/I/61bK6PMOC3L._SL1500_.jpg" },
    { id: 2, name: "Samsung Galaxy S23", price: 74999, image: "https://m.media-amazon.com/images/I/61RZDb2mQxL._SL1500_.jpg" },
    { id: 3, name: "Redmi Note 13 Pro", price: 25999, image: "https://m.media-amazon.com/images/I/71tCOhEigtL._SL1500_.jpg" },
    { id: 4, name: "Realme Narzo 60", price: 17999, image: "pic1.png" },

    { id: 5, name: "HP Pavilion Laptop", price: 55999, image: "https://m.media-amazon.com/images/I/71TPda7cwUL._SL1500_.jpg" },
    { id: 6, name: "Lenovo IdeaPad Slim 3", price: 42999, image: "https://m.media-amazon.com/images/I/61Dw5Z8LzJL._SL1500_.jpg" },
    { id: 7, name: "Dell Inspiron 15", price: 48999, image: "https://m.media-amazon.com/images/I/61vGQNUEsGL._SL1500_.jpg" },
    { id: 8, name: "ASUS VivoBook 15", price: 45999, image: "https://m.media-amazon.com/images/I/71jG+e7roXL._SL1500_.jpg" },

    { id: 9, name: "boAt Rockerz 450", price: 1299, image: "https://m.media-amazon.com/images/I/51HBom8xz7L._SL1500_.jpg" },
    { id: 10, name: "Sony WH-1000XM4", price: 24999, image: "https://m.media-amazon.com/images/I/71o8Q5XJS5L._SL1500_.jpg" },
    { id: 11, name: "JBL Tune 760NC", price: 5999, image: "pic2.png" },
    { id: 12, name: "Noise ColorFit Smartwatch", price: 2499, image: "https://m.media-amazon.com/images/I/61akt30bJsL._SL1500_.jpg" },

    { id: 13, name: "Nike Running Shoes", price: 3999, image: "https://m.media-amazon.com/images/I/71zKuNICJAL._UL1500_.jpg" },
    { id: 14, name: "Puma Sports Shoes", price: 3499, image: "pumaa.png" },
    { id: 15, name: "Adidas Sneakers", price: 3799, image: "addi.png" },

    { id: 17, name: "Men Denim Jeans", price: 1499, image: "https://m.media-amazon.com/images/I/81QpkIctqPL._UL1500_.jpg" },

];

const productList = document.getElementById("productList");
let cart = JSON.parse(localStorage.getItem("cart")) || {};

function updateCartCount() {
    const totalQty = Object.values(cart).reduce((a, b) => a + b, 0);
    document.getElementById("cartCount").innerText = totalQty;
}

products.forEach(p => {
    productList.innerHTML += `
        <div class="product">
            <img src="${p.image}" alt="${p.name}">
            <h4>${p.name}</h4>
            <p><strong>₹${p.price}</strong></p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>
    `;
});

function addToCart(id) {
    cart[id] = (cart[id] || 0) + 1;
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
}

updateCartCount();
