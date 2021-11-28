const bodyTag = document.querySelector("#bodyTag");
const modalWrapper = document.querySelector("#modalWrapper");
const aboutModal = document.querySelector("#aboutModal");
const day1Modal = document.querySelector("#day1Modal");
const day2Modal = document.querySelector("#day2Modal");
const modals = document.querySelectorAll(".modals");
const closeModal = document.querySelectorAll(".close-modal");
let isModal = false

const aboutButton = document.querySelector("#aboutButton");
const day1Button = document.querySelector("#day1Button");
const day2Button = document.querySelector("#day2Button");
const day7Button = document.querySelector("#day7Button");


closeModal.forEach((item, index) => {
    closeModal[index].addEventListener("click", () => {
        closeAllModals()
    });
});



aboutButton.addEventListener("click", () => {
    openModal()
    closeDayModals()
    aboutModal.classList.remove('hidden')
});


day1Button.addEventListener("click", () => {
    openModal()
    openDayModal(1)
});

day2Button.addEventListener("click", () => {
    openModal()
    openDayModal(2)
});

day3Button.addEventListener("click", () => {
    openModal()
    openDayModal(3)
});

day4Button.addEventListener("click", () => {
    openModal()
    openDayModal(4)
});

day7Button.addEventListener("click", () => {
    openModal()
    openDayModal(7)
});

function openDayModal (num) {
    modals.forEach((item, index) => {
        modals[index].classList.add('hidden')
    });
    let numModal = document.querySelector(`#day${num}Modal`)
    numModal.classList.remove('hidden')
}

function closeDayModals () {
    modals.forEach((item, index) => {
        modals[index].classList.add('hidden')
    });
}

function closeAllModals() {
    bodyTag.classList.remove(`overflow-y-hidden`)
    modalWrapper.classList.remove(`modal-active`)
    modalWrapper.classList.add(`modal-not-active`)
    isModal = false
}

function openModal() {
    bodyTag.classList.add(`overflow-y-hidden`)
    modalWrapper.classList.remove(`modal-not-active`)
    modalWrapper.classList.add(`modal-active`)
    isModal = true
}


if(isModal) {
document.addEventListener('click', function(event) {
        var isClickInside = modalWrapper.contains(event.target);

        if (!isClickInside) {
            alert('here')
            bodyTag.classList.remove(`overflow-y-hidden`)
            modalWrapper.classList.remove(`modal-active`)
            modalWrapper.classList.add(`modal-not-active`)
        }
  });
}


// ======= Accordion =======


let acc = document.getElementsByClassName("accordion");
let accs = document.querySelectorAll(".accordion");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {

    accs.forEach(element => {
        element.classList.remove('active')
    });

    if(this.classList.contains('active')) {
        this.classList.add("active");
    }else{
        this.classList.remove("active");
    }

    let panel = this.nextElementSibling;
    let panels = document.querySelectorAll(".panel");

    if (panel.style.display === "block") {

        panel.style.display = "none";

    } else {

        panels.forEach(element => {
            element.style.display = "none";
        });

        panel.style.display = "block";
    }
  });
}
