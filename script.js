
function reveal() {
      const reveals = document.querySelectorAll('.reveal');
      for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (elementTop < windowHeight - revealPoint) {
          reveals[i].classList.add('active');
        }
      }
    }

    window.addEventListener('scroll', reveal);
    window.addEventListener('load', reveal);

    // Scroll to top on refresh
    window.addEventListener('load', () => {
      setTimeout(() => {
        window.scrollTo(0, 0);
        history.replaceState(null, null, ' ');
      }, 1);
    });


const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  // Change icon to close when menu is open
  menuToggle.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
});
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    menuToggle.textContent = '☰';
  });
});


document.addEventListener("DOMContentLoaded", function () {
  new QRCode(document.getElementById("resume-qr"), {
    text: "https://drive.google.com/uc?export=download&id=1Kj6fy4gYEVvsCD_BNCc_6xnu5Lq_qm0a",
    width: 160,
    height: 160
  });
});

function openEmail() {
  const user = "manishyy089";
  const domain = "gmail.com";
  window.location.href = "mailto:" + user + "@" + domain;
}




