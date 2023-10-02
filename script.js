function addFadeInClass() {
  const headerElement = document.querySelector(".land h1");
  const linkElement = document.querySelector(".land a");
  headerElement.classList.add("fadeIn");
  linkElement.classList.add("fadeIn");
}

// Panggil fungsi untuk menambahkan class "fadeIn" saat halaman dimuat
window.addEventListener("load", addFadeInClass);
