export function init_classic_menu_resize() {
  var mobile_nav = document.querySelector(".mobile-nav");
  var desktop_nav = document.querySelector(".desktop-nav");
  var main_nav = document.querySelector(".main-nav");

  mobile_nav.setAttribute("aria-expanded", "false");

  // Mobile menu max height
  if (main_nav) {
    document.querySelector(".desktop-nav > ul").style.maxHeight =
      window.innerHeight -
      main_nav.offsetHeight -
      20 +
      "px";
  }

  // Mobile menu style toggle
  if (window.innerWidth <= 1024) {
    main_nav.classList.add("mobile-on");
    main_nav.style.backgroundColor = "#B76E79"; // Menambahkan warna latar belakang untuk mobile view
    if (!mobile_nav.classList.contains("active")) {
      desktop_nav.style.display = "none";
    }
  } else if (window.innerWidth > 1024) {
    main_nav.classList.remove("mobile-on");
    main_nav.style.backgroundColor = "#B76E79"; // Menambahkan warna latar belakang untuk desktop view
    desktop_nav.style.display = "block";
  }
}
