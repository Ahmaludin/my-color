const button = document.getElementById("button");
const nama = document.querySelector("h1");

let ganti = true;
button.addEventListener("click", function () {
  if (!ganti) {
    nama.innerText = "Dodi";
    ganti = true;
  } else if (ganti) {
    nama.innerText = "Ahmal";
    ganti = false;
  }
});
