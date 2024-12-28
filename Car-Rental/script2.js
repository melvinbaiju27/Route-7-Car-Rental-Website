function calculatePrice() {
    const rentalDuration = parseInt(document.getElementById('rental-duration').value) || 0;
    const discountCode = document.getElementById('discount-code').value;
    const additionalServices = parseInt(document.getElementById('additional-services').value) || 0;

    const baseRatePerDay = 440; // Example base rate per day
    const minimumFare = 100;
    const taxRate = 0.10; // 10% tax

    // Calculate the total before tax
    let totalBeforeTax = rentalDuration * baseRatePerDay + additionalServices;

    // Apply minimum fare
    if (totalBeforeTax < minimumFare) {
        totalBeforeTax = minimumFare;
    }

    // Apply discount if applicable
    let discount = 0;
    if (discountCode === "SAVE10") {
        discount = totalBeforeTax * 0.10; // 10% discount
    }

    totalBeforeTax -= discount;

    // Calculate tax
    const tax = totalBeforeTax * taxRate;
    const totalAmount = totalBeforeTax + tax;

    // Display the final price
    document.getElementById('price-details').innerText = `Rental Duration: ${rentalDuration} days\n` +
        `Base Price: $${(rentalDuration * baseRatePerDay).toFixed(2)}\n` +
        `Additional Services: $${additionalServices.toFixed(2)}\n` +
        `Discount: -$${discount.toFixed(2)}\n` +
        `Tax: +$${tax.toFixed(2)}`;
    
    document.getElementById('total-amount').innerText = totalAmount.toFixed(2);
    document.getElementById('final-price').style.display = 'block';
}