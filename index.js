var i = 0;
var hello = "Cześć, miłego zwiedzania!";

function typing() {
    if (i < hello.length) {
        document.getElementById("hello").textContent += hello.charAt(i);
        i++;
        setTimeout(typing, 100);
    }
}

var date = new Date();
var hours = date.getHours();
var text = document.getElementById("date");

function time() {
    if (hours >= 3 && hours < 12) {
        text.textContent = "Miłego dnia!"
    }
    else if (hours >= 12 && hours < 17) {
        text.textContent = "Miłego popołudnia!"
    }
    else {
        text.textContent = "...I przede wszystkim zasłużonego wypoczunku na wieczór! :)"
    }
}
time();
typing();
console.log(hours)

const buttons = document.querySelectorAll("[data-carousel-button]")

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    const slides = button
      .closest("[data-carousel]")
      .querySelector("[data-slides]")

    const activeSlide = slides.querySelector("[data-active]")
    let newIndex = [...slides.children].indexOf(activeSlide) + offset
    if (newIndex < 0) newIndex = slides.children.length - 1
    if (newIndex >= slides.children.length) newIndex = 0

    slides.children[newIndex].dataset.active = true
    delete activeSlide.dataset.active
  })
})

const observer = new IntersectionObserver((entries) => 
{
    entries.forEach((entry) => 
    {
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('show');
        }
        // else 
        // {
        //     entry.target.classList.remove('show');
        // }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));

const observerTwo = new IntersectionObserver((entries) => 
{
    entries.forEach((entry) => 
    {
        console.log(entry)
        if(entry.isIntersecting)
        {
            entry.target.classList.add('showTwo');
        }
        // else 
        // {
        //     entry.target.classList.remove('showTwo');
        // }
    });
});

const hiddenElementsTwo = document.querySelectorAll('.hiddenTwo');
hiddenElementsTwo.forEach((el) => observer.observe(el));