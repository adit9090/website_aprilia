
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

// ==================================
// ROMANTIC BACKGROUND MUSIC
// ==================================

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");

let isPlaying = false;

async function toggleMusic() {

    try {

        if (music.paused) {

            music.volume = 1;

            await music.play();

            isPlaying = true;
            musicButton.innerHTML = "♫ Pause Music";

        } else {

            music.pause();

            isPlaying = false;
            musicButton.innerHTML = "♫ Play Music";

        }

    } catch (error) {

        console.error("Music Error:", error);

        alert("Musik gagal diputar. Periksa file romantic.mp3!");

    }

}

// Sinkronisasi tombol jika musik berhenti atau selesai

music.addEventListener("pause", function() {
    isPlaying = false;
    musicButton.innerHTML = "♫ Play Music";
});

music.addEventListener("play", function() {
    isPlaying = true;
    musicButton.innerHTML = "♫ Pause Music";
});

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
