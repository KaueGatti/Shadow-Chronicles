document.addEventListener("DOMContentLoaded", () => {
  const gender = localStorage.getItem("gender");

  if (gender) {
    const genderText = document.querySelector(".containerTexts p strong");
    if (genderText) {
      genderText.textContent = gender === "female" ? "Feminino" : "Masculino";
    }
  } else {
    alert("Nenhum gênero selecionado! Voltando à página inicial.");
    window.location.href = "index.html";
    return;
  }

  const mageImageSrc = `assets/images/${
    gender === "female" ? "female" : "male"
  }M.png`;
  const warriorImageSrc = `assets/images/${
    gender === "female" ? "female" : "male"
  }W.png`;

  document.querySelector(".containerMage img").src = mageImageSrc;
  document.querySelector(".containerWarrior img").src = warriorImageSrc;
});

const warrior = document.querySelector(".containerWarrior");
const mage = document.querySelector(".containerMage");
const continueBtn = document.querySelector(".bttContinue");
let classe = "";

warrior.addEventListener("click", function () {
  mage.classList.remove("active");
  warrior.classList.add("active");
  classe = "warrior";
});

mage.addEventListener("click", function () {
  warrior.classList.remove("active");
  mage.classList.add("active");
  classe = "mage";
});

continueBtn.addEventListener("click", function () {
  if (classe) {
    saveClass(classe);
    window.location.href = "character.html";
  } else {
    alert("Escolha uma classe!");
  }
});

function saveClass(classe) {
  localStorage.setItem("class", classe);
}
