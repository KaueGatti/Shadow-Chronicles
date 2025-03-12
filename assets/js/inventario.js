document.addEventListener("DOMContentLoaded", function() {
const invTest = document.querySelector(".containerItens"); // Container para os slots do inventário
const addSword = document.querySelector("#bttAddSword"); // Botão adicionar espada
const addShield = document.querySelector("#bttAddShield"); // Botão adicionar escudo
const inventoryCount = document.querySelector("#inventoryCount"); // Span para o numero de itens no inventário
const coinsDisplay = document.querySelector("#coins"); // Span numero de moedas

const itemMenu = document.querySelector("#itemMenu"); // Menu que aparece quando clica no item
const sellItemBtn = document.querySelector("#sellItem"); // Botão de vender
const viewDetailsBtn = document.querySelector("#viewDetails"); // Botão de Detalhes
const mergeItemBtn = document.querySelector("#mergeItem"); // Botão de fundir itens
const itemDescription = document.querySelector("#itemDescription"); // texto de descrição do item

let inv = []; // Array para inventário
const maxInvSize = 15; // Tamanho máximo do inventário
let selectedItemIndex = null; // Index do item selecinado
let coins = 0; // Número de moedas
let detailsShown = false; // Mostrar detalhes

const items = { // Objeos para armazenar os itens
    sword: {  // item espada
        name: "Espada de Ferro", // nome do item
        type: "Espada",  // tipo do item
        rarity: "Comum",  // Raridade do item
        image: "../assets/images/espada.png", // Imagem do item
        value: 100 // Valor do item
    },
    shield: { // item escudo
        name: "Escudo de Madeira", // nome do item
        type: "Escudo", // tipo do item
        rarity: "Comum", // Raridade do item
        image: "../assets/images/escudo.png", // Imagem do item
        value: 80 // Valor do item
    }
};

const rarities = ["Comum", "Incomum", "Raro", "Épico", "Lendário"]; // Raridades dos itens


function addItem(itemKey) { // Função adicionar item
    if (inv.length < maxInvSize) {
        inv.push(items[itemKey]);
        renderInventory();
    } else {
        alert("Inventário cheio!");
    }
}

function renderInventory() { // Função para renderizar o inventário
    invTest.innerHTML = ""; // Limpar os slots do inventário
    inventoryCount.textContent = `${inv.length}`; // Número de slots ocupados no inventário

    for (let i = 0; i < maxInvSize; i++) { // Adicionar a quantidade de slots para o tamanho do inventário
        const slot = document.createElement("div"); //Adicionar slot
        slot.classList.add("slotItens"); // Adicionar classe com CSS ao slot

        if (inv[i]) { // Adicionar imagem do item ao slot criado
            const itemImg = document.createElement("img");
            itemImg.src = inv[i].image;
            itemImg.alt = inv[i].name;
            slot.appendChild(itemImg);

            slot.addEventListener("click", (event) => {
                showItemMenu(event, i);
            });
        }

        invTest.appendChild(slot); // Adicionar o slot ao container de slots
    }
}

function showItemMenu(event, index) {
    selectedItemIndex = index;
    const item = inv[index];
    
    itemDescription.innerHTML = `<strong>${item.name}</strong>`;
    detailsShown = false;
    
    itemMenu.style.left = `${event.clientX}px`;
    itemMenu.style.top = `${event.clientY}px`;
    itemMenu.classList.remove("hidden");
}

document.addEventListener("click", (event) => {
    if (!event.target.closest(".slotItens") && !event.target.closest("#itemMenu")) {
        itemMenu.classList.add("hidden");
    }
});

sellItemBtn.addEventListener("click", () => {
    if (selectedItemIndex !== null) {
        coins += inv[selectedItemIndex].value;
        coinsDisplay.textContent = coins;
        inv.splice(selectedItemIndex, 1);
        renderInventory();
        itemMenu.classList.add("hidden");
    }
});

viewDetailsBtn.addEventListener("click", () => {
    if (selectedItemIndex !== null && !detailsShown) {
        const item = inv[selectedItemIndex];
        itemDescription.innerHTML = `
            <strong>${item.name}</strong><br>
            Tipo: ${item.type}<br>
            Raridade: ${item.rarity}
        `;
        detailsShown = true;
    }
});

mergeItemBtn.addEventListener("click", () => {
    if (selectedItemIndex !== null) {
        const item = inv[selectedItemIndex];
        const itemCount = countItemInInventory(item.name, item.rarity);

        if (itemCount >= 3) {
            removeItems(item.name, item.rarity);

            const nextRarity = getNextRarity(item.rarity);
            if (nextRarity) {
                const newItem = { ...item, rarity: nextRarity };
                inv.push(newItem);
                renderInventory();
                itemMenu.classList.add("hidden");
            } else {
                alert("Já atingiu a raridade máxima!");
            }
        } else {
            alert("Você precisa de pelo menos 3 itens do mesmo tipo e raridade para fundir.");
        }
    }
});

function countItemInInventory(name, rarity) {
    return inv.filter(item => item.name === name && item.rarity === rarity).length;
}

function removeItems(name, rarity) {
    let count = 0;
    inv = inv.filter(item => {
        if (item.name === name && item.rarity === rarity && count < 3) {
            count++;
            return false;
        }
        return true;
    });
}

function getNextRarity(currentRarity) {
    const index = rarities.indexOf(currentRarity);
    if (index < rarities.length - 1) {
        return rarities[index + 1];
    }
    return null;
}

addSword.addEventListener("click", () => addItem("sword"));
addShield.addEventListener("click", () => addItem("shield"));

renderInventory();
  });