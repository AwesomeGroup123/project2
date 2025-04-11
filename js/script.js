document.addEventListener('DOMContentLoaded', () => {
  // Add to Cart button event
  const addToCartButton = document.getElementById('addToCart');
  if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  }

  // Sign-in form submission
  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Signed in successfully!');
    });
  }

  // Checkout button event
  const checkoutButton = document.getElementById('checkoutButton');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      alert('Proceeding to checkout...');
    });
  }
});