document.addEventListener('DOMContentLoaded', () => {
    const gender = localStorage.getItem('gender');
    const classe = localStorage.getItem('class');
    
    if (gender) {
        const genderText = document.querySelector('#gender');
        if (genderText) {
            genderText.value = gender === 'female' ? 'Feminino' : 'Masculino';
        }
    }

    if (classe) {
        const classeText = document.querySelector('#class');
        if (classeText) {
            classeText.value = classe === 'warrior' ? 'Guerreiro' : 'Mago';
        }
    }
});

const character = document.querySelector('#characterForm');

character.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const nasc = document.querySelector('#nasc').value;
    
    alert(`Parabens ${name}! Agora voce sera finalmente redirecionado ao jogo, boa sorte!`);
    
    saveCharacter(name);
    saveUser(email, nasc);
    window.location.href = "inicio.html";
});

function saveCharacter(name) {
    localStorage.setItem('name', name);
}

function saveUser(email, nasc) {
    localStorage.setItem('userEmail', email);
    localStorage.setItem('userNasc', nasc);
}