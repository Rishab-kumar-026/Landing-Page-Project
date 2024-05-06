// Responsive Nav Bar

const menu_btn = document.getElementById("menu-btn");
const nav_links = document.getElementById("nav-links");
const menu_btn_icon = menu_btn.querySelector("i");

menu_btn.addEventListener("click", () => {
  nav_links.classList.toggle("show_links");

  if (nav_links.classList.contains("show_links")) {
    menu_btn_icon.classList.remove("fa-bars");
    menu_btn_icon.classList.add("fa-xmark");
  }
  else {
    menu_btn_icon.classList.add("fa-bars");
    menu_btn_icon.classList.remove("fa-xmark");
  }
})

nav_links.addEventListener("click", () => {
  nav_links.classList.remove("show_links");
  menu_btn_icon.classList.remove("fa-xmark");
  menu_btn_icon.classList.add("fa-bars");

})

//Header 
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".heading_container p", {
  ...scrollRevealOption,
});

ScrollReveal().reveal(".heading_container h1", {
  ...scrollRevealOption,
  delay: 600,
});

//About 

ScrollReveal().reveal(".about-section img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".about-content .section_subheader", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".about-content .section_header", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".about-content .section_description", {
  ...scrollRevealOption,
  delay: 1500,
});
ScrollReveal().reveal(".about-content .btn", {
  ...scrollRevealOption,
  delay: 2000,
});

//Rooms

ScrollReveal().reveal(".room", {
  ...scrollRevealOption,
  interval: 1000,
});

//Services

ScrollReveal().reveal(".security ", {
  ...scrollRevealOption,

});

ScrollReveal().reveal(".time-support", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".conference", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".tourist", {
  ...scrollRevealOption,
  delay: 1500,
});



