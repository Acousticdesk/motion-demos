const NUM_PARTICLES = 10;
const LIKE_BTN_SIZE = 52;
const ICON_SIZE = 48;
const PARTICLE_ANIMATION_DURATION = 1000;

function main() {
  const likeBtn = document.getElementById("like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");

    if (!likeBtn.classList.contains("liked")) {
      return;
    }

    const particles = [];

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const radius = ICON_SIZE / 2;

      const angle = Math.random() * 2 * Math.PI;
      const tx = radius * Math.cos(angle);
      const ty = radius * Math.sin(angle);

      const particle = document.createElement("span");
      particle.classList.add("like-particle");
      particle.style.setProperty("--tx", `${tx}px`);
      particle.style.setProperty("--ty", `${ty}px`);
      particle.style.setProperty("--hue", Math.random() * 360);
      likeBtn.appendChild(particle);
      particles.push(particle);
    }

    // todo akicha: cover an edge case where user clicks multiple times quickly
    setTimeout(() => {
      particles.forEach((particle) => particle.remove());
    }, PARTICLE_ANIMATION_DURATION);
  });
}

document.addEventListener("DOMContentLoaded", main);
