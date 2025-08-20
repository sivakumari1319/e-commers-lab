// Cart handling logic
let cart = [];
let cartCount = 0;
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const closeCartBtn = document.getElementById('closeCartBtn');
const cartItemsList = document.getElementById('cartItems');
const totalPriceElement = document.getElementById('totalPrice');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', function() {
    const product = {
      name: this.dataset.name,
      price: parseFloat(this.dataset.price),
    };
    
    cart.push(product);
    cartCount++;
    updateCart();
  });
});

cartBtn.addEventListener('click', () => {
  cartModal.style.display = 'flex';
  renderCart();
});

closeCartBtn.addEventListener('click', () => {
  cartModal.style.display = 'none';
});

function updateCart() {
  cartBtn.textContent = `Cart (${cartCount})`;
}

function renderCart() {
  cartItemsList.innerHTML = '';
  let total = 0;
  
  cart.forEach(item => {
    const li = document.createElement('li');
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartItemsList.appendChild(li);
    total += item.price;
  });

  totalPriceElement.textContent = `Total: $${total.toFixed(2)}`;
}
