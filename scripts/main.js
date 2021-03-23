$(document).ready(function() {
    $("a.gallery").fancybox(); 
});

let scrollLevel = false;

function addEventListenerForScroll() {
    $(document).on('scroll', function() {
        let navbar = $('#navbar');
        let elem = $('.help-container')[0];
        let top = elem.getBoundingClientRect().top;
        if (top <= 0 && false == scrollLevel) {
            scrollLevel = true;
            navbar.addClass('navbar-sticky');
        } else if (top > 0 && true == scrollLevel) {
            scrollLevel = false;
            navbar.removeClass('navbar-sticky');
        }
    });
}

function addEventListenerForCards() {
    let masCard = $('.card');
    for(let i=0; i<masCard.length;i++) {
        masCard.on('mouseover', function() {
            this.classList.add("active-card");
        });
        masCard.on('mouseout', function() {
            this.classList.remove("active-card");
        });
    }
}

function addEventListenerForButtonScrollTop () {
    $('#btn-up').on('click', function() {
        $(window).scrollTop(0);
    });
}

function afterPageLoad() {
    addEventListenerForCards();
    addEventListenerForScroll();
    addEventListenerForButtonScrollTop();
}

afterPageLoad();