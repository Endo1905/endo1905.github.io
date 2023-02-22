var i = 0;
var hello = "Cześć! Mam na imię Łukasz.";

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
        text.textContent = "Miłego dnia :)"
    }
    else if (hours >= 12 && hours < 17) {
        text.textContent = "Miłego popołudnia :)"
    }
    else {
        text.textContent = "Miłego wieczoru :)"
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

var polish = document.getElementById("polish");
var english = document.getElementById("english");
var french = document.getElementById("french");
var writtenLang = document.querySelector("#written-language");

polish.onclick = () => 
{
    writtenLang.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat voluptatum libero quam quisquam nam minima ut ipsam alias autem amet, sed voluptatibus! Doloribus maiores ullam voluptates repellat, corporis, impedit enim vel architecto cum fugiat quidem delectus pariatur aperiam ea voluptatem. Sit facilis impedit commodi ea quis, reprehenderit voluptatibus incidunt hic. Quia nesciunt omnis et, eligendi minus molestias, suscipit minima illo corporis quos distinctio numquam quis cum in voluptatum possimus eveniet quaerat doloremque libero tempore sunt autem veritatis. Sapiente vel distinctio quia ullam aut error eos quo sit tempora numquam temporibus suscipit voluptatum, ex iusto vero unde corrupti animi eligendi Polish.";
}

english.onclick = () => 
{
    writtenLang.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat voluptatum libero quam quisquam nam minima ut ipsam alias autem amet, sed voluptatibus! Doloribus maiores ullam voluptates repellat, corporis, impedit enim vel architecto cum fugiat quidem delectus pariatur aperiam ea voluptatem. Sit facilis impedit commodi ea quis, reprehenderit voluptatibus incidunt hic. Quia nesciunt omnis et, eligendi minus molestias, suscipit minima illo corporis quos distinctio numquam quis cum in voluptatum possimus eveniet quaerat doloremque libero tempore sunt autem veritatis. Sapiente vel distinctio quia ullam aut error eos quo sit tempora numquam temporibus suscipit voluptatum, ex iusto vero unde corrupti animi eligendi English.";
}

french.onclick = () => 
{
    writtenLang.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat voluptatum libero quam quisquam nam minima ut ipsam alias autem amet, sed voluptatibus! Doloribus maiores ullam voluptates repellat, corporis, impedit enim vel architecto cum fugiat quidem delectus pariatur aperiam ea voluptatem. Sit facilis impedit commodi ea quis, reprehenderit voluptatibus incidunt hic. Quia nesciunt omnis et, eligendi minus molestias, suscipit minima illo corporis quos distinctio numquam quis cum in voluptatum possimus eveniet quaerat doloremque libero tempore sunt autem veritatis. Sapiente vel distinctio quia ullam aut error eos quo sit tempora numquam temporibus suscipit voluptatum, ex iusto vero unde corrupti animi eligendi Francais.";
}

function slide()
{
    var swapingContent = document.querySelector(".changing-content");

    document.querySelector(".fifth-content-list").children[0].addEventListener("click", () => 
    {
        console.log("XD");
        function goLeft()
        {
            swapingContent.style.transform = "translateX(-350%)";
        }
        
        setTimeout(goLeft, 100);
        
        function changeContent()
        {
            swapingContent.textContent = "Helpdeskuwka";
        }

        setTimeout(changeContent, 250)

        function goRight()
        {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
    document.querySelector(".fifth-content-list").children[1].addEventListener("click", () => 
    {
        console.log("XD");
        function goLeft()
        {
            swapingContent.style.transform = "translateX(-350%)";
        }
        
        setTimeout(goLeft, 100);
        
        function changeContent()
        {
            swapingContent.textContent = "A+";
        }

        setTimeout(changeContent, 250)

        function goRight()
        {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
    document.querySelector(".fifth-content-list").children[2].addEventListener("click", () => 
    {
        console.log("XD");
        function goLeft()
        {
            swapingContent.style.transform = "translateX(-350%)";
        }
        
        setTimeout(goLeft, 100);
        
        function changeContent()
        {
            swapingContent.textContent = "Apache";
        }

        setTimeout(changeContent, 250)

        function goRight()
        {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
    document.querySelector(".fifth-content-list").children[3].addEventListener("click", () => 
    {
        console.log("XD");
        function goLeft()
        {
            swapingContent.style.transform = "translateX(-350%)";
        }
        
        setTimeout(goLeft, 100);
        
        function changeContent()
        {
            swapingContent.textContent = "Silka";
        }

        setTimeout(changeContent, 250)

        function goRight()
        {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
    document.querySelector(".fifth-content-list").children[4].addEventListener("click", () => 
    {
        console.log("XD");
        function goLeft()
        {
            swapingContent.style.transform = "translateX(-350%)";
        }
        
        setTimeout(goLeft, 100);
        
        function changeContent()
        {
            swapingContent.textContent = "Francais";
        }

        setTimeout(changeContent, 250)

        function goRight()
        {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
}

slide();