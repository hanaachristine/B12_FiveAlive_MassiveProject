document.getElementById("introButton").addEventListener("click", function () {
  alert("Ini adalah bagian pengantar. Kami menawarkan berbagai layanan untuk memenuhi kebutuhan Anda.");
});

document.getElementById("featuresButton").addEventListener("click", function () {
  alert("Berikut adalah fitur utama kami: Fitur 1, Fitur 2, Fitur 3. Untuk informasi lebih lanjut, silakan hubungi kami.");
});

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Terima kasih telah menghubungi kami!");
});
