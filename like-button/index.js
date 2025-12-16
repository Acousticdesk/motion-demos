// todo akicha: these should be configurable for the demo
const NUM_PARTICLES = 50;
const LIKE_BTN_SIZE = 104;
const RIPPLE_SIZE = 104;
const PARTICLE_ANIMATION_DURATION = 500;
const TWINKLE_ANIMATION_DURATION = 300;
const MAX_PARTICLE_ANIMATION_DEVIATION = 250;
const MAX_TWINKLE_ANIMATION_DEVIATION = 100;

function main() {
  const likeBtn = document.getElementById("like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");

    if (!likeBtn.classList.contains("liked")) {
      return;
    }

    const particles = [];

    for (let i = 0; i < NUM_PARTICLES; i++) {
      const radius = RIPPLE_SIZE / 2;

      const angle = Math.random() * 2 * Math.PI;
      const deviation = (Math.random() > 0.5 ? 1 : -1) * 10 * Math.random();
      const tx = (radius + deviation) * Math.cos(angle);
      const ty = (radius + deviation) * Math.sin(angle);

      const animationDurationDeviation =
        (Math.random() > 0.5 ? 1 : -1) *
        Math.random() *
        MAX_PARTICLE_ANIMATION_DEVIATION;

      const particle = document.createElement("span");
      particle.classList.add("like-particle");
      particle.style.setProperty("--tx", `${tx}px`);
      particle.style.setProperty("--ty", `${ty}px`);
      particle.style.setProperty("--hue", Math.random() * 360);

      particle.style.setProperty(
        "--animation-duration",
        `${PARTICLE_ANIMATION_DURATION + animationDurationDeviation}ms`
      );

      const twinkleAnimationDurationDeviation =
        (Math.random() > 0.5 ? 1 : -1) *
        Math.random() *
        MAX_TWINKLE_ANIMATION_DEVIATION;

      particle.style.setProperty(
        "--twinkle-animation-duration",
        `${TWINKLE_ANIMATION_DURATION + twinkleAnimationDurationDeviation}ms`
      );

      likeBtn.appendChild(particle);
      particles.push(particle);
    }

    // todo akicha: cover an edge case where user clicks multiple times quickly
    setTimeout(() => {
      // particles.forEach((particle) => particle.remove());
    }, OVERALL_ANIMATION_DURATION);
  });
}

document.addEventListener("DOMContentLoaded", main);
