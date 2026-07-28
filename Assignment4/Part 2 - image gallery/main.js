const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
const images = ["images/human eye.jpg", 
                "images/waves.jpg", 
                "images/flowers.jpg",
                 "images/wall art.jpg",
                "images/butterfly.jpg"];
for (const image of images) {
  const newImage = document.createElement("img");

  newImage.setAttribute("src", image);
  
  newImage.setAttribute("alt", image);

  thumbBar.appendChild(newImage);
   newImage.addEventListener("click", () => {
    displayedImage.src = image;
    displayedImage.alt = image;
  });
}

btn.addEventListener("click", () => {
  const btnClass = btn.getAttribute("class");

  if (btnClass === "dark") {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
  } else {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
  }
});