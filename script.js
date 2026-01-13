document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".skill").forEach(card => {

    card.addEventListener("touchstart", () => {
      document.querySelectorAll(".skill").forEach(c => c.classList.remove("active"));
      card.classList.add("active");
    });

  });

});



function openEmail() {
  const user = "manishyy089";
  const domain = "gmail.com";
  window.location.href = "mailto:" + user + "@" + domain;
}

