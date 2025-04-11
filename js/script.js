document.addEventListener('DOMContentLoaded', () => {
  const addToCartButton = document.getElementById('addToCart');
  if (addToCartButton) {
    addToCartButton.addEventListener('click', () => {
      alert('Item added to cart!');
    });
  }

  const signinForm = document.getElementById('signinForm');
  if (signinForm) {
    signinForm.addEventListener('submit', (event) => {
      event.preventDefault();
      alert('Signed in successfully!');
    });
  }

  const checkoutButton = document.getElementById('checkoutButton');
  if (checkoutButton) {
    checkoutButton.addEventListener('click', () => {
      alert('Proceeding to checkout...');
    });
  }

 
  const tabs = document.querySelectorAll('.tab');
  const currentPath = window.location.pathname.split('/').pop();

  tabs.forEach(tab => {
    if (tab.getAttribute('href') === currentPath) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });
});
