/* Ce fichier est javascript */ 
 // Wait until the DOM is fully loaded
 document.addEventListener("DOMContentLoaded", function () {
  const cards = document.querySelectorAll(".travel-card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.classList.add("highlight-card");
    });

    card.addEventListener("mouseleave", () => {
      card.classList.remove("highlight-card");
    });
  });
});
