const pets = [
    {
      "name": "Jennifer",
      "img": "../../assets/images/pets-jennifer.png",
      "type": "Dog",
      "breed": "Labrador",
      "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
      "age": "2 months",
      "inoculations": ["none"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Sophia",
      "img": "../../assets/images/pets-sophia.png",
      "type": "Dog",
      "breed": "Shih tzu",
      "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
      "age": "1 month",
      "inoculations": ["parvovirus"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Woody",
      "img": "../../assets/images/pets-woody.png",
      "type": "Dog",
      "breed": "Golden Retriever",
      "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
      "age": "3 years 6 months",
      "inoculations": ["adenovirus", "distemper"],
      "diseases": ["right back leg mobility reduced"],
      "parasites": ["none"]
    },
    {
      "name": "Scarlett",
      "img": "../../assets/images/pets-scarlett.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
      "age": "3 months",
      "inoculations": ["parainfluenza"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Katrine",
      "img": "../../assets/images/pets-katrine.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
      "age": "6 months",
      "inoculations": ["panleukopenia"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Timmy",
      "img": "../../assets/images/pets-timmy.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
      "age": "2 years 3 months",
      "inoculations": ["calicivirus", "viral rhinotracheitis"],
      "diseases": ["kidney stones"],
      "parasites": ["none"]
    },
    {
      "name": "Freddie",
      "img": "../../assets/images/pets-freddie.png",
      "type": "Cat",
      "breed": "British Shorthair",
      "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
      "age": "2 months",
      "inoculations": ["rabies"],
      "diseases": ["none"],
      "parasites": ["none"]
    },
    {
      "name": "Charly",
      "img": "../../assets/images/pets-charly.png",
      "type": "Dog",
      "breed": "Jack Russell Terrier",
      "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
      "age": "8 years",
      "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
      "diseases": ["deafness", "blindness"],
      "parasites": ["lice", "fleas"]
    }
  ];


const body = document.querySelector('.body');
const burgerButton = document.querySelectorAll('.burger');
const burgerLinks = document.querySelectorAll('.burger-btn');
const burgerWrapper = document.querySelector('.burger-menu-wrapper');
const burgerMenu = document.querySelector('.burger-menu');
const logo = document.querySelector('.logo');
const toggleBurger = () => {
    burgerWrapper.classList.toggle('hidden');
    burgerMenu.classList.toggle('active');
    body.classList.toggle('body-open');
    burgerButton[0].classList.toggle('hidden');
    burgerButton[1].classList.toggle('burger-open');
    logo.classList.toggle('hidden');
}
for (let i of burgerButton) {
    i.addEventListener('click', toggleBurger);
}
for (let i of burgerLinks) {
    i.addEventListener('click', toggleBurger);
}
burgerWrapper.addEventListener ('click', toggleBurger); 

// popup
const shadow = document.querySelector('.shadow');
let cardsRoot = document.querySelector('.our-friends-cards');
const sectionPopup = document.querySelector('.section-popup');
const popup = document.querySelector('.popup');
const popupBtn = document.querySelector('.popup-btn');

cardsRoot.addEventListener ('click', function(event) {
    if (event.target.closest('.pet-card')) {
        const sliderCard = event.target.closest('.pet-card');
        const cardName = sliderCard.querySelector('.pet-name').textContent;
        function findCardIndex(name) {
            for (let i = 0; i < pets.length; i++) {
                if (pets[i].name == cardName) {
                    return i;
                }
            }
        }
        createPopup(findCardIndex(cardName));
    }
});

const createPopup = (index) => {
    sectionPopup.classList.toggle('hidden');
    body.classList.toggle('body-open');
    popup.querySelector('.popup-name').textContent = pets[index].name;
    popup.querySelector('.popup-img').src = pets[index].img;
    popup.querySelector('.popup-type').textContent = pets[index].type;
    popup.querySelector('.popup-breed').textContent = pets[index].breed;
    popup.querySelector('.popup-description').textContent = pets[index].description;
    popup.querySelector('.popup-age').textContent = pets[index].age;
    popup.querySelector('.popup-inoculations').textContent = pets[index].inoculations;
    popup.querySelector('.popup-diseases').textContent = pets[index].diseases;
    popup.querySelector('.popup-parasites').textContent = pets[index].parasites;
}
const closePopup = () => {
    sectionPopup.classList.toggle('hidden');
    body.classList.toggle('body-open');
}
shadow.addEventListener('click', closePopup);
popupBtn.addEventListener('click', closePopup);
