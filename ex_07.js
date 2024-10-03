document.addEventListener("DOMContentLoaded", function() {
    
    document.querySelector(".cart-btn").innerHTML = "CHANGE COLOR";

    
    function changerFond() {
        const randomColor = '#' + Math.floor(Math.random() * 100000).toString(16);
    
        document.body.style.backgroundColor = randomColor;
    }

    
    document.querySelector(".cart-btn").addEventListener("click", changerFond);
});
