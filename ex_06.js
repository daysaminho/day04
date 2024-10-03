document.addEventListener("DOMContentLoaded", function() {

    
    window.addEventListener("resize", function() {
        alert("Size matters");
    });

    
    var phoneImage = document.querySelector('img[src="../Iphone22.png"]');

    if (phoneImage) {
        
        phoneImage.addEventListener("mouseover", function() {
            alert("Pretty, isn't it ?");
        });
    }

});
