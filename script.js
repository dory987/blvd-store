// script.js - Core functionality for the blvd-store application

// 1. Cart management
let cart = [];

function addToCart(item) {
    cart.push(item);
    updateCartTotals();
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    updateCartTotals();
}

function updateCartQuantity(itemId, quantity) {
    const item = cart.find(item => item.id === itemId);
    if (item) {
        item.quantity = quantity;
        updateCartTotals();
    }
}

function updateCartTotals() {
    const total = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    console.log('Cart total: $', total);
}

// 2. Cart drawer toggle
const cartDrawer = document.getElementById('cartDrawer');
function toggleCartDrawer() {
    cartDrawer.classList.toggle('open');
}

// 3. Product filtering
function filterProducts(filters) {
    // Implement filtering logic
}

// 4. Newsletter form submission
const newsletterForm = document.getElementById('newsletterForm');
newsletterForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const email = this.email.value;
    if (validateEmail(email)) {
        // Submit email
        console.log('Email submitted:', email);
    } else {
        console.error('Invalid email');
    }
});

function validateEmail(email) {
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    return re.test(email);
}

// 5. Mobile menu toggle
const mobileMenuButton = document.getElementById('mobileMenuButton');
mobileMenuButton.addEventListener('click', function() {
    document.body.classList.toggle('mobile-menu-open');
});

// 6. Smooth scrolling
const scrollLinks = document.querySelectorAll('a[href^="#"]');
scrollLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// 7. Instagram feed integration
function loadInstagramFeed() {
    // Placeholder logic for Instagram feed or API integration
}

// 8. Image placeholders with lazy loading
const lazyImages = document.querySelectorAll('img[data-src]');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add('loaded');
            observer.unobserve(img);
        }
    });
}, options);

lazyImages.forEach(img => {
    imageObserver.observe(img);
});

// 9. Local storage for cart persistence
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromLocalStorage() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        cart = JSON.parse(storedCart);
        updateCartTotals();
    }
}

// 10. Event listeners for interactive elements
// Already added for buttons and forms

// 11. Error handling and user feedback messages
function showError(message) {
    console.error(message);
}

function showFeedback(message) {
    alert(message);
}

// Load cart from local storage on initialization
loadCartFromLocalStorage();
