const elementos = [
    {
        nome: "Hidrogênio",
        preco: "R$ 15,00/g",
        categoria: "Gás não metálico"
    },
    {
        nome: "Hélio",
        preco: "R$ 12,00/g",
        categoria: "Gás nobre"
    },
    {
        nome: "Lítio",
        preco: "R$ 20,00/g",
        categoria: "Metal alcalino"
    },
    {
        nome: "Berílio",
        preco: "R$ 18,00/g",
        categoria: "Metal alcalino-terroso"
    },
    {
        nome: "Boro",
        preco: "R$ 5,00/g",
        categoria: "Semimetal"
    },
    {
        nome: "Carbono",
        preco: "R$ 8,50/g",
        categoria: "Não metal"
    },
    {
        nome: "Nitrogênio",
        preco: "R$ 12,00/g",
        categoria: "Gás não metálico"
    },
    {
        nome: "Oxigênio",
        preco: "R$ 10,00/g",
        categoria: "Gás não metálico"
    },
    {
        nome: "Fluor",
        preco: "R$ 9,00/g",
        categoria: "Halogênio"
    }
];

function criarCard(produto) {
    return `
        <article class="card">
            <h2>${produto.nome}</h2>
            <p><strong>Característica:</strong> ${produto.preco}</p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
        </article>
    `;
}

const cardsContainer = document.getElementById("cardsContainer");
const jsonOutput = document.getElementById("jsonOutput");
const exportBtn = document.getElementById("exportBtn");

function renderizarCards() {
    cardsContainer.innerHTML = "";

    for (let i = 0; i < elementos.length; i++) {
        const cardHTML = criarCard(elementos[i]);
        const wrapper = document.createElement("div");
        wrapper.innerHTML = cardHTML;
        cardsContainer.appendChild(wrapper.firstElementChild);
    }
}

exportBtn.addEventListener("click", () => {
    const json = JSON.stringify(elementos, null, 2);
    console.log(json);
    jsonOutput.textContent = json;
    jsonOutput.classList.remove("hidden");
});

renderizarCards();
