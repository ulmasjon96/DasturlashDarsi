/**
 * Drum Kit
 */

document.addEventListener("keydown", playSound);

function playSound(hodisa) {
  const availableKeys = "asdfghjkl";
  if (!availableKeys.includes(hodisa.key)) return;
  const pressedKey = document.querySelector(`div.${hodisa.key}`);
  const audio = document.querySelector(`audio.${hodisa.key}`);
  audio.currentTime = 0;
  audio.play();
  pressedKey.classList.add("active");
  setTimeout(() => {
    pressedKey.classList.remove("active");
  }, 150);
}
