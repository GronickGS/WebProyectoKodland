const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselItems = document.querySelectorAll('.carousel-item');

let currentItemIndex = 0;

function showItem(index) {
    carouselItems.forEach(item => item.style.display = 'none');
    carouselItems[index].style.display = 'block';
}

function nextItem() {
    currentItemIndex++;
    if (currentItemIndex >= carouselItems.length) {
        currentItemIndex = 0;
    }
    showItem(currentItemIndex);
}

function prevItem() {
    currentItemIndex--;
    if (currentItemIndex < 0) {
        currentItemIndex = carouselItems.length - 1;
    }
    showItem(currentItemIndex);
}

prevButton.addEventListener('click', prevItem);
nextButton.addEventListener('click', nextItem);

showItem(currentItemIndex);
