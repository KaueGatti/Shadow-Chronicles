document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("name");
  const gender = localStorage.getItem("gender");
  const classe = localStorage.getItem("class");

  if (gender) {
    const genderText = document.querySelector(".gender");
    if (genderText) {
      genderText.textContent = gender === "female" ? "Feminino" : "Masculino";
    }
  }

  if (classe) {
    if (classe === "warrior") {
      const containerMana = document.querySelector(".containerMana");
      containerMana.style.display = "none";
    }
  }

  if (name) {
    document.body.innerHTML = document.body.innerHTML.replace(/\$name/g, name);
  }
});

// buttons

const btnStatus = document.querySelector("#status");
const btnHab = document.querySelector("#hab");
const btnQuests = document.querySelector("#quests");
const btnShop = document.querySelector("#shop");
const btnBag = document.querySelector("#bag");

btnStatus.addEventListener("click", function () {
  window.location.href = "extras/status.html";
});

btnHab.addEventListener("click", function () {
  window.location.href = "extras/habilidades.html";
});

btnQuests.addEventListener("click", function () {
  window.location.href = "extras/quests.html";
});

btnShop.addEventListener("click", function () {
  window.location.href = "extras/loja.html";
});

btnBag.addEventListener("click", function () {
  window.location.href = "extras/inventario.html";
});
