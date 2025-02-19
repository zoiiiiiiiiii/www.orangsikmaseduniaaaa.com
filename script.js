const btnSurprise = document.getElementById('btn-surprise');
const surpriseGift = document.getElementById('surprise-gift');

// Array of surprise gifts
const gifts = [
    'Kamu mendapatkan hadiah ciuman!',
    'Kamu mendapatkan hadiah pelukan!',
    'Kamu mendapatkan hadiah cokelat!',
    'Kamu mendapatkan hadiah bunga!'
];

// Function to randomly select a gift
function getRandomGift() {
    const randomIndex = Math.floor(Math.random() * gifts.length);
    return gifts[randomIndex];
}

// Function to display the surprise gift
function showSurpriseGift() {
    const gift = getRandomGift();
    surpriseGift.innerHTML = gift;
    surpriseGift.classList.remove('hidden');
}

// Add event listener to the button
btnSurprise.addEventListener('click', showSurpriseGift);