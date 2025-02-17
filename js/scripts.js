// scripts.js
// This file contains the JavaScript code for the pizza delivery website.
// It handles interactivity, form submissions, and dynamic content updates.

document.addEventListener('DOMContentLoaded', function() {
    // Function to handle form submission
    const orderForm = document.getElementById('order-form');
    if (orderForm) {
        orderForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // Gather form data
            const formData = new FormData(orderForm);
            const orderDetails = {};
            formData.forEach((value, key) => {
                orderDetails[key] = value;
            });

            // Display order confirmation
            displayOrderConfirmation(orderDetails);
        });
    }

    // Function to display order confirmation
    function displayOrderConfirmation(orderDetails) {
        const confirmationMessage = document.getElementById('confirmation-message');
        if (confirmationMessage) {
            confirmationMessage.innerHTML = `
                <h2>Order Confirmation</h2>
                <p>Thank you for your order!</p>
                <p>Details:</p>
                <ul>
                    <li>Pizza Type: ${orderDetails.pizzaType}</li>
                    <li>Size: ${orderDetails.size}</li>
                    <li>Quantity: ${orderDetails.quantity}</li>
                </ul>
            `;
            confirmationMessage.style.display = 'block'; // Show confirmation message
        }
    }
});