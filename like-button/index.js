function main() {
  const likeBtn = document.getElementById("like");

  likeBtn.addEventListener("click", () => {
    likeBtn.classList.toggle("liked");
  });
}

document.addEventListener("DOMContentLoaded", main);
