const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");
    if (targetId === "#") {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  });
});
