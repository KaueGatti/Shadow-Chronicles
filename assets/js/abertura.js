const female = document.querySelector('.female');
const male = document.querySelector('.male');
const continueBtn = document.querySelector('.continue');
let gender = '';

female.addEventListener('click', function() {
    male.classList.remove('active');
    female.classList.add('active');
    gender = 'female';
});

male.addEventListener('click', function() {
    female.classList.remove('active');
    male.classList.add('active');
    gender = 'male';
});

continueBtn.addEventListener('click', function() {
    if(gender) {
        saveGender(gender);
        window.location.href = "classes.html"
    } else {
        alert('Escolha um gênero!');
    }
});

function saveGender(gender) {
    localStorage.setItem('gender', gender);
}