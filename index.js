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

    //===== Ja =====

    sectionFirstLanguage.textContent = "Mam 20 lat i jestem Katowiczaninem, jednak nie zawsze tutaj mieszkałem. Urodziłem się w Redhill, Anglia, gdzie spędziłem pierwsze 3 lata życia. Być może, nauka języka angielskiego i polskiego na raz wpłynęła na moją umiejętność szybkiego przyswajania wiedzy zarówno językowej, jak i tej związanej z zapamiętywaniem informacji. Z pewnością, cecha ta pomaga mi cieszyć się ze zdobytej wiedzy i zachęca mnie do dalszego działania, aby lepiej poznawać świat. Ponieważ w dzisiejszych czasach wszędzie otacza nas technologia, to właśnie nauka o niej najbardziej mnie fascynuje. Dlatego chciałbym kształtować się w tej dziedzinie. Drogi Czytelniku, zapraszam Ciebie do zapoznania się bliżej z moją osobą poprzez przejrzenie tej strony internetowej, która jest moją wizytówką, stworzoną stricte hobbystycznie! :)";

    //===== Ja =====

    //===== Odnośniki =====

    sectionSecondLanguage.children[0].children[0].textContent = "O mnie";
    sectionSecondLanguage.children[1].children[0].textContent = "Moja przyszłość";
    sectionSecondLanguage.children[2].children[0].textContent = "Moje zainteresowania";
    sectionSecondLanguage.children[3].children[0].textContent = "Cele na rok 2023";
    sectionSecondLanguage.children[4].children[0].textContent = "O stronie";
    sectionSecondLanguage.style.cursor = "pointer";

    //===== Odnośniki =====

    //===== Przyszłość =====

    sectionThirdLanguage.textContent = "Zapytamy o to, jak widzę siebie w przyszłości, zapewne odpowiedziałbym, że moim celem jest praca w dziedzinie cyberbezpieczeństwa oraz inżynierii sieci. Choć mam wiele pasji, to właśnie tymi zagadnieniami chciałbym się zajmować. Stanowią one dla mnie pole do dalszego rozwoju zawodowego. Proste rzeczy mnie nudzą, ja znajduję na to sposób podejmując różnego rodzaju wyzwania. Wierzę, że to się nie zmieni i dalej będę praktykował naukę różnych umiejętności oraz żył wykorzystując czas najproduktywniej, jednocześnie utrzymując równowagę pomiędzy pracą zawodową i życiem prywatnym. ";

    //===== Przyszłość =====

    //===== Rozwój =====

    sectionFourthHabitOneLanguage.children[0].children[0].textContent = "Samodyscyplina wraz z samorozwojem:";
    sectionFourthHabitOneLanguage.children[1].textContent = "Kiedy miałem 18 lat zdałem sobie sprawę, że w życiu my, młodzi ludzie, za dużo czasu spędzamy na luksusie oraz wypoczynku. Pełno moich rówieśników znajduje na wszystko pewną wymówkę. Nauczyłem się, że jeżeli chcę wykorzystać cały swój potencjał, niezależnie od mojego nastawienia, muszę aktywnie działać. Tak na prawdę, nie są to nawet moje słowa. To są słowa ludzi, którzy osiągneli w życiu sukces. Zadałem sobie pytanie: 'Dlaczego miałbym wszystko zmarnować dla wygody?'. Opuściłem tak zwaną 'bańkę komfortu' i z czasem wyznaczyłem sobie pewne cele, przykładowo:";
    sectionFourthHabitOneLanguage.children[2].children[0].textContent = "Regularna siłownia,";
    sectionFourthHabitOneLanguage.children[2].children[1].textContent = "Nauka trzeciego języka - francuskiego,";
    sectionFourthHabitOneLanguage.children[2].children[2].textContent = "Czytanie książek,";
    sectionFourthHabitOneLanguage.children[2].children[3].textContent = "15 minut medytacji,";
    sectionFourthHabitOneLanguage.children[2].children[4].textContent = "Nauka do certyfikatów";

    sectionFourthHabitOneLanguage.children[3].textContent = "Oraz wiele innych.";


    sectionFourthHabitTwoLanguage.children[0].children[0].textContent = "Sport";
    sectionFourthHabitTwoLanguage.children[1].textContent = "Spędzanie czasu aktywnie zawsze sprawiało mi wiele radości. Najchętniej gram w piłkę nożną oraz ręczną, gdzie wykazuję się jako bramkarz. Uważam, że ta pozycja jest największym wyzwaniem na boisku, dlatego też to właśnie wtedy czuję się najlepiej. Choć miałem pewne przerwy, dalej chętnie wychodzę na boisko i od czasu do czasu gram z przyjaciółmi oraz ojcem, ciesząc się przy tym każdą minutą.  Poza aktywnością zespołową, spacery także zaliczam do jednej z moich ulubionych form spędzania czasu wolnego. Staram się także zbudować lepszą sylwetkę, ćwicząc 3x w tygodniu.";

    sectionFourthHabitThreeLanguage.children[0].children[0].textContent = "Gry komputerowe:";
    sectionFourthHabitThreeLanguage.children[1].textContent = "Najczęściej korzystam z komputera po to, aby znaleźć materiały źródłowe do nauki. Nie zmienia to jednak faktu, że jest to jedno z narzędzi, których używam także dla rozrywki. Tak samo jak sport, gra na komputerze zawsze była dla mnie przyjemnością. Zazwyczaj sięgam do gier, w które mogę zagrać ze znajomymi, rzadko kiedy wybieram produkcje stricte dla jednej osoby. Na komputerze gram jednak okazjonalnie, jeśli faktycznie mogę sobie pozwolić na taką formę spędzania czasu. Nie jest to mój priorytet. Jeśli zdecyduję się na grę, z reguły sięgam do takich produkcji jak: ";

    sectionFourthHabitFourLanguage.children[0].children[0].textContent = "Frontend: ";
    sectionFourthHabitFourLanguage.children[1].textContent = "Przygotowując się do egzaminów zawodowych miałem okazję zapoznać się z tworzeniem witryn internetowych oraz aplikacji. Szybko wyszedłem poza materiał, sięgając po nieco bardziej skomplikowane techniki, ostatecznie dochodząc do wniosku, że jest to jedno z moich hobby. Lubię inspirować się oraz tworzyć animacje na stronie, ma to swój pewien urok. W zasadzie, właśnie dlatego ta strona powstała. Nie jest to jednak coś z czego chciałbym w przyszłości żyć. Mimo wszystko, inna działka IT bardziej do mnie przemawia.";

    sectionFourthHabitFiveLanguage.children[0].children[0].textContent = "Filmy, seriale oraz książki:";
    sectionFourthHabitFiveLanguage.children[1].textContent = "Najczęściej czytam książki. Znacznie rzadziej oglądam filmy oraz seriale. Najbardziej doceniam produkcje, które przedstawione są w świecie przygodowym lub science-fiction. Moją atencję także przykuwają takie filmy lub książki, które mają za zadanie przekazanie widzowi/czytelnikowi pewną filozofię lub morał. Trudno jest mi jednoznacznie wskazać najlepsze produkcje, tak jednak jestem przekonany, że na wyróżnienie zasługują:";
    document.getElementById("tvShow").textContent = "Seriale: ";
    document.getElementById("movies").textContent = "Filmy: ";
    document.getElementById("books").textContent = "Książki: ";
    document.getElementById("witcher").textContent = "Cykl 'Wiedźmina.'";

    //===== Rozwój =====

    //===== Cele =====

    sectionFifthContentLanguage.textContent = "Doświadczenie zawodowe to mój priorytet na następne lata, ponieważ to właśnie taka wiedza jest najcenniejsza w tym zawodzie (z tego co udało mi się wyszukać). Zdaję sobie sprawę, że moja przygoda z IT będzie długa i nie zacznę od najwyższego szczebla od razu. Jestem jednak świadom, że idąc małymi krokami uda mi się wraz z doświadczeniem oraz certyfikatami znaleźć stanowisko, o którym marzę. ";
    helpdeskLanguage.textContent = "Praca w IT";
    certLanguage.textContent = "Certyfikat";
    cloudLanguage.textContent = "Chmura domowa + Apache2";
    looksLanguage.textContent = "Sylwetka";
    frenchLanguage.textContent = "Francuski";

    function slide() {
        var swapingContent = document.querySelector(".changing-content");

        document.querySelector(".fifth-content-list").children[0].addEventListener("click", () => {
            console.log("XD");
            function goLeft() {
                swapingContent.style.transform = "translateX(-350%)";
            }

            setTimeout(goLeft, 100);

            function changeContent() {
                swapingContent.textContent = "Doświadczenie zawodowe to mój priorytet na następne lata, ponieważ to właśnie taka wiedza jest najcenniejsza w tym zawodzie (z tego co udało mi się wyszukać). Zdaję sobie sprawę, że moja przygoda z IT będzie długa i nie zacznę od najwyższego szczebla od razu. Jestem jednak świadom, że idąc małymi krokami uda mi się wraz z doświadczeniem oraz certyfikatami znaleźć stanowisko, o którym marzę.  ";
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
                swapingContent.textContent = "Certyfikatu typu CompTIA: A+, Security+, Network +, CCNA etc. są moim celem na najbliższe lata z bardzo prostego powodu - świetne źródło do zdobywania informacji. W tym roku zacząłem naukę do CompTIA A+ i moim zadaniem na ten rok jest zdobycie właśnie tego certyfikatu.";
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
                swapingContent.textContent = "Mój najbliższy projekt w wolnym czasie - zamierzam wykorzystać starą stację roboczą, która pełniłaby rolę serwera w mojej sieci domowej. Konkretniej - operowałbym na Debianowej dystrybucji z serwisem Samba, umożliwiając przy tym oczywiście łatwy dostęp do zasobów dla rodziny.";
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
                swapingContent.textContent = "Od kilku miesięcy staram się o ulepszenie swojej sylwetki. Najbardziej zależy mi na zdobywaniu wiedzy związanej z zawodem, tak jednak dbam także o samodoskonalenie. Staram się zwracać uwagę na najmniejsze detale oraz szukam ulepszeń, które mogę wdrożyć.";
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
                swapingContent.textContent = "W czerwcu 2021 zdecydowałem się na naukę języka francuskiego, początkowo chcąc to traktować jako zwykłe wyzwanie i nie oczekując od siebie dużo. Z czasem moje nastawienie jednak się diametralnie zmieniło, co także wpłynęło na moje podejście wobec trzeciego języka. Ponieważ angielski nie stanowił dla mnie nigdy problemu, doszedłem do wniosku, że mógłbym spróbować swoich sił w innym języku. Francuski jest przede wszystkim uznawany za trudny, co tylko motywuje mnie do dalszej nauki.";
            }

            setTimeout(changeContent, 250)

            function goRight() {
                swapingContent.style.transform = "translateX(0%)";
            }

            setTimeout(goRight, 500);
        })
    }

    slide();

    //===== Cele =====

    //===== Info =====

    sixthContentLanguage.children[0].textContent = "Jak długo zajęło mi zbudowanie strony?";
    sixthContentLanguage.children[1].textContent = "- Początek: 31.01.2023";
    sixthContentLanguage.children[2].textContent = "- Koniec: 23.02.2023";
    sixthContentLanguage.children[3].textContent = "Z czego składa się strona?";

    sixthSourcesLanguage.children[0].textContent = "Niekoniecznie każdy element strony był moim pomysłem - inspirowałem się pewnymi źródłami, do których link znajduje się poniżej:";
    sixthSourcesLanguage.children[1].children[0].children[0].children[0].textContent = "Wychodzące panele,";
    sixthSourcesLanguage.children[1].children[0].children[1].children[0].textContent = "Przewijane zdjęcia (carousel effect),";
    sixthSourcesLanguage.children[1].children[0].children[2].children[0].textContent = "Obrazki,";
    sixthSourcesLanguage.children[1].children[0].children[3].children[0].textContent = "Podświetlające się przyciski z wcięciami.";
    sixthSourcesLanguage.children[2].textContent = "Wprowadziłem jedynie kilka własnych zmian przy wdrażaniu tych elementów.";

    //===== Info =====
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
            text.textContent = "Enjoy your afternoon :)"
        }
        else {
            text.textContent = "Have a great evening :)"
        }
    }
    time();

    sectionFirstLanguage.textContent = "I'm 20 years old and I live in Katowice, however I used to live elsewhere. I was born in Redhill, England, where I lived for 3 years. Perhaps, learning English and Polish at the same time impacted on my ability to quickly grasp language knowledge and one based on remembering information. Certainly, this quality helps me to enjoy achieved witt and encourages me to take further action in order to get to know our world better. Since nowadays we've got technology all around us, this is the part of science that fascinates me the most. Concluding, that's why I have decided to develop in  networking and cybersecurity. Dear reader, I'd love to invite you to afriend with my persona better by reviewing this website - a business card - made out of honest hobby :)";

    sectionSecondLanguage.children[0].children[0].textContent = "About me";
    sectionSecondLanguage.children[1].children[0].textContent = "My future";
    sectionSecondLanguage.children[2].children[0].textContent = "My hobbies";
    sectionSecondLanguage.children[3].children[0].textContent = "Expectations towards 2023";
    sectionSecondLanguage.children[4].children[0].textContent = "About site";
    sectionSecondLanguage.style.cursor = "pointer";

    sectionThirdLanguage.textContent = "If asked about my future, I'd respond with my vision of a cybersecurity and networking expert. Although I have many passions, the very hobby I previusly mentioned is what makes me want to work as one. What's the most important, the job is a challange, something uneasy. Simple things bore me and I always find a way to beat this feeling by creating new goals. I believe that this won't change and I'll be still practicing learning many things, additionaly spending my time productively. Certainly with a company of my family and friends.";

    sectionFourthHabitOneLanguage.children[0].children[0].textContent = "Self-discipline with self-improvement:";
    sectionFourthHabitOneLanguage.children[1].textContent = "When I was 18 I relaised that we, young people, spend too much time on luxury and rest. Many of my peers find an excuse for everything. I learned that if I want to utilize my potential, independently of my attitude I must simply act. Frankly speaking, these aren't even my words. These words have been spoken by people who achieved a success in their life. I asked myself a question: 'Why would I waste everything for luxury?'. I left so-called 'comfort bubble' and in the meantime I established some goals for myself, such as:";
    sectionFourthHabitOneLanguage.children[2].children[0].textContent = "Regular workout,";
    sectionFourthHabitOneLanguage.children[2].children[1].textContent = "Studying third language - french,";
    sectionFourthHabitOneLanguage.children[2].children[2].textContent = "Reading books,";
    sectionFourthHabitOneLanguage.children[2].children[3].textContent = "15 minutes of meditation,";
    sectionFourthHabitOneLanguage.children[2].children[4].textContent = "Studies towards IT certification,";
    sectionFourthHabitOneLanguage.children[3].textContent = "And many more.";

    sectionFourthHabitTwoLanguage.children[1].textContent = "Spending time actively always has been a pleasure for me. Preferabely I play football and handball, where I perform as a goalkeeper. I find this position to be the most challanging on the pitch, therefore that's when I feel the best. Although I had some breaks, I still do go out and from time to time I play with my friends and my father, enjoying every minute in the meantime. Besides team-cooperation activities, I also added simple walks to my list of favouirite forms of spending time. In addition I try to improve my silhouette by training 5x a week.";

    sectionFourthHabitThreeLanguage.children[0].children[0].textContent = "Computer games";
    sectionFourthHabitThreeLanguage.children[1].textContent = "Most frequently I use my computer to seek information for my studies. It doesn't change the fact, that it's a tool I do also use for entertainment. Like sports, playing computer games has always been a pleasure. Usually I pick games that I can play with my friends, rarely those, that are single-player. I play computer games, only in case when I actually can allow myself for such enjoyment. It is not my priority. If I decide to play something, I usually reach for such productions as: ";

    sectionFourthHabitFourLanguage.children[1].textContent = "When preparing for my exams, I had an opportunity to get to know something about creating websites and applications. I quickly reached out for more than the original material offered, eventually concluding that creation of websites is one of my hobbies. I fancy inspiring and creating some basic animations on websites, it's got its charm. In fact, that's how this website was created. Nevetherless, other IT specialties motivate me more.";

    sectionFourthHabitFiveLanguage.children[0].children[0].textContent = "Movies, TV shows and books:";
    sectionFourthHabitFiveLanguage.children[1].textContent = "Most often I read books. Much less often I watch movies and TV shows. I favourabely appreciate those productions, that are shown in adventerous or science-fiction world. My attention is also brought by such movies/books that contain an important philosophy or a moral. It is a tough task to choose directly one best production, nevetherless I am certain that ones that should be mentioned here are: ";
    document.getElementById("tvShow").textContent = "TV Shows: ";
    document.getElementById("movies").textContent = "Movies: ";
    document.getElementById("books").textContent = "Books: ";
    document.getElementById("witcher").textContent = "The Witcher series,";


    sectionFifthContentLanguage.textContent = "I find experience to be my priority for the next years, mainly because this very knowledge is the most valuable in this proffesion (from what I managed to find out so far). I am aware that my journey with IT will be long and I won't be starting at the top right away. I am concious that step by step I'll find the right place in IT world.";
    helpdeskLanguage.textContent = "IT Support Job";
    certLanguage.textContent = "Certificates";
    cloudLanguage.textContent = "Home-cloud + Apache";
    looksLanguage.textContent = "Silhouette improvement";
    frenchLanguage.textContent = "French language";

    function slide() {
        var swapingContent = document.querySelector(".changing-content");

        document.querySelector(".fifth-content-list").children[0].addEventListener("click", () => {
            console.log("XD");
            function goLeft() {
                swapingContent.style.transform = "translateX(-350%)";
            }

            setTimeout(goLeft, 100);

            function changeContent() {
                swapingContent.textContent = "I find experience to be my prio for the next years, mainly because this very knowledge is the most valuable in this proffesion (from what I managed to find out). I am aware that my journey with IT will be long and I won't be starting and the top right ahead. I am concious that with little steps I'll manage to find a dream-proffesion with an assist of experience and certificates.";
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
                swapingContent.textContent = "Certificates like: CompTIA: A+, Security +, Network+, CCNA etc. are my goals for the following years and the answer is pretty easy - these are the best sources to acknowledge from. This year I started my CompTIA A+ studies and I aim to obtain the certificate this year.";
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
                swapingContent.textContent = "I was thinking about using my old PC and transforming it into a home-server. To be more precise - I would operate on a debian-based linux distribution with Samba service. My family would gain easier access to mutual resources.";
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
                swapingContent.textContent = "I am doing my best to improve my silhouette for a few months. Although I care the most about IT knowledge, I do also take care of self-improvement overall. I try to pay attention to the smallest details and I am looking for improvements I might add.";
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
                swapingContent.textContent = "In June 2021 I decided to learn french. In the beggining I wanted to treat that as a challange and not as priority. I didn't expect much. As time passed, I changed my attitude towards everything, including french. Since english language has never been a problem for me, I've come to conclusion that I could try my best with a different language. French is known for its difficulty what motivates me to go futher. ";
            }

            setTimeout(changeContent, 250)

            function goRight() {
                swapingContent.style.transform = "translateX(0%)";
            }

            setTimeout(goRight, 500);
        })
    }

    slide();

    sixthContentLanguage.children[0].textContent = "How long did it take to make this website?";
    sixthContentLanguage.children[1].textContent = "- Beginning: 31.01.2023";
    sixthContentLanguage.children[2].textContent = "- End: 23.02.2023";
    sixthContentLanguage.children[3].textContent = "What is this website made of?";

    sixthSourcesLanguage.children[0].textContent = "Sources from where I got some of the animations: ";
    sixthSourcesLanguage.children[1].children[0].children[0].children[0].textContent = "Sliding panels,";
    sixthSourcesLanguage.children[1].children[0].children[1].children[0].textContent = "Carousel effect,";
    sixthSourcesLanguage.children[1].children[0].children[2].children[0].textContent = "Images,";
    sixthSourcesLanguage.children[1].children[0].children[3].children[0].textContent = "Highlighted buttons with cuts.";
    sixthSourcesLanguage.children[2].textContent = "I've introduced a few changes of mine when adding those animations on the website.";

}

french.onclick = () => {
    function hello() {
        document.getElementById("hello").textContent = "Salut! Moi, je suis Łukasz";
    }

    setTimeout(hello, 2500);

    var date = new Date();
    var hours = date.getHours();
    var text = document.getElementById("date");

    function time() {
        if (hours >= 3 && hours < 12) {
            text.textContent = "Bonne journée :)"
        }
        else if (hours >= 12 && hours < 17) {
            text.textContent = "Bon après-midi :)"
        }
        else {
            text.textContent = "bonne soirée :)"
        }
    }
    time();

    //===== Ja =====

    sectionFirstLanguage.textContent = "J'ai 20 ans et j'habite à Katowice. Je suis ne a Redhill, Anglatarre, ou j'ai habite pour 3 ans. Je suis un débutant de francais, c'est parce que ce site n'est pas tout en francais. Je peux aussi parler en anglais et pologne. J'aimrais devenir un spécialiste des ordonnanceurs est réseaux. J'adore apprendre de nouveaux choses, c'est parce que je suis toujours content ! Cher lecteur, je voudrais vous inviter à apprendre plus de moi via ca site ! :)";

    //===== Ja =====

    //===== Odnośniki =====

    sectionSecondLanguage.children[0].children[0].textContent = "Sur moi";
    sectionSecondLanguage.children[1].children[0].textContent = "Mon avenir";
    sectionSecondLanguage.children[2].children[0].textContent = "Mes intérêts";
    sectionSecondLanguage.children[3].children[0].textContent = "Objectifs pour 2023";
    sectionSecondLanguage.children[4].children[0].textContent = "Ce site";
    sectionSecondLanguage.style.cursor = "pointer";

    //===== Odnośniki =====

    //===== Przyszłość =====

    sectionThirdLanguage.textContent = "Si quelq'on me dire: Qu'est-ce qui vous voulez devenir, la response est facile - ingénieur réseaux et spécialiste cybersécurité. C'est très interresant! Pour plus d'informations, changer du langue s'il vous plait.";

    //===== Przyszłość =====

    //===== Rozwój =====

    sectionFourthHabitOneLanguage.children[0].children[0].textContent = "L'autodiscipline:";
    sectionFourthHabitOneLanguage.children[1].textContent = "J'ai deja dire que j'adore apprendre noveaux choses. Beaucoup de gens dans mon age ne pense pas sur l'avenir, mais pas moi. C'est parce que je travaille tous les jours. Je cherche des informations sur comment je peux m'améliorer parce que je croi nous pouvons nous amélions toujours. Pour examples:";
    sectionFourthHabitOneLanguage.children[2].children[0].textContent = "J'exercise,";
    sectionFourthHabitOneLanguage.children[2].children[1].textContent = "J'etudie francais,";
    sectionFourthHabitOneLanguage.children[2].children[2].textContent = "Je lire des livres,";
    sectionFourthHabitOneLanguage.children[2].children[3].textContent = "je médite pour 15 minutes,";
    sectionFourthHabitOneLanguage.children[2].children[4].textContent = "J'etudie pour les certificats,";

    sectionFourthHabitOneLanguage.children[3].textContent = "Et plusieurs. Pour plus d'informations, changer du langue s'il vous plait!";


    sectionFourthHabitTwoLanguage.children[0].children[0].textContent = "Sport";
    sectionFourthHabitTwoLanguage.children[1].textContent = "J'aime faire du sport. C'est pourquoi je pars avec mes amis jouer au football. J'ai aussi joué au handball quand moi avec mes amis étions dans la même école. Je joue au gardien car ce poste est très important et je peux me défier. J'aime aussi faire des exercises et me promener. Je pense que passer du temps dehors est bon temps!";

    sectionFourthHabitThreeLanguage.children[0].children[0].textContent = "Jeux d'ordinateur:";
    sectionFourthHabitThreeLanguage.children[1].textContent = "Bien que je n'ai beaucoup du temps pour jouer jeux d'ordinateur, si j'en ai, j'aime jouer avec mes amis aussi via ordinateurs. C'est aussi un activite qui as besoin de coopérer et c'est raison pourquoi nous jouons ensemble si nous avons du temps. Les jeux nous prenons: ";

    sectionFourthHabitFourLanguage.children[0].children[0].textContent = "Frontend: ";
    sectionFourthHabitFourLanguage.children[1].textContent = "Quand j'ai étudié pour mes examens, j'ai l'occasion d'apprendre comment nous réalisons des sites et des animations sur les sites. J'ai exploré que c'est quelque chose qui m'intéresse. Même si c'est génial, ce n'est pas la chose que je veux faire dans mon avenir. Je pense que c'est un bon hobby, mais trop compliqué. Je préfère différents types de complexes - réseaux et systèmes.";

    sectionFourthHabitFiveLanguage.children[0].children[0].textContent = "Les films, les émissions et les livres:";
    sectionFourthHabitFiveLanguage.children[1].textContent = "L'une de ces productions que je fais le plus souvent est lire de livres. Je regarde rarement des films et des émissions de telé, mais j'aime les livres aussi bien que les films et les émissions. J'aime bien beaucoup de productions, mais quelques que merite un grand appele sont: ";
    document.getElementById("tvShow").textContent = "Émissions de télévision: ";
    document.getElementById("movies").textContent = "Les films: ";
    document.getElementById("books").textContent = "Les livres: ";
    document.getElementById("witcher").textContent = "Le 'Witcher.'";

    //===== Rozwój =====

    //===== Cele =====

    sectionFifthContentLanguage.textContent = "L'expérience professionnelle est la chose la plus importante dans le monde de l'informatique. C'est, en fait, l'information que j'ai trouvée dans mes recherches. C'est aussi logique. Donc je pense que j'ai besoin d'une expérience et c'est ma chance!";
    helpdeskLanguage.textContent = "Métier IT";
    certLanguage.textContent = "Le certificat";
    cloudLanguage.textContent = "Nuage domestique";
    looksLanguage.textContent = "Silhouette";
    frenchLanguage.textContent = "Le francais";

    function slide() {
        var swapingContent = document.querySelector(".changing-content");

        document.querySelector(".fifth-content-list").children[0].addEventListener("click", () => {
            console.log("XD");
            function goLeft() {
                swapingContent.style.transform = "translateX(-350%)";
            }

            setTimeout(goLeft, 100);

            function changeContent() {
                swapingContent.textContent = "L'expérience professionnelle est la chose la plus importante dans le monde de l'informatique. C'est, en fait, l'information que j'ai trouvée dans mes recherches. C'est aussi logique. Donc je pense que j'ai besoin d'une expérience et c'est ma chance! ";
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
                swapingContent.textContent = "Je trouve les certificats comme: CompTIA A+, Security+, Network+, CCNA etc. le chemin de comprendre la metier mieux. J'ai déjà commence a apprendre pour CompTIA A+ cert et je veux continuer obtenir la savoir d'IT avec prochain certificats.";
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
                swapingContent.textContent = "Je pensais utiliser mon vieux ordinateur pour créer un serveur avec des dossiers disponibles pour toute ma famille. J'utiliserais le service Samba sur une machine Linux. C'est aussi une bonne chance d'apprendre le service.";
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
                swapingContent.textContent = "Depuis quelques mois j'essaye d'améliorer ma silhouette. Je veux me faire mieux dans toutes les aspects alors je prends soin de l'autodiscipline. J'ai aussi besoin d'exercises pour améliorer.";
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
                swapingContent.textContent = "Dans juin 2021 j'ai decide pour apprendre le fracnais. Au debut je ne voulais etudie le langue entier mais au fil du temps j'ai change mon attitude. Je trouve les défis et je n'arrete pas. Comme je connais très bien l'anglais, je veux apprendre une troisième langue. Le français est difficile mais je m'en sors bien. En plus j'apprends vite, alors ce n'est pas une probleme pour moi.";
            }

            setTimeout(changeContent, 250)

            function goRight() {
                swapingContent.style.transform = "translateX(0%)";
            }

            setTimeout(goRight, 500);
        })
    }

    slide();

    sixthContentLanguage.children[0].textContent = "Pour comment de temps j'ai construit la site ?";
    sixthContentLanguage.children[1].textContent = "- Le début: 31.01.2023";
    sixthContentLanguage.children[2].textContent = "- La fin: 23.02.2023";
    sixthContentLanguage.children[3].textContent = "De quoi est construit le site?";

    sixthSourcesLanguage.children[0].textContent = "Les sources de quelques animations: ";
    sixthSourcesLanguage.children[1].children[0].children[0].children[0].textContent = "Panneaux coulissants,";
    sixthSourcesLanguage.children[1].children[0].children[1].children[0].textContent = "Effet carrousel,";
    sixthSourcesLanguage.children[1].children[0].children[2].children[0].textContent = "Les images,";
    sixthSourcesLanguage.children[1].children[0].children[3].children[0].textContent = "Boutons surlignés avec découpes.";
    sixthSourcesLanguage.children[2].textContent = "J'ai introduce quelque des changes quand j'ai ajoute ces animations sur cet site.";
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
            swapingContent.textContent = "Doświadczenie zawodowe to mój priorytet na następne lata, ponieważ to właśnie taka wiedza jest najcenniejsza w tym zawodzie (z tego co udało mi się wyszukać). Zdaję sobie sprawę, że moja przygoda z IT będzie długa i nie zacznę od najwyższego szczebla od razu. Jestem jednak świadom, że idąc małymi krokami uda mi się wraz z doświadczeniem oraz certyfikatami znaleźć stanowisko, o którym marzę. ";
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
            swapingContent.textContent = "Certyfikatu typu CompTIA: A+, Security+, Network +, CCNA etc. są moim celem na najbliższe lata z bardzo prostego powodu - to są świetne źródła do zdobywania informacji. W tym roku zacząłem naukę do CompTIA A+ i moim zadaniem na ten rok jest zdobycie właśnie tego certyfikatu.";
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
            swapingContent.textContent = "Mój najbliższy projekt w wolnym czasie - zamierzam wykorzystać starą stację roboczą, która pełniłaby rolę serwera w mojej sieci domowej. Konkretniej - operowałbym na Debianowej dystrybucji z serwisem Samba, umożliwiając przy tym oczywiście łatwy dostęp do zasobów dla rodziny.";
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
            swapingContent.textContent = "Od kilku miesięcy staram się o ulepszenie swojej sylwetki. Najbardziej zależy mi na zdobywaniu wiedzy związanej z zawodem, tak jednak dbam także o samodoskonalenie. Staram się zwracać uwagę na najmniejsze detale oraz szukam ulepszeń, które mogę wdrożyć.";
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
            swapingContent.textContent = "W czerwcu 2021 zdecydowałem się na naukę języka francuskiego, początkowo chcąc to traktować jako zwykłe wyzwanie i nie oczekując od siebie dużo. Z czasem moje nastawienie jednak się diametralnie zmieniło, co także wpłynęło na moje podejście wobec trzeciego języka. Ponieważ angielski nie stanowił dla mnie nigdy problemu, doszedłem do wniosku, że mógłbym spróbować swoich sił w innym języku. Francuski jest przede wszystkim uznawany za trudny, co tylko motywuje mnie do dalszej nauki.";
        }

        setTimeout(changeContent, 250)

        function goRight() {
            swapingContent.style.transform = "translateX(0%)";
        }

        setTimeout(goRight, 500);
    })
}

slide();