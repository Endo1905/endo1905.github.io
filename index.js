var i = 0;
var hello = "Cześć! Jestem Łukasz";

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

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
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

const observerTwo = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
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

var sectionFirstLanguage = document.getElementById("section-first-language");

var sectionSecondLanguage = document.getElementById("section-second-language");

var sectionThirdLanguage = document.getElementById("section-third-language");

var sectionFourthHabitOneLanguage = document.getElementById("section-fourth-habit-one-language");
var sectionFourthHabitTwoLanguage = document.getElementById("section-fourth-habit-two-language");
var sectionFourthHabitThreeLanguage = document.getElementById("section-fourth-habit-three-language");
var sectionFourthHabitFourLanguage = document.getElementById("section-fourth-habit-four-language");
var sectionFourthHabitFiveLanguage = document.getElementById("section-fourth-habit-five-language");

var sectionFifthContentLanguage = document.getElementById("section-fifth-content-language");

var helpdeskLanguage = document.getElementById("helpdesk-language");
var certLanguage = document.getElementById("cert-language");
var cloudLanguage = document.getElementById("cloud-language");
var looksLanguage = document.getElementById("looks-language");
var frenchLanguage = document.getElementById("french-language");

var sixthContentLanguage = document.getElementById("section-sixth-content-language");
var sixthSourcesLanguage = document.getElementById("section-sixth-sources-language");

polish.onclick = () => {
    function hello() {
        document.getElementById("hello").textContent = "Cześć! Jestem Łukasz";
    }

    setTimeout(hello, 2500);

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

    sectionFirstLanguage.textContent = "Jestem mieszkańcem Katowic, tak jednak nie od zawsze tutaj mieszkałem. Urodziłem się 5.02.2003 w Redhill, Anglia. Niewątpliwie, trzyletni pobyt w tym kraju jako dziecko wpłynął na moją umiejętność posługiwania się językiem angielskim, który mam opanowany na poziomie C1/C2 w chwili obecnej. Jestem osobą zdyscyplinowaną, która dąży do celu i która nie zna pojęcia 'poddaję się'. Analizę problemu zaczynam od zrozumienia, co jest przyczyną problemu, następnie niezwłocznie przechodzę do rozwiązania, które także staram się pojąć. Jestem osobą pełną energii, która pragnie rozwijać swoje pasje. Otwieram się na świat i jestem głodny doświadczenia, nauki oraz przygód. Drogi czytelniku, pragnę zaprosić Ciebie do zapoznania się z moją osobą lepiej poprzez przejrzenie tej strony internetowej, która jest moją wizytówką :)";

    sectionSecondLanguage.children[0].children[0].textContent = "O mnie";
    sectionSecondLanguage.children[1].children[0].textContent = "Moja przyszłość";
    sectionSecondLanguage.children[2].children[0].textContent = "Moje zainteresowania";
    sectionSecondLanguage.children[3].children[0].textContent = "Cele na rok 2023";
    sectionSecondLanguage.children[4].children[0].textContent = "O stronie";
    sectionSecondLanguage.style.cursor = "pointer";

    sectionThirdLanguage.textContent = "Administracja sieciami komputerowymi lub cyberbezpieczenstwo";

    sectionFourthHabitOneLanguage.textContent = "Samodyscyplina wraz z samorozwojem";

    sectionFourthHabitTwoLanguage.textContent = "Sport - piłka nożna oraz ręczna";

    sectionFourthHabitThreeLanguage.textContent = "Gry komputerowe";

    sectionFourthHabitFourLanguage.textContent = "Frontend";

    sectionFourthHabitFiveLanguage.textContent = "Muzyka";

    sectionFifthContentLanguage.textContent = "Śmiało kliknij w jeden z paneli znajdujących się obok ->";
    helpdeskLanguage.textContent = "Praca jako helpdesk";
    certLanguage.textContent = "Certyfikat";
    cloudLanguage.textContent = "Chmura domowa + Apache2";
    looksLanguage.textContent = "Sylwetka";
    frenchLanguage.textContent = "Francuski";

    sixthContentLanguage.textContent = "Info a propos strony";
    sixthSourcesLanguage.textContent = "Źródła niektórych rzeczy na stronie";
}

english.onclick = () => {
    function hello() {
        document.getElementById("hello").textContent = "Hi! I'm Łukasz";
    }

    setTimeout(hello, 2500);

    var date = new Date();
    var hours = date.getHours();
    var text = document.getElementById("date");

    function time() {
        if (hours >= 3 && hours < 12) {
            text.textContent = "Enjoy your day :)"
        }
        else if (hours >= 12 && hours < 17) {
            text.textContent = "Hope you're having a great afternoon :)"
        }
        else {
            text.textContent = "Be pleased with this very evening :)"
        }
    }
    time();

    sectionFirstLanguage.textContent = "C'MON ENGLAND";

    sectionSecondLanguage.children[0].children[0].textContent = "About me";
    sectionSecondLanguage.children[1].children[0].textContent = "My future";
    sectionSecondLanguage.children[2].children[0].textContent = "My hobbies";
    sectionSecondLanguage.children[3].children[0].textContent = "Expectations towards 2023";
    sectionSecondLanguage.children[4].children[0].textContent = "About site";
    sectionSecondLanguage.style.cursor = "pointer";

    sectionThirdLanguage.textContent = "Network engineering or cybersecurity";

    sectionFourthHabitOneLanguage.textContent = "Self-discipline with self-improvement";

    sectionFourthHabitTwoLanguage.textContent = "Sport - football and handball";

    sectionFourthHabitThreeLanguage.textContent = "Computer games";

    sectionFourthHabitFourLanguage.textContent = "Frontend";

    sectionFourthHabitFiveLanguage.textContent = "Movies and reading";

    sectionFifthContentLanguage.textContent = "Please do not hesitate to press any button which is located on the second pannel ->"
    helpdeskLanguage.textContent = "IT Support Job";
    certLanguage.textContent = "Certificates";
    cloudLanguage.textContent = "Home-cloud + Apache";
    looksLanguage.textContent = "Silhouette improvement";
    frenchLanguage.textContent = "French language";

    sixthContentLanguage.textContent = "Some info abour website";
    sixthSourcesLanguage.textContent = "Sources from where I got some of the animations";
}

french.onclick = () => {
    function hello() {
        document.getElementById("hello").textContent = "Salut! Moi, je suis Łukasz";
    }

    setTimeout(hello, 2500);

    function time() {
        if (hours >= 3 && hours < 12) {
            text.textContent = "Bonne journée :)"
        }
        else if (hours >= 12 && hours < 17) {
            text.textContent = "Bon après-midi :)"
        }
        else {
            text.textContent = "Bonne soirée :)"
        }
    }
    time();

    sectionFirstLanguage.textContent = "FRANCAIS";

    sectionSecondLanguage.children[0].children[0].textContent = "Moi";
    sectionSecondLanguage.children[1].children[0].textContent = "Mon avenir";
    sectionSecondLanguage.children[2].children[0].textContent = "Mes loisirs";
    sectionSecondLanguage.children[3].children[0].textContent = "Mes attentes vers 2023";
    sectionSecondLanguage.children[4].children[0].textContent = "Ce site";
    sectionSecondLanguage.style.cursor = "pointer";

    sectionThirdLanguage.textContent = "Ingénierie réseau ou cybersécurité";

    sectionFourthHabitOneLanguage.textContent = "Je suis désolé, mais mon français n'est pas très bon. Je propose de changer de langue.";

    sectionFourthHabitTwoLanguage.textContent = "Sport - football et handball";

    sectionFourthHabitThreeLanguage.textContent = "Joueurs d'ordinateurs";

    sectionFourthHabitFourLanguage.textContent = "Frontend";

    sectionFourthHabitFiveLanguage.textContent = "Les films et livres";

    sectionFifthContentLanguage.textContent = "Je suis désolé, mais mon français n'est pas très bon. Je propose de changer de langue."
    helpdeskLanguage.textContent = "Bureau d'aide";
    certLanguage.textContent = "Certificats";
    cloudLanguage.textContent = "Home-cloud + Apache";
    looksLanguage.textContent = "Amélioration de sollhouete";
    frenchLanguage.textContent = "Le francais";

    sixthContentLanguage.textContent = "Informations sur ce site";
    sixthSourcesLanguage.textContent = "Sources d'où j'ai obtenu certaines des animations";
}

function slide() {
    var swapingContent = document.querySelector(".changing-content");

    document.querySelector(".fifth-content-list").children[0].addEventListener("click", () => {
        console.log("XD");
        function goLeft() {
            swapingContent.style.transform = "translateX(-350%)";
        }

        setTimeout(goLeft, 100);

        function changeContent() {
            swapingContent.textContent = "Helpdeskuwka";
        }

        setTimeout(changeContent, 250)

        function goRight() {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
    document.querySelector(".fifth-content-list").children[1].addEventListener("click", () => {
        console.log("XD");
        function goLeft() {
            swapingContent.style.transform = "translateX(-350%)";
        }

        setTimeout(goLeft, 100);

        function changeContent() {
            swapingContent.textContent = "A+";
        }

        setTimeout(changeContent, 250)

        function goRight() {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
    document.querySelector(".fifth-content-list").children[2].addEventListener("click", () => {
        console.log("XD");
        function goLeft() {
            swapingContent.style.transform = "translateX(-350%)";
        }

        setTimeout(goLeft, 100);

        function changeContent() {
            swapingContent.textContent = "Apache";
        }

        setTimeout(changeContent, 250)

        function goRight() {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
    document.querySelector(".fifth-content-list").children[3].addEventListener("click", () => {
        console.log("XD");
        function goLeft() {
            swapingContent.style.transform = "translateX(-350%)";
        }

        setTimeout(goLeft, 100);

        function changeContent() {
            swapingContent.textContent = "Silka";
        }

        setTimeout(changeContent, 250)

        function goRight() {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
    document.querySelector(".fifth-content-list").children[4].addEventListener("click", () => {
        console.log("XD");
        function goLeft() {
            swapingContent.style.transform = "translateX(-350%)";
        }

        setTimeout(goLeft, 100);

        function changeContent() {
            swapingContent.textContent = "Francais";
        }

        setTimeout(changeContent, 250)

        function goRight() {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
}

slide();