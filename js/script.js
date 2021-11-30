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

checkTableSeating.addEventListener("click", () => {
    closeDayModals()
    openModal()
    openDayModal(8)
    modalWrapper.scroll({top: 0, left: 0, behavior: 'smooth'});
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

    modalWrapper.scroll({top: 0, left: 0, behavior: 'smooth'});

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


// ========== Table Seating ===========


let table = document.getElementById('tablelist');

const data = [
    {
        table: 1,
        members: ['Jon-Ander', 'Karel Kucera', 'Hisham layali', 'Youssef layali', 'Toufic Ghanem', 'Rodrigo De Los Santos', 'Shaun Matthew Smith']
    },
    {
        table: 2,
        members: ["Juan Uruburu", "Ma'n Marwan Alhamawi", "Shambil Basit", "Choji Lamba", "Sunil Nanda", "Rony Richard ", "Cyril Zacharia", "Lyes Issaadi"]
    },
    {
        table: 3,
        members: ["Bulent Erdogan", "Jamil Farook", "Niroshana Weeraratne", "K P Murali", "Rajesh Sharma", "Srikanth Madakkavil", "Anuradha Muthukumar", "Mohamed Mostafa"]
    },
    {
        table: 4,
        members: ["Mostafa Farouk", "Mahmoud Alabada", "Wasim Zeyadeh", "Mohammad Abdelfatah", "Liane Mendonca", "Khalid Abdulla", "Pradeep Karat", "Mohamed Bayoudh"]
    },
    {
        table: 5,
        members: ["Moataz Hassan", "Bassem bawab", "Rafic Bawab", "Ali Yusuf Alkuwaiti", "Naser Mohamed", "Bahaa Yaghi", "Andy Jandug", "Joby Joseph"]
    },
    {
        table: 6,
        members: ["Claudia Nijboer", "Ghouth Hala", "Hesham Ahmed", "Satpathy Sabyasachi", "Maya Coulibaly", "Bahaa Alkhatib", "Rony Dominic", "Mohamed Bayoudh"]
    },
    {
        table: 7,
        members: ["Ahmad Hudaib", "Ulrike Hintze", "Ashraf Morcos", "Milad Shehata", "Abdelrahman Elshami", "Osama Al Deen", "Noaman Sayed", "Ulorica Reveredo"]
    },
    {
        table: 8,
        members: ["Umberto Quaglia", "Hassan Mazhar", "Anton Abuzeid", "Wuisam Abil Mouna", "Raad Almobark", "Rohit Menon", "Madhu Madhavan", "Marianne Caoile"]
    },
    {
        table: 9,
        members: ["Dustine Gascoyne", "Haytham Khalaf", "Ahmad Alsarahna", "Thomas Strohmeier", "Mary Ann Formantes", "Arjun Sunil", "Laurice Ellen", "Joby Joseph"]
    },
    {
        table: 10,
        members: ["Omar Ahmed", "Badie El Dayeh", "Sami  Alsallakh", "Rima Eldick", "Conroy Colaco", "Viniljith Ajith", "Mohamed Kalas", "Mohamed Ghanem"]
    },
    {
        table: 11,
        members: ["Maricris Alvero", "Danko Sumonja", "Jan Egil Hjelle", "Jitty John", "Mohammed Hosny", "Pearl Salomie", "Grace Librason"]
    },
    {
        table: 12,
        members: ["Vaqar Ahmad", "Muhammad Ashraf", "Muhammad Bashir", "Makhlouf Mohamed", "Osama Makhlouf", "Vinoth Govindaraj", "Sajitha Rajesh", "Jafri Razi"]
    },
]



searchMember();

function searchMember () {

    let inputValue = document.querySelector("#searchSeat").value;

        let search = inputValue.toLowerCase();
        let result = data.map(k => {
            let members = k.members.join(' ').toLowerCase();
            if (members.includes(search)){
                return k;
            }
        }).filter(e => e !== undefined);

        table.innerHTML = "";

        for (let index = 0; index < result.length; index++) {
            const element = result[index];

            table.innerHTML += `

            <div class="listitem" style="margin-top: 25px;">
                <table class="table w-full">
                <caption class="p-2 font-semibold">Table ${result[index].table}</caption>
                    ${result[index].members.map((m)=> "<tr> <td class='border border-gray-400 p-2 rounded'> " + m + " </td> </tr>" ).join("\n")}
                </table>
            </div>

            `;

        }

        if(!inputValue){
            result = data
        }


}

// for (let ind = 0; ind < result[index].members.length; ind++) {
// }








