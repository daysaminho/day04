document.addEventListener("DOMContentLoaded", function() {

    
    window.addEventListener("resize", function() {
        alert("La taille compte");
    });

    
    var phoneImage = document.querySelector('img[src="../Iphone22.png"]');

    if (phoneImage) {
        
        phoneImage.addEventListener("mouseover", function() {
            alert("Joli, non ?");
        });
    }

});
