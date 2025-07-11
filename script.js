const images = document.querySelectorAll(".gallery .image img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

let imageList = Array.from(images).map(img => img.src);
let currentIndex = 0;

images.forEach((img, i) => {
  img.addEventListener("click", () => {
    currentIndex = i;
    openLightbox(img.src);
  });
});

function openLightbox(src) {
  lightbox.style.display = "flex";
  lightboxImg.src = src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function nextImage() {
  currentIndex = (currentIndex + 1) % imageList.length;
  lightboxImg.src = imageList[currentIndex];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  lightboxImg.src = imageList[currentIndex];
}

function filterImages(category) {
  const items = document.querySelectorAll(".gallery .image");
  items.forEach(item => {
    item.style.display = category === 'all' || item.classList.contains(category) ? 'block' : 'none';
  });
}
