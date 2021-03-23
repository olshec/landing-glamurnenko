$(document).ready(function() {
    $("a.gallery").fancybox(); 
});

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

let scrollLevel = false;

function addEventListenerForScroll() {
    document.addEventListener('scroll', function() {
        let navbar = document.getElementById('navbar');
        let elem = document.getElementsByClassName('help-container')[0];
        let top = elem.getBoundingClientRect().top;
        if (top <= 0 && false == scrollLevel) {
            scrollLevel = true;
            navbar.classList.add('navbar-sticky');
        } else if (top > 0 && true == scrollLevel) {
            scrollLevel = false;
            navbar.classList.remove('navbar-sticky');
        }
    });
}

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
    addEventListenerForScroll();
}

afterPageLoad();