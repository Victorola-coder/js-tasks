const form = document.getElementById('reservation-form');
const dateInput = document.getElementById('date');
const timeInput = document.getElementById('time');
const pickupSelect = document.getElementById('pickup');
const destinationSelect = document.getElementById('destination');
const paymentSelect = document.getElementById('payment');
const reservationSummary = document.getElementById('reservation-summary');

// Simulate shuttle availability (replace with API integration)
const availableSlots = {
  "2024-02-22": {
    "08:00": ["airport", "downtown"],
    "10:00": ["hotel", "airport"],
    "12:00": ["downtown", "hotel"]
  },
  "2024-02-23": {
    "09:00": ["airport", "downtown"],
    "11:00": ["hotel", "airport"],
    "13:00": ["downtown", "hotel"]
  }
};

form.addEventListener('submit', (event) => {
  event.preventDefault();

  // Validate form fields
  let isValid = true;

  if (!dateInput.value) {
    isValid = false;
    alert('Please select a date');
  }

  if (!timeInput.value) {
    isValid = false;
    alert('Please select a time');
  }

  if (pickupSelect.value === '') {
    isValid = false;
    alert('Please select a pick-up location');
  }

  if (destinationSelect.value === '') {
    isValid = false;
    alert('Please select a destination');
  }

  if (paymentSelect.value === '') {
    isValid = false;
    alert('Please select a payment method');
    // Prevent form submission by returning false
    return false;
  }
