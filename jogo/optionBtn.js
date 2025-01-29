const scene = document.querySelector('#scene');
const desc = document.querySelector('#scene-desc');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');

const cenas = {
    start: {
        text: "Você está em uma floresta escura. Há dois caminhos à sua frente.",
        options: [
            { text: "Seguir pela trilha iluminada", nextScene: "trilha" },
            { text: "Entrar na caverna misteriosa", nextScene: "caverna" }
        ]
    }
}

function sceneLoad(cenaAtual) {
    const cena = cenas[cenaAtual];
    
    desc.textContent = cena.text;
    
    option1.textContent = cena.options[0].text;
    option1.onclick = () => sceneLoad(cena.options[0].nextScene);

    if (cena.options[1]) {
        option2.style.display = "block";
        option2.textContent = cena.options[1].text;
        option2.onclick = () => sceneLoad(cena.options[1].nextScene);
    } else {
        option2.style.display = "none";
    }
}
sceneLoad("start");