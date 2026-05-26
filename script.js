const openGiftBtn = document.getElementById("openGiftBtn");
const introScreen = document.getElementById("introScreen");
const mainContent = document.getElementById("mainContent");

const musicBtn = document.getElementById("musicBtn");
const birthdayMusic = document.getElementById("birthdayMusic");

/* OPEN GIFT */

openGiftBtn.addEventListener("click", () => {
  introScreen.style.display = "none";
  mainContent.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/* MUSIC CONTROL */

let isPlaying = false;

musicBtn.addEventListener("click", () => {
  if (!isPlaying) {
    birthdayMusic.play();
    musicBtn.innerHTML = "⏸ Pause Music";

    isPlaying = true;
  } else {
    birthdayMusic.pause();
    musicBtn.innerHTML = "🎵 Play Music";

    isPlaying = false;
  }
});
