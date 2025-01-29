document.addEventListener('DOMContentLoaded', () => {
    const gender = localStorage.getItem('gender');

    if (gender) {
        const genderText = document.querySelector('.container p strong');
        if (genderText) {
            genderText.textContent = gender === 'female' ? 'Feminino' : 'Masculino';
        }
    } else {
        alert('Nenhum gênero selecionado! Voltando à página inicial.');
        window.location.href = 'abertura.html';
    }
    
    if (gender === 'female') {
    document.querySelectorAll('.female').forEach(el => el.style.display = 'block');
  } else if (gender === 'male') {
    document.querySelectorAll('.male').forEach(el => el.style.display = 'block');
  } else {
    alert('Nenhum gênero selecionado!');
      window.location.href = 'abertura.html';
  }
});

const warrior = document.querySelector('.warriorClass');
const mage = document.querySelector('.mageClass');
const continueBtn = document.querySelector('.continue');
let classe = '';

warrior.addEventListener('click', function() {
    warrior.classList.add('active');
    mage.classList.remove('active');
    classe = 'warrior';
});

mage.addEventListener('click', function() {
    mage.classList.add('active');
    warrior.classList.remove('active');
    classe = 'mage';
});

continueBtn.addEventListener('click', function() {
    if(classe) {
        saveClass(classe);
        window.location.href = "character.html"
    } else {
        alert('Escolha uma classe!');
    }
});

function saveClass(classe) {
    localStorage.setItem('class', classe);
}