document.addEventListener('DOMContentLoaded', () => {
    const name = localStorage.getItem('name');
    const gender = localStorage.getItem('gender');
    const classe = localStorage.getItem('class');
    const email = localStorage.getItem('userEmail');
    const nasc = localStorage.getItem('userNasc');
    
    if (name) {
        document.body.innerHTML = document.body.innerHTML.replace(/\$name/g, name);
    }
    
    if (gender) {
        document.body.innerHTML = document.body.innerHTML.replace(/\$genero/g, gender === 'female' ? 'Feminino' : 'Masculino');
    }
    
    if (classe) {
        document.body.innerHTML = document.body.innerHTML.replace(/\$classe/g, classe === 'warrior' ? 'Guerreiro' : 'Mago');
    }
    
    if (email) {
        document.body.innerHTML = document.body.innerHTML.replace(/\$email/g, email);
    }
    
    if (nasc) {
        document.body.innerHTML = document.body.innerHTML.replace(/\$dataNascimento/g, nasc);
    }
});

const confirmBtn = document.querySelector('.bttContinue');

confirmBtn.addEventListener('click', function() {
    alert('Dados confirmados!');
    window.location.href = 'historia/parte1.html'
});