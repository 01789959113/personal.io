// fixed navbar
let navbar = document.querySelector(".navbar");
window.onscroll = function () {
    myFunction();
};

function myFunction() {
    if (window.scrollY > 0) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
}

// type js effect
let texts = ['Web Developer', 'Freelancer']
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type (){
    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count]
    letter = currentText.slice(0, ++index)
    document.querySelector('.typejs').textContent = letter;    
    if(letter.length === currentText.length){
        count++
        index = 0;
    }
    setTimeout(() => {
        type()
    }, 300);
}())

