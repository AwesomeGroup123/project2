document.addEventListener('DOMContentLoaded', () => {
  // Add to Cart button
  const addToCartButton = document.getElementById('addToCart');
  if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  }

  // Sign-in form
  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Signed in successfully!');
    });
  }

  // Checkout button
  const checkoutButton = document.getElementById('checkoutButton');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      alert('Proceeding to checkout...');
    });
  }

  // Highlight current tab
  const tabs = document.querySelectorAll('.tab');
  tabs.forEach(tab => {
    if (window.location.href.includes(tab.getAttribute('href'))) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
});
