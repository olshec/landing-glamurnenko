
$(document).ready(function() {
    $("a.gallery").fancybox(); 
});

// When the user clicks on the button, scroll to the top of the document
/*function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}*/

function addEventListenerForCards() {
    let masCard = document.getElementsByClassName('card');
    for(let i=0; i<masCard.length;i++) {
        masCard[i].addEventListener('mouseover', function() {
            this.classList.add("active-card");
        });
        masCard[i].addEventListener('mouseout', function() {
            this.classList.remove("active-card");
        });
    }
}

function afterPageLoad() {
    addEventListenerForCards();
}

afterPageLoad();