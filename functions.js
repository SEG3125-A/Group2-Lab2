
function restrictProductChoices() {
    // Get the state of the checkboxes
    var vegetarian = document.getElementById('lactoseIntolerant').checked;
    var glutenFree = document.getElementById('nutAllergies').checked;
    var organic = document.getElementById('organic').checked;

    // Get the product elements from the HTML
    var products = document.getElementsByClassName('product');

    // Loop through the product elements
    for (var i = 0; i < products.length; i++) {
        
        var productVegetarian = products[i].getAttribute('data-vegetarian') === 'true';
        var productGlutenFree = products[i].getAttribute('data-glutenFree') === 'true';
        var productOrganic = products[i].getAttribute('data-organic') === 'true';

        // Determine if the product should be shown based on the checkboxes
        var showProduct = true;
        if (vegetarian && !productVegetarian) {
            showProduct = false;
        }
        if (glutenFree && !productGlutenFree) {
            showProduct = false;
        }
        if (organic && !productOrganic) {
            showProduct = false;
        }

        // Show or hide the product element
        products[i].style.display = showProduct ? '' : 'none';
    }
}

document.getElementById('confirm-button').addEventListener('click', restrictProductChoices);




function addToCart() {
    var selectedProducts = []; 
    var total = 0; 

    
    var products = document.getElementsByClassName('product');
    for (var i = 0; i < products.length; i++) {
        
        if (products[i].querySelector('input[type="checkbox"]').checked) {
            var productName = products[i].querySelector('h2').textContent; 
            selectedProducts.push(productName); 

            
            var productPrice = products[i].getAttribute('data-price');
            total += parseFloat(productPrice);
        }
    }

    
    var cartSection = document.getElementById('Cart'); 
    cartSection.innerHTML = "<h2>You selected:</h2><ul>" + 
        selectedProducts.map(function(product) {
            return "<li>" + product + "</li>";
        }).join('') + 
        "</ul><p>Your total is: $" + total.toFixed(2) + "</p>";
}


document.getElementById('confirm-button').addEventListener('click', addToCart);
