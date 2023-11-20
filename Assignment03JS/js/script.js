document.addEventListener('DOMContentLoaded', function() {
    // Add student information dynamically
    document.getElementById('studentInfo').innerText = 'Student ID: 200520470 | Name: Simarpreet Kaur';
});

function orderPizza() {
    // Get form values
    const size = document.getElementById('pizzaSize').value;
    const topping = document.getElementById('topping').value;
    const quantity = document.getElementById('quantity').value;

    // Validate form inputs
    if (!size || !topping || !quantity) {
        alert('Please fill out all the fields.');
        return;
    }

    // Create Pizza object
    const pizza = new Pizza(size, topping, quantity);

    // Display pizza information
    document.getElementById('pizzaOutput').innerHTML = `<p>Your Pizza: ${pizza.getDescription()}</p>`;
}

// Pizza class
class Pizza {
    constructor(size, topping, quantity) {
        this.size = size;
        this.topping = topping;
        this.quantity = quantity;
    }

    getDescription() {
        return `${this.quantity} ${this.size} pizza with ${this.topping} topping`;
    }
}
