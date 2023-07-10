loader();
RevealMenu();
AllSwipers();
scroll();
btn();
function btn() {
  document.getElementsByClassName("btn", function (event) {
    event.preventDefault();
  });
}

function loader() {
  let preloader = document.getElementById("loader-container");

  window.onload = function () {
    preloader.className = "loader-container active";
    setTimeout(function () {
      preloader.style.display = "none";
    }, 3100);
  };
}

function hideBar() {
  var searchBar = document.getElementById("search-bar");
  if (searchBar.style.display === "none") {
    searchBar.style.display = "block";
  } else {
    searchBar.style.display = "none";
  }
}

function scroll() {
  let links = document.querySelectorAll(".links");
  let section = document.querySelectorAll("section");

  function activeMenu() {
    let len = section.length;
    while (--len && window.scrollY + 60 < section[len].offsetTop) {}
    links.forEach((list) => list.classList.remove("active"));
    links[len].classList.add("active");
  }

  activeMenu();
  window.addEventListener("scroll", activeMenu);
}
function RevealMenu() {
  document.getElementById("search-btn").onclick = function () {
    hideBar();
  };

  function ShowMenu() {
    var menuBars = document.getElementById("navBars");
    if (menuBars.style.display === "none") {
      menuBars.style.display = "block";
    } else {
      menuBars.style.display = "none";
    }
  }

  document.getElementById("menu-bars").onclick = function () {
    ShowMenu();
  };
}

function AllSwipers() {
  var swiper = new Swiper(".home-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });

  var swiper = new Swiper(".review-slider", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 7500,
      disableOnInteraction: false,
    },
    loop: true,
    breakpoint: {
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      prevEl: ".swiper-button-prev",
      nextEl: ".swiper-button-next",
    },
  });
}
