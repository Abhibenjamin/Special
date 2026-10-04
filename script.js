/* =====================================================
   ELEMENTS
===================================================== */

const question =
    document.getElementById("question");

const message =
    document.getElementById("message");

const yesBtn =
    document.getElementById("yes-btn");

const noBtn =
    document.getElementById("no-btn");

const gifContainer =
    document.getElementById("gif-container");

const popup =
    document.getElementById("cute-popup");

const closePopup =
    document.getElementById("close-popup");

const popupOk =
    document.getElementById("popup-ok");

const introPage =
    document.getElementById("intro-page");

const startBtn =
    document.getElementById("start-btn");

const bgMusic =
    document.getElementById("bg-music");

const selectionArea =
    document.getElementById("selection-area");

const normalButtons =
    document.getElementById("normal-buttons");

const cafeSelect =
    document.getElementById("cafe-select");

const timeSelect =
    document.getElementById("time-select");

const confirmBtn =
    document.getElementById("confirm-btn");

const submitStatus =
    document.getElementById("submit-status");

const contentCard =
    document.querySelector(".content-card");

const heartBurst =
    document.getElementById("heart-burst");


/* =====================================================
   FIXED DATE
===================================================== */

const FIXED_DATE =
    "7 October 2026";


/* =====================================================
   EMAIL SCRIPT URL
===================================================== */
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbyNaVoeJOoffer4oeLX_WOMHkQ2sqEXz8m-LFdXmrKpmpn5f6FYxYUceJS3ji_KlAKj4A/exec";


/* =====================================================
   CAFE OPTIONS
===================================================== */

const cafeOptions = [

    "Brew N' Bites",

    "THE HIDDEN LEAF CAFE",

    "THE D Pizza",

    "Seven Star Bakery & Cafe",
];


/* =====================================================
   MUSIC
===================================================== */

bgMusic.loop = true;

bgMusic.volume = 0.5;


window.addEventListener(
    "load",
    () => {

        bgMusic.play()
            .catch(() => {

                console.log(
                    "Browser autoplay blocked."
                );

            });

    }
);


document.addEventListener(
    "click",
    () => {

        if (bgMusic.paused) {

            bgMusic.play()
                .catch(() => {});

        }

    },
    {
        once: true
    }
);


/* =====================================================
   INTRO BUTTON
===================================================== */

startBtn.addEventListener(
    "click",
    async () => {

        try {

            await bgMusic.play();

        } catch (error) {

            console.log(
                "Music could not start."
            );

        }


        startBtn.classList.add(
            "button-clicked"
        );


        setTimeout(() => {

            introPage.classList.add(
                "hide"
            );

        }, 150);


        setTimeout(
            () => {

                introPage.style.display =
                    "none";

            },
            950
        );

    }
);


/* =====================================================
   PAGE DATA
===================================================== */

const pages = [

    {
        gif: "13074631538303012999",

        question:
            "Can I be honest with you for a moment? 🥺❤️",

        message:
            "There’s something I’ve been wanting to tell you for a while… 🥺💗"
    },

    {
        gif: "13400701232739966576",

        question:
            "About my Feeling 🥺❤️",

        message:
            "Pata nahi kab aur kaise, tumhari ek photo se shuru hua ya hamari conversations se… but somewhere along the way, you became someone really special to me. ❤️🌹"
    },

    {
        gif: "25029536",

        question:
            "Since you asked… What do you expect from me? ❤️🌹",

        message:
            "Mujhe tumse kuch expect nahi karna… bas ek chance chahiye, tumhe aur achhe se jaanne ka. 🌹🫶🏻            So as we Decided"
    }

];


let currentPage = 0;


/* =====================================================
   PAGE TRANSITION
===================================================== */

function pageTransition() {

    contentCard.classList.remove(
        "page-enter"
    );

    gifContainer.classList.remove(
        "gif-enter"
    );

    void contentCard.offsetWidth;

    contentCard.classList.add(
        "page-enter"
    );

    gifContainer.classList.add(
        "gif-enter"
    );

}


/* =====================================================
   LOAD PAGE
===================================================== */

function loadPage() {

    const page =
        pages[currentPage];


    /* reset */

    selectionArea.style.display =
        "none";

    normalButtons.style.display =
        "flex";


    yesBtn.style.display =
        "inline-block";

    noBtn.style.display =
        "inline-block";


    /* text */

    question.textContent =
        page.question;

    message.textContent =
        page.message;


    /* GIF */

    gifContainer.innerHTML = `

        <div
            class="tenor-gif-embed"
            data-postid="${page.gif}"
            data-share-method="host"
            data-aspect-ratio="1"
            data-width="100%">
        </div>

    `;


    loadTenor();


    /* animation */

    pageTransition();


    /* =================================================
       PAGE 1
    ================================================= */

    if (currentPage === 0) {

        yesBtn.textContent =
            "Yes ❤️";

        noBtn.textContent =
            "No 🙈";

    }


    /* =================================================
       PAGE 2
    ================================================= */

    if (currentPage === 1) {

        noBtn.style.display =
            "none";

        yesBtn.textContent =
            "Continue 💗";

    }


    /* =================================================
       PAGE 3
    ================================================= */

    if (currentPage === 2) {

        noBtn.style.display =
            "none";

        yesBtn.textContent =
            "Continue 💗";

    }

}


/* =====================================================
   TENOR
===================================================== */

function loadTenor() {

    const script =
        document.createElement(
            "script"
        );

    script.src =
        "https://tenor.com/embed.js";

    script.async = true;

    document.body.appendChild(
        script
    );

}


/* =====================================================
   HEART BURST
===================================================== */

function createHeartBurst() {

    const hearts = [
        "❤️",
        "💗",
        "💕",
        "💖",
        "💞"
    ];


    for (
        let i = 0;
        i < 16;
        i++
    ) {

        const heart =
            document.createElement(
                "span"
            );

        heart.className =
            "burst-heart";

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        const angle =
            Math.random() *
            Math.PI *
            2;

        const distance =
            80 +
            Math.random() * 130;


        heart.style.setProperty(
            "--x",
            `${Math.cos(angle) * distance}px`
        );

        heart.style.setProperty(
            "--y",
            `${Math.sin(angle) * distance}px`
        );


        heartBurst.appendChild(
            heart
        );


        setTimeout(
            () => {
                heart.remove();
            },
            1000
        );

    }

}


/* =====================================================
   YES / CONTINUE
===================================================== */

yesBtn.addEventListener(
    "click",
    () => {

        createHeartBurst();


        yesBtn.classList.add(
            "button-clicked"
        );


        setTimeout(
            () => {

                yesBtn.classList.remove(
                    "button-clicked"
                );

            },
            400
        );


        setTimeout(
            () => {

                /* PAGE 1 → PAGE 2 */

                if (currentPage === 0) {

                    currentPage = 1;

                    loadPage();

                    return;

                }


                /* PAGE 2 → PAGE 3 */

                if (currentPage === 1) {

                    currentPage = 2;

                    loadPage();

                    return;

                }


                /* PAGE 3 → PAGE 4 */

                if (currentPage === 2) {

                    showPage4();

                    return;

                }

            },
            250
        );

    }
);


/* =====================================================
   NO BUTTON
===================================================== */

noBtn.addEventListener(
    "mouseenter",
    () => {

        if (currentPage === 0) {

            showPopup();

        }

    }
);


noBtn.addEventListener(
    "click",
    (event) => {

        event.preventDefault();

        if (currentPage === 0) {

            showPopup();

        }

    }
);


/* =====================================================
   POPUP
===================================================== */

function showPopup() {

    popup.classList.add(
        "show"
    );

}


function hidePopup() {

    popup.classList.remove(
        "show"
    );

}


closePopup.addEventListener(
    "click",
    hidePopup
);


popupOk.addEventListener(
    "click",
    hidePopup
);


popup.addEventListener(
    "click",
    (event) => {

        if (
            event.target === popup
        ) {

            hidePopup();

        }

    }
);


/* =====================================================
   PAGE 4
===================================================== */

function showPage4() {

    currentPage = 3;


    question.textContent =
        "Maine kuch cafes select kiye hain… Ek perfect evening ke liye bas tumhari choice baaki hai… ☕❤️";


    message.textContent =
        "";


    gifContainer.innerHTML = `

        <div
            class="tenor-gif-embed"
            data-postid="15274191168211832367"
            data-share-method="host"
            data-aspect-ratio="1.0628"
            data-width="100%">
        </div>

    `;


    loadTenor();


    normalButtons.style.display =
        "none";


    selectionArea.style.display =
        "block";


    selectionArea.classList.remove(
        "selection-enter"
    );

    void selectionArea.offsetWidth;

    selectionArea.classList.add(
        "selection-enter"
    );


    loadCafeOptions();


    pageTransition();

}


/* =====================================================
   CAFE OPTIONS
===================================================== */

function loadCafeOptions() {

    cafeSelect.innerHTML = `

        <option value="">
            Select a cafe
        </option>

    `;


    cafeOptions.forEach(
        (cafe) => {

            const option =
                document.createElement(
                    "option"
                );

            option.value =
                cafe;

            option.textContent =
                cafe;

            cafeSelect.appendChild(
                option
            );

        }
    );

}


/* =====================================================
   SELECTION FEEDBACK
===================================================== */

cafeSelect.addEventListener(
    "change",
    () => {

        if (cafeSelect.value) {

            cafeSelect.classList.add(
                "selected"
            );

        }

    }
);


timeSelect.addEventListener(
    "change",
    () => {

        if (timeSelect.value) {

            timeSelect.classList.add(
                "selected"
            );

        }

    }
);


/* =====================================================
   CONFIRM
===================================================== */

confirmBtn.addEventListener(
    "click",
    async () => {

        const selectedCafe =
            cafeSelect.value;

        const selectedTime =
            timeSelect.value;


        /* CAFE */

        if (!selectedCafe) {

            submitStatus.textContent =
                "Apna favourite cafe choose karo ☕✨";

            cafeSelect.classList.add(
                "shake"
            );

            setTimeout(() => {

                cafeSelect.classList.remove(
                    "shake"
                );

            }, 450);

            return;

        }


        /* TIME */

        if (!selectedTime) {

            submitStatus.textContent =
                "Time bhi choose karo 🕰️💫";

            timeSelect.classList.add(
                "shake"
            );

            setTimeout(() => {

                timeSelect.classList.remove(
                    "shake"
                );

            }, 450);

            return;

        }


        createHeartBurst();


        /* =================================================
           EMAIL BACKEND
        ================================================= */

        if (GOOGLE_SCRIPT_URL) {

            confirmBtn.disabled =
                true;

            confirmBtn.textContent =
                "Sending... ❤️";


            const data =
                new URLSearchParams();


            data.append(
                "date",
                FIXED_DATE
            );


            data.append(
                "cafe",
                selectedCafe
            );


            data.append(
                "time",
                selectedTime
            );


            try {

                await fetch(
                    GOOGLE_SCRIPT_URL,
                    {

                        method:
                            "POST",

                        mode:
                            "no-cors",

                        body:
                            data

                    }
                );

            } catch (error) {

                console.log(
                    error
                );

            }

        }


        setTimeout(
            () => {

                showPage5(
                    selectedCafe,
                    selectedTime
                );

            },
            600
        );

    }
);


/* =====================================================
   PAGE 5
===================================================== */

function showPage5(
    cafe,
    time
) {

    currentPage = 4;


    question.textContent =
        "See You Soon ✨";


    message.innerHTML = `

        You chose
        <strong>${cafe}</strong>
        ☕💫

        <br><br>

        <strong>
            ${FIXED_DATE}
        </strong>

        at

        <strong>
            ${time}
        </strong>

        🥺🫶🏻

        <br><br>

        I don't know how this evening will turn out...

        <br>

        but I already know one thing —

        <br>

        <strong>
            I'll be really happy to spend it with you. ❤️
        </strong>

        <br><br>

        Maybe this is just a small plan...

        <br>

        but I hope it becomes a beautiful memory
        for both of us. 🌹✨

    `;


    gifContainer.innerHTML = `

        <div
            class="tenor-gif-embed"
            data-postid="15274191168211832367"
            data-share-method="host"
            data-aspect-ratio="1.0628"
            data-width="100%">
        </div>

    `;


    loadTenor();


    normalButtons.style.display =
        "none";

    selectionArea.style.display =
        "none";


    pageTransition();


    contentCard.classList.add(
        "final-reveal"
    );


    createHeartBurst();

}


/* =====================================================
   START
===================================================== */

loadPage();