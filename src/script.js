var humburger = document.querySelector("#humburger");
var humburgerMenu = document.querySelector(".humburger_menu");
var humburgerClose = document.querySelector(".humburger_close");

humburger.addEventListener("click", function () {
  humburgerMenu.style.right = "0";
});
humburgerClose.addEventListener("click", function () {
  humburgerMenu.style.right = "-100%";
});

function Myswiper() {
  var swiper = new Swiper(".tranding-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    loop: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2.5,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  });

  // Update background image on slide change
  swiper.on("slideChange", function () {
    const activeSlide = swiper.slides[swiper.activeIndex].querySelector("img");
    const backgroundUrl = activeSlide.src; // Get the image source
    document.getElementById(
      "tranding"
    ).style.backgroundImage = `url('${backgroundUrl}')`;
  });

  // Set initial background
  const initialSlide = swiper.slides[swiper.activeIndex].querySelector("img");
  document.getElementById(
    "tranding"
  ).style.backgroundImage = `url('${initialSlide.src}')`;
}
Myswiper();

function navScroll() {
  const nav = document.getElementById("navigation");

  let lastScrollY = window.scrollY;

  window.addEventListener("wheel", (event) => {
    const currentScrollY = window.scrollY;

    if (event.deltaY > 0) {
      nav.style.transform = "translateY(-100%)";
      nav.style.opacity = "0";
    } else {
      nav.style.transform = "translateY(0)";
      nav.style.opacity = "1";
    }

    lastScrollY = currentScrollY;
  });
}
navScroll();

function changeImage(imageSrc) {
  const displayImage = document.getElementById('display-image');
  displayImage.src = imageSrc;
  displayImage.style.display = 'block';
}

// package SLider
function slide(direction) {
  const slider = document.getElementById('packageslider');
  const cardWidth = slider.children[0].offsetWidth + 16; // Card width + margin
  slider.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}