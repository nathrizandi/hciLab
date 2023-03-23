const wrapper = document.querySelector(".container");
const carousel = document.querySelector(".image");
const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll(".button")

let imageIndex = 1;
let intervalId;

const slideImage = () => {
    imageIndex = imageIndex === images.length ? 0 : imageIndex < 0 ? images.length - 1 : imageIndex;
    carousel.style.transform = `translate(-${imageIndex* 100}%)`;
};

const updateClick = (e) =>{
    imageIndex += e.target.id === "next" ? 1 :-1;
    slideImage(imageIndex);
    // console.log(imageIndex)
}

buttons.forEach((button) => button.addEventListener("click",updateClick));