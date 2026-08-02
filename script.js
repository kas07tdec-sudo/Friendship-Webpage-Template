/* ========================================= */
/* SCROLL TO MEMORIES */
/* ========================================= */

function scrollToMemories() {

    const memories =
        document.getElementById("memories");

    memories.scrollIntoView({
        behavior: "smooth"
    });

}


/* ========================================= */
/* LIGHTBOX */
/* ========================================= */

const lightbox =
    document.getElementById("lightbox");

const lightboxImage =
    document.getElementById("lightbox-image");


function openLightbox(imagePath) {

    lightboxImage.src = imagePath;

    lightbox.classList.add("active");

    document.body.style.overflow = "hidden";

}


function closeLightbox() {

    lightbox.classList.remove("active");

    lightboxImage.src = "";

    document.body.style.overflow = "auto";

}


/* Prevent closing when clicking image */

lightboxImage.addEventListener(
    "click",
    function(event) {

        event.stopPropagation();

    }
);


/* ========================================= */
/* ESC KEY TO CLOSE LIGHTBOX */
/* ========================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeLightbox();

        }

    }
);


/* ========================================= */
/* CREATE HEARTS */
/* ========================================= */

function createHearts() {

    const hearts = [
        "💗",
        "💕",
        "💖",
        "💘",
        "🎀",
        "🌸",
        "✨",
        "🦋"
    ];


    for (
        let i = 0;
        i < 30;
        i++
    ) {

        const heart =
            document.createElement("div");


        heart.innerHTML =
            hearts[
                Math.floor(
                    Math.random() *
                    hearts.length
                )
            ];


        heart.style.position =
            "fixed";


        heart.style.left =
            Math.random() *
            100 +
            "vw";


        heart.style.top =
            Math.random() *
            100 +
            "vh";


        heart.style.fontSize =
            Math.random() *
            25 +
            20 +
            "px";


        heart.style.zIndex =
            "10000";


        heart.style.pointerEvents =
            "none";


        heart.style.transition =
            "all 2s ease";


        document.body.appendChild(
            heart
        );


        setTimeout(
            () => {

                heart.style.transform =
                    `
                    translateY(-200px)
                    rotate(360deg)
                    scale(1.5)
                    `;

                heart.style.opacity =
                    "0";

            },
            100
        );


        setTimeout(
            () => {

                heart.remove();

            },
            2200
        );

    }

}


/* ========================================= */
/* CONSOLE MESSAGE */
/* ========================================= */

console.log(
    "💗 Welcome to Nidhi's Friendship Day Surprise! 🎀"
);