// Cart page functionality
document.addEventListener('DOMContentLoaded', function() {
    displayCartItems();
    updateCartSummary();
    setupCheckout();
});

function displayCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const emptyCart = document.getElementById('emptyCart');
    
    if (!cartItemsContainer) return;
    
    if (cart.length === 0) {
        cartItemsContainer.style.display = 'none';
        if (emptyCart) emptyCart.style.display = 'block';
        return;
    }
    
    cartItemsContainer.style.display = 'block';
    if (emptyCart) emptyCart.style.display = 'none';
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img class="cart-item-image" src="${item.image}" alt="${item.name}" />
            <div class="cart-item-info">
                <h3>${item.name}</h3>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
            </div>
            <div class="quantity-controls">
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, -1)">−</button>
                <span class="quantity-display">${item.quantity}</span>
                <button class="quantity-btn" onclick="updateQuantity(${item.id}, 1)">+</button>
            </div>
            <button class="remove-btn" onclick="removeFromCart(${item.id})">Remove</button>
        </div>
    `).join('');
}

function updateCartSummary() {
    const subtotal = getCartTotal();
    const shipping = subtotal > 50 ? 0 : 5.99;
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + shipping + tax;
    
    const subtotalEl = document.getElementById('subtotal');
    const shippingEl = document.getElementById('shipping');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = formatPrice(subtotal);
    if (shippingEl) shippingEl.textContent = shipping === 0 ? 'FREE' : formatPrice(shipping);
    if (taxEl) taxEl.textContent = formatPrice(tax);
    if (totalEl) totalEl.textContent = formatPrice(total);
    
    // Update final total in checkout
    const finalTotalEl = document.getElementById('finalTotal');
    if (finalTotalEl) finalTotalEl.textContent = formatPrice(total);
}

// Override updateQuantity to refresh display
const originalUpdateQuantity = window.updateQuantity;
window.updateQuantity = function(productId, change) {
    originalUpdateQuantity(productId, change);
    displayCartItems();
    updateCartSummary();
};

// Override removeFromCart to refresh display
const originalRemoveFromCart = window.removeFromCart;
window.removeFromCart = function(productId) {
    originalRemoveFromCart(productId);
    displayCartItems();
    updateCartSummary();
};

// Checkout functionality
function setupCheckout() {
    // Generate order ID
    const orderIdEl = document.getElementById('orderId');
    if (orderIdEl) {
        orderIdEl.textContent = generateOrderId();
    }
}

function proceedToCheckout() {
    if (cart.length === 0) {
        showToast('Your cart is empty!', 'error');
        return;
    }
    
    if (!isLoggedIn) {
        showToast('Please login to proceed with checkout', 'error');
        setTimeout(() => {
            window.location.href = 'shop.html';
        }, 2000);
        return;
    }
    
    openModal('checkoutModal');
    showStep(1);
}

let currentStep = 1;

function showStep(step) {
    // Hide all steps
    document.querySelectorAll('.step').forEach(s => s.classList.remove('active'));
    
    // Show current step
    const stepElement = document.getElementById(`step${step}`);
    if (stepElement) {
        stepElement.classList.add('active');
    }
    
    currentStep = step;
}

function nextStep() {
    const shippingForm = document.getElementById('shippingForm');
    
    // Validate shipping form
    if (!shippingForm.checkValidity()) {
        shippingForm.reportValidity();
        return;
    }
    
    showStep(2);
}

function previousStep() {
    showStep(currentStep - 1);
}

function showQRCode() {
    // Validate payment method selection
    const paymentMethod = document.querySelector('input[name="payment"]:checked');
    if (!paymentMethod) {
        showToast('Please select a payment method', 'error');
        return;
    }
    
    showStep(3);
    updateCartSummary(); // Refresh the final total
}

function confirmPayment() {
    // Simulate payment processing
    showToast('Processing payment...', 'success');
    
    setTimeout(() => {
        // Clear cart
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartCount();
        
        // Close modal
        closeModal('checkoutModal');
        
        // Show success message
        showToast('Order placed successfully! 🎉', 'success');
        
        // Redirect to shop after delay
        setTimeout(() => {
            window.location.href = 'shop.html';
        }, 3000);
        
    }, 2000);
}