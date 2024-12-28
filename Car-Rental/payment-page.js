
function displayCarDetails() {
    // Retrieve car details from session storage
    const carDetails = JSON.parse(sessionStorage.getItem('selectedCar'));

    if (carDetails) {
        // Update HTML elements with car details
        document.getElementById('car-model').innerText = carDetails.model;
        document.getElementById('car-price').innerText = `$${carDetails.price}`;
        document.getElementById('car-features').innerText = carDetails.features.join(', ');
    } else {
        console.error('No car details found in session storage.');
    }
}

// Call the function on page load
window.onload = displayCarDetails;