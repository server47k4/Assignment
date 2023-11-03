const navLinksIcons = document.querySelectorAll(".nav-link-icon-container");

navLinksIcons.forEach((e) => {
  e.addEventListener("click", (event) => {
    // Adds the active class for the clicked element
    e.classList.add("active-nav-link-icon-container");

    // Remove the active class from other elements
    navLinksIcons.forEach((element) => {
      if (element !== e) {
        element.classList.remove("active-nav-link-icon-container");
      }
    });
  });
});
