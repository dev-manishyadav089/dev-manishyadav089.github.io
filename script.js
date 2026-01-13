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

const resumeURL = "https://manishyadav.github.io/assets/ManishYadav.pdf";

// Generate QR Code
new QRCode(document.getElementById("qr-box"), {
  text: resumeURL,
  width: 180,
  height: 180,
});

// Start QR Scanner
document.getElementById("scanBtn").addEventListener("click", () => {
  const qrReader = new Html5Qrcode("qr-reader");

  qrReader.start(
    { facingMode: "environment" },
    { fps: 10, qrbox: 250 },
    (decodedText) => {
      qrReader.stop();
      window.location.href = decodedText; // open resume
    },
    (error) => {}
  );
});


