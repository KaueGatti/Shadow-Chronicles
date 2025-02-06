document.addEventListener("DOMContentLoaded", () => {
  const name = localStorage.getItem("name");
  const gender = localStorage.getItem("gender");
  const classe = localStorage.getItem("class");

  if (gender) {
      let genderName = gender === "female" ? "Feminino" : "Masculino";
      document.body.innerHTML = document.body.innerHTML.replace(/\$gender/g, genderName);
    }

  if (classe) {
    let className = classe === "warrior" ? "Guerreiro" : "Mago";
    document.body.innerHTML = document.body.innerHTML.replace(/\$class/g, className);
    if (classe === "warrior") {
      const containerMana = document.querySelector(".containerMana");
      containerMana.style.display = "none";
    }
  }

  if (name) {
    document.body.innerHTML = document.body.innerHTML.replace(/\$name/g, name);
  }
});

function abrirMenu(id) {
  let sectionContainersMenu = document.getElementById("sectionContainersMenuId");
  let menuSelecionado = document.getElementById(`container-${id}`);
  let bttVoltar = menuSelecionado.lastElementChild;
  if (sectionContainersMenu && menuSelecionado && bttVoltar) {
    sectionContainersMenu.style.display = "flex";
    menuSelecionado.style.display = "flex";
  }
  bttVoltar.addEventListener("click", () => {
    sectionContainersMenu.style.display = "none";
    menuSelecionado.style.display = "none";
  })
}
