const buyButtons = document.querySelectorAll('.buy-btn');
const productCards = document.querySelectorAll('.product-card');

buyButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Change button text and disable it
        button.textContent = "Added to Cart!";
        button.style.backgroundColor = "#28a745"; // Green color
        button.style.cursor = "default";
        button.disabled = true;

        // Get product name
        const productName = productCards[index].querySelector('h3').textContent;

        // Display alert with product name
        alert(`${productName} has been added to your cart!`);

        // Add animation effect
        productCards[index].classList.add('added');
        setTimeout(() => {
            productCards[index].classList.remove('added');
        }, 500);

        // Attribute manipulation
        if (!button.hasAttribute('data-clicked')) {
            button.setAttribute('data-clicked', 'true');
        }

        console.log(`Button for ${productName} clicked!`);
    });
});

productCards.forEach(card => {
    const productName = card.querySelector('h3');
    productName.addEventListener('click', () => {
        productName.style.color = productName.style.color === "red" ? "black" : "red";
    });
});
