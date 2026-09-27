const hoverCards = document.querySelectorAll(".hover-section");

hoverCards.forEach((hoverCard) => {
  hoverCard.addEventListener("mouseenter", () => {
    hoverCards.forEach((card) => {
      card.classList.toggle("active-card", card === hoverCard);
      card.classList.toggle("dim-card", card !== hoverCard);
    });
  });
  hoverCard.addEventListener("mouseleave", () => {
    hoverCards.forEach((card) => {
      card.classList.remove("active-card", "dim-card");
    });
  });
});
