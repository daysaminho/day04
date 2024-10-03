document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("description").innerHTML = "Never miss that perfect shot again.<br><br>Designed to revolutionise video and<br>photography, with beyond cinematic 16K<br> resolution.<br><br>Get yours now !";
    
    document.getElementById("productName").innerHTML = "Samsung 22";
    
    let par = document.getElementById("tag");
    if (par) {
        par.remove(); 
    }
    
    document.getElementById("price").textContent = "890 €"; 
    
    let image = document.querySelector("img"); 
    image.src = "Samsung22.png"; 

    let cartCount = 0; 

    const cartCountElement = document.createElement("p");
    cartCountElement.textContent = `In cart: ${cartCount}`; 

    const addToCartContainer = document.getElementById("addToCart");
    addToCartContainer.parentNode.insertBefore(cartCountElement, addToCartContainer.nextSibling); 

    
    document.querySelector(".cart-btn").addEventListener("click", function() {
        cartCount++; 
                cartCountElement.textContent = `In cart: ${cartCount}`; 
    });
});
