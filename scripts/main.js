
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