
// ==================================
// LOVE LETTER
// ==================================

function openLetter() {
    document
        .getElementById("letterModal")
        .classList.add("show");
}

function closeLetter() {
    document
        .getElementById("letterModal")
        .classList.remove("show");
}

// Tutup popup ketika area luar diklik

document
    .getElementById("letterModal")
    .addEventListener("click", function(event) {

        if (event.target === this) {
            closeLetter();
        }

    });

// ==================================
// FLOATING HEART ANIMATION
// ==================================

function createHeart() {

    const heart = document.createElement("div");

    heart.className = "heart";

    const symbols = ["♡", "♥", "💕", "💗", "💖"];

    heart.innerHTML =
        symbols[Math.floor(Math.random() * symbols.length)];

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 5) + "s";

    document.getElementById("hearts").appendChild(heart);

    setTimeout(function() {
        heart.remove();
    }, 10000);

}

// Membuat hati setiap 600 milidetik

setInterval(createHeart, 600);

// ==================================
// ROMANTIC BACKGROUND MUSIC
// ==================================

const music = document.getElementById("backgroundMusic");

const musicButton = document.getElementById("musicButton");

async function toggleMusic() {

    if (music.paused) {

        try {

            await music.play();

            musicButton.innerHTML = "♫ Pause Music";

        } catch (error) {

            alert(
                "Musik belum tersedia. Periksa file romantic.mp3 kamu."
            );

        }

    } else {

        music.pause();

        musicButton.innerHTML = "♫ Play Music";

    }

}

// ==================================
// POLAROID PHOTO PREVIEW
// ==================================

function showPhoto(element) {

    const photo = element.querySelector("img");

    const modal = document.getElementById("photoModal");

    const preview = document.getElementById("previewPhoto");

    preview.src = photo.src;

    modal.classList.add("show");

}

function closePhoto() {

    document
        .getElementById("photoModal")
        .classList.remove("show");

}

/* ==================================
   LOVE COUNTER
================================== */

.counter-section {
    padding: 90px 20px;
    text-align: center;
    background: linear-gradient(
        135deg,
        #ffe6ef,
        #fff7fa
    );
}

.counter-section h2 {
    font-family: 'Playfair Display', serif;
    font-size: 38px;
    color: #80536a;
    margin-bottom: 30px;
}

.counter-card {
    max-width: 450px;
    margin: auto;
    padding: 40px 25px;
    background: white;
    border-radius: 25px;
    box-shadow: 0 10px 35px #d98ba525;
}

.counter-heart {
    font-size: 55px;
    animation: heartbeat 1.4s infinite;
}

.counter-card h3 {
    font-size: 42px;
    color: #e77da5;
    margin: 15px 0;
}

.counter-card p {
    color: #98778a;
    line-height: 1.8;
    margin-bottom: 15px;
}

.counter-card small {
    color: #d96e98;
    font-weight: 700;
}
