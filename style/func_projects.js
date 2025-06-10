document.addEventListener("DOMContentLoaded", function () {
  const acc = document.getElementsByClassName("accordion");

  for (let i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      const panel = this.nextElementSibling;
      panel.style.display = (panel.style.display === "block") ? "none" : "block";
    });
  }

  const anchor = window.location.hash;
  if (anchor) {
    const target = document.querySelector(anchor + " .accordion");
    if (target) {
      target.click();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }
});
