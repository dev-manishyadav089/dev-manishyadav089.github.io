// document.addEventListener("DOMContentLoaded", () => {

//     // Make all sections visible by default
//     const sections = document.querySelectorAll("section");
//     sections.forEach(sec => {
//         sec.style.opacity = 1;
//         sec.style.transform = "translateY(0)";
//     });

//     // Button glow
//     const buttons = document.querySelectorAll(".btn");
//     buttons.forEach(btn => {
//         btn.addEventListener("mouseenter", () => {
//             btn.style.boxShadow = "0 0 15px rgba(255,255,255,0.6)";
//         });
//         btn.addEventListener("mouseleave", () => {
//             btn.style.boxShadow = "none";
//         });
//     });

// });

function openEmail() {
  const user = "manishyy089";
  const domain = "gmail.com";
  window.location.href = "mailto:" + user + "@" + domain;
}

