// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Alle Elemente mit .auto-glass-section finden
  const autoGlassSections = document.querySelectorAll(".auto-glass-section");

  autoGlassSections.forEach(section => {
    // Wrapper erstellen
    const wrapper = document.createElement("div");
    wrapper.classList.add("glass-border");

    // Eltern-Element referenzieren
    const parent = section.parentNode;

    // Section in den Wrapper verschieben
    parent.replaceChild(wrapper, section);
    wrapper.appendChild(section);
  });
});
