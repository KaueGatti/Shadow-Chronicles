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
