document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('name');
    const gender = localStorage.getItem('gender');
    const classe = localStorage.getItem('class');
    const email = localStorage.getItem('userEmail');
    const nasc = localStorage.getItem('userNasc');
    
    if (name) {
        document.querySelectorAll('.name').forEach((element) => {
            element.textContent = name;
        });
    }
    
    if (gender) {
        document.querySelectorAll('.gender').forEach((element) => {
            element.textContent = gender === 'female' ? 'Feminino' : 'Masculino';
        });
    }
    
    if (classe) {
        document.querySelectorAll('.class').forEach((element) => {
            element.textContent = classe === 'warrior' ? 'Guerreiro' : 'Mago';
        });
    }
    
    if (email) {
        document.querySelectorAll('.email').forEach((element) => {
            element.textContent = email;
        });
    }
    
    if (nasc) {
        document.querySelectorAll('.nasc').forEach((element) => {
            element.textContent = nasc;
        });
    }
});

const confirmBtn = document.querySelector('.continue');

confirmBtn.addEventListener('click', function() {
    alert('Dados confirmados!');
    window.location.href = 'historia/parte1.html'
});

/*
apenas no caso do projeto crescer e precisar de IDs

let characterId = 0;

const confirmBtn = document.querySelector('.continue');

confirmBtn.addEventListener('click', function() {
    if(characterId) {
        characterId++;
    } else {
        characterId = 1;
    }
    console.log(characterId);
});
*/