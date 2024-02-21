const form = document.getElementById('pizza-form');
const sizeSelect = document.getElementById('size');
const toppingsCheckbox = document.querySelectorAll('input[type="checkbox"]');
const crustSelect = document.getElementById('crust');
const paymentSelect = document.getElementById('payment');
const orderSummary = document.getElementById('order-summary');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate form fields
  let isValid = true;

  if (sizeSelect.value === '') {
    isValid = false;
    alert('Please select a size');
  }

  if (!toppingsCheckbox.some(checkbox => checkbox.checked)) {
    isValid = false;
    alert('Please select at least one topping');
  }

  if (crustSelect.value === '') {
    isValid = false;
    alert('Please select a crust');
  }

  if (paymentSelect.value === '') {
    isValid = false;
    alert('Please select a payment method');
  }

  if (isValid) {
    // Get selected options
    const size = sizeSelect.options[sizeSelect.selectedIndex].text;
    const toppings = Array.from(toppingsCheckbox)
      .filter(checkbox => checkbox.checked)
      .map(checkbox => checkbox.checked)