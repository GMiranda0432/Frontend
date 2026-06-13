const cardsContainer = document.getElementById("cardsContainer");
const OutJSON = document.getElementById("OutJSON");
const BtnExportar = document.getElementById("BtnExportar");

const elementos = [
    {
        nome: "Hidrogênio",
        preco: "R$ 15,00/g",
        categoria: "Gás não metálico",
        numeroAtomico: 1,
        massaAtomica: 1.008
    },
    {
        nome: "Hélio",
        preco: "R$ 12,00/g",
        categoria: "Gás nobre",
        numeroAtomico: 2,
        massaAtomica: 4.0026
    },
    {
        nome: "Lítio",
        preco: "R$ 20,00/g",
        categoria: "Metal alcalino",
        numeroAtomico: 3,
        massaAtomica: 6.94
    },
    {
        nome: "Berílio",
        preco: "R$ 18,00/g",
        categoria: "Metal alcalino-terroso",
        numeroAtomico: 4,
        massaAtomica: 9.0122
    },
    {
        nome: "Boro",
        preco: "R$ 5,00/g",
        categoria: "Semimetal",
        numeroAtomico: 5,
        massaAtomica: 10.81
    },
    {
        nome: "Carbono",
        preco: "R$ 8,50/g",
        categoria: "Não metal",
        numeroAtomico: 6,
        massaAtomica: 12.011
    },
    {
        nome: "Nitrogênio",
        preco: "R$ 12,00/g",
        categoria: "Gás não metálico",
        numeroAtomico: 7,
        massaAtomica: 14.007
    },
    {
        nome: "Oxigênio",
        preco: "R$ 10,00/g",
        categoria: "Gás não metálico",
        numeroAtomico: 8,
        massaAtomica: 15.999
    },
    {
        nome: "Flúor",
        preco: "R$ 9,00/g",
        categoria: "Halogênio",
        numeroAtomico: 9,
        massaAtomica: 18.998
    },
    {
        nome: "Neônio",
        preco: "R$ 14,00/g",
        categoria: "Gás nobre",
        numeroAtomico: 10,
        massaAtomica: 20.180
    },
    {
        nome: "Sódio",
        preco: "R$ 25,00/g",
        categoria: "Metal alcalino",
        numeroAtomico: 11,
        massaAtomica: 22.990
    },
    {
        nome: "Magnésio",
        preco: "R$ 22,00/g",
        categoria: "Metal alcalino-terroso",
        numeroAtomico: 12,
        massaAtomica: 24.305
    },
    {
        nome: "Alumínio",
        preco: "R$ 18,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 13,
        massaAtomica: 26.982
    },
    {
        nome: "Silício",
        preco: "R$ 7,00/g",
        categoria: "Semimetal",
        numeroAtomico: 14,
        massaAtomica: 28.085
    },
    {
        nome: "Fósforo",
        preco: "R$ 6,00/g",
        categoria: "Não metal",
        numeroAtomico: 15,
        massaAtomica: 30.974
    },
    {
        nome: "Enxofre",
        preco: "R$ 4,00/g",
        categoria: "Não metal",
        numeroAtomico: 16,
        massaAtomica: 32.06
    },
    {
        nome: "Cloro",
        preco: "R$ 11,00/g",
        categoria: "Halogênio",
        numeroAtomico: 17,
        massaAtomica: 35.45
    },
    {
        nome: "Argônio",
        preco: "R$ 13,00/g",
        categoria: "Gás nobre",
        numeroAtomico: 18,
        massaAtomica: 39.948
    },
    {
        nome: "Potássio",
        preco: "R$ 30,00/g",
        categoria: "Metal alcalino",
        numeroAtomico: 19,
        massaAtomica: 39.098
    },
    {
        nome: "Cálcio",
        preco: "R$ 28,00/g",
        categoria: "Metal alcalino-terroso",
        numeroAtomico: 20,
        massaAtomica: 40.078
    },
    {
        nome: "Escândio",
        preco: "R$ 35,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 21,
        massaAtomica: 44.956
    },
    {
        nome: "Titânio",
        preco: "R$ 40,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 22,
        massaAtomica: 47.867
    },
    {
        nome: "Vanádio",
        preco: "R$ 38,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 23,
        massaAtomica: 50.942
    },
    {
        nome: "Cromo",
        preco: "R$ 32,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 24,
        massaAtomica: 51.996
    },
    {
        nome: "Manganês",
        preco: "R$ 29,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 25,
        massaAtomica: 54.938
    },
    {
        nome: "Ferro",
        preco: "R$ 25,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 26,
        massaAtomica: 55.845
    },
    {
        nome: "Cobalto",
        preco: "R$ 27,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 27,
        massaAtomica: 58.933
    },
    {
        nome: "Níquel",
        preco: "R$ 30,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 28,
        massaAtomica: 58.693
    },
    {
        nome: "Cobre",
        preco: "R$ 26,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 29,
        massaAtomica: 63.546
    },
    {
        nome: "Zinco",
        preco: "R$ 24,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 30,
        massaAtomica: 65.38
    },
    {
        nome: "Gálio",
        preco: "R$ 20,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 31,
        massaAtomica: 69.723
    },
    {
        nome: "Germânio",
        preco: "R$ 18,00/g",
        categoria: "Semimetal",
        numeroAtomico: 32,
        massaAtomica: 72.630
    },
    {
        nome: "Arsênio",
        preco: "R$ 16,00/g",
        categoria: "Semimetal",
        numeroAtomico: 33,
        massaAtomica: 74.922
    },
    {
        nome: "Selênio",
        preco: "R$ 14,00/g",
        categoria: "Não metal",
        numeroAtomico: 34,
        massaAtomica: 78.971
    },
    {
        nome: "Bromo",
        preco: "R$ 12,00/g",
        categoria: "Halogênio",
        numeroAtomico: 35,
        massaAtomica: 79.904
    },
    {
        nome: "Criptônio",
        preco: "R$ 15,00/g",
        categoria: "Gás nobre",
        numeroAtomico: 36,
        massaAtomica: 83.798
    },
    {
        nome: "Rubídio",
        preco: "R$ 32,00/g",
        categoria: "Metal alcalino",
        numeroAtomico: 37,
        massaAtomica: 85.468
    },
    {
        nome: "Estrôncio",
        preco: "R$ 30,00/g",
        categoria: "Metal alcalino-terroso",
        numeroAtomico: 38,
        massaAtomica: 87.62
    },
    {
        nome: "Ítrio",
        preco: "R$ 28,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 39,
        massaAtomica: 88.906
    },
    {
        nome: "Zircônio",
        preco: "R$ 26,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 40,
        massaAtomica: 91.224
    },
    {
        nome: "Nióbio",
        preco: "R$ 24,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 41,
        massaAtomica: 92.906
    },
    {
        nome: "Molibdênio",
        preco: "R$ 22,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 42,
        massaAtomica: 95.95
    },
    {
        nome: "Tecnécio",
        preco: "R$ 20,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 43,
        massaAtomica: 98
    },
    {
        nome: "Rutênio",
        preco: "R$ 18,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 44,
        massaAtomica: 101.07
    },
    {
        nome: "Ródio",
        preco: "R$ 16,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 45,
        massaAtomica: 102.905
    },
    {
        nome: "Paládio",
        preco: "R$ 14,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 46,
        massaAtomica: 106.42
    },
    {
        nome: "Prata",
        preco: "R$ 12,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 47,
        massaAtomica: 107.868
    },
    {
        nome: "Cádmio",
        preco: "R$ 10,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 48,
        massaAtomica: 112.414
    },
    {
        nome: "Índio",
        preco: "R$ 8,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 49,
        massaAtomica: 114.818
    },
    {
        nome: "Estanho",
        preco: "R$ 6,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 50,
        massaAtomica: 118.710
    },
    {
        nome: "Antimônio",
        preco: "R$ 4,00/g",
        categoria: "Semimetal",
        numeroAtomico: 51,
        massaAtomica: 121.760
    },
    {
        nome: "Telúrio",
        preco: "R$ 2,00/g",
        categoria: "Semimetal",
        numeroAtomico: 52,
        massaAtomica: 127.60
    },
    {
        nome: "Iodo",
        preco: "R$ 1,00/g",
        categoria: "Halogênio",
        numeroAtomico: 53,
        massaAtomica: 126.904
    },
    {
        nome: "Xenônio",
        preco: "R$ 5,00/g",
        categoria: "Gás nobre",
        numeroAtomico: 54,
        massaAtomica: 131.293
    },
    {
        nome: "Césio",
        preco: "R$ 30,00/g",
        categoria: "Metal alcalino",
        numeroAtomico: 55,
        massaAtomica: 132.905
    },
    {
        nome: "Bário",
        preco: "R$ 28,00/g",
        categoria: "Metal alcalino-terroso",
        numeroAtomico: 56,
        massaAtomica: 137.327
    },
    {
        nome: "Lantânio",
        preco: "R$ 26,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 57,
        massaAtomica: 138.905
    },
    {
        nome: "Cério",
        preco: "R$ 24,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 58,
        massaAtomica: 140.116
    },
    {
        nome: "Praseodímio",
        preco: "R$ 22,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 59,
        massaAtomica: 140.908
    },
    {
        nome: "Neodímio",
        preco: "R$ 20,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 60,
        massaAtomica: 144.242
    },
    {
        nome: "Promécio",
        preco: "R$ 18,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 61,
        massaAtomica: 145
    },
    {
        nome: "Samário",
        preco: "R$ 16,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 62,
        massaAtomica: 150.36
    },
    {
        nome: "Európio",
        preco: "R$ 14,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 63,
        massaAtomica: 151.964
    },
    {
        nome: "Gadolínio",
        preco: "R$ 12,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 64,
        massaAtomica: 157.25
    },
    {
        nome: "Térbio",
        preco: "R$ 10,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 65,
        massaAtomica: 158.925
    },
    {
        nome: "Disprósio",
        preco: "R$ 8,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 66,
        massaAtomica: 162.500
    },
    {
        nome: "Hólmio",
        preco: "R$ 6,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 67,
        massaAtomica: 164.930
    },
    {
        nome: "Érbio",
        preco: "R$ 4,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 68,
        massaAtomica: 167.259
    },
    {
        nome: "Túlio",
        preco: "R$ 2,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 69,
        massaAtomica: 168.934
    },
    {
        nome: "Itérbio",
        preco: "R$ 1,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 70,
        massaAtomica: 173.045
    },
    {
        nome: "Lutécio",
        preco: "R$ 5,00/g",
        categoria: "Lantanídeo",
        numeroAtomico: 71,
        massaAtomica: 174.967
    },
    {
        nome: "Háfnio",
        preco: "R$ 30,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 72,
        massaAtomica: 178.49
    },
    {
        nome: "Tântalo",
        preco: "R$ 28,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 73,
        massaAtomica: 180.948
    },
    {
        nome: "Tungstênio",
        preco: "R$ 26,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 74,
        massaAtomica: 183.84
    },
    {
        nome: "Rênio",
        preco: "R$ 24,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 75,
        massaAtomica: 186.207
    },
    {
        nome: "Ósmio",
        preco: "R$ 22,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 76,
        massaAtomica: 190.23
    },
    {
        nome: "Irídio",
        preco: "R$ 20,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 77,
        massaAtomica: 192.217
    },
    {
        nome: "Platina",
        preco: "R$ 18,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 78,
        massaAtomica: 195.084
    },
    {
        nome: "Ouro",
        preco: "R$ 16,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 79,
        massaAtomica: 196.967
    },
    {
        nome: "Mercúrio",
        preco: "R$ 14,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 80,
        massaAtomica: 200.592
    },
    {
        nome: "Tálio",
        preco: "R$ 12,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 81,
        massaAtomica: 204.38
    },
    {
        nome: "Chumbo",
        preco: "R$ 10,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 82,
        massaAtomica: 207.2
    },
    {
        nome: "Bismuto",
        preco: "R$ 8,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 83,
        massaAtomica: 208.980
    },
    {
        nome: "Polônio",
        preco: "R$ 6,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 84,
        massaAtomica: 209
    },
    {
        nome: "Astato",
        preco: "R$ 4,00/g",
        categoria: "Halogênio",
        numeroAtomico: 85,
        massaAtomica: 210
    },
    {
        nome: "Radônio",
        preco: "R$ 2,00/g",
        categoria: "Gás nobre",
        numeroAtomico: 86,
        massaAtomica: 222
    },
    {
        nome: "Frâncio",
        preco: "R$ 1,00/g",
        categoria: "Metal alcalino",
        numeroAtomico: 87,
        massaAtomica: 223
    },
    {
        nome: "Rádio",
        preco: "R$ 5,00/g",
        categoria: "Metal alcalino-terroso",
        numeroAtomico: 88,
        massaAtomica: 226
    },
    {
        nome: "Actínio",
        preco: "R$ 30,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 89,
        massaAtomica: 227
    },
    {
        nome: "Tório",
        preco: "R$ 28,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 90,
        massaAtomica: 232.038
    },
    {
        nome: "Protactínio",
        preco: "R$ 26,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 91,
        massaAtomica: 231.036
    },
    {
        nome: "Urânio",
        preco: "R$ 24,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 92,
        massaAtomica: 238.029
    },
    {
        nome: "Netúnio",
        preco: "R$ 22,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 93,
        massaAtomica: 237
    },
    {
        nome: "Plutônio",
        preco: "R$ 20,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 94,
        massaAtomica: 244
    },
    {
        nome: "Amerício",
        preco: "R$ 18,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 95,
        massaAtomica: 243
    },
    {
        nome: "Cúrio",
        preco: "R$ 16,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 96,
        massaAtomica: 247
    },
    {
        nome: "Berquélio",
        preco: "R$ 14,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 97,
        massaAtomica: 247
    },
    {
        nome: "Califórnio",
        preco: "R$ 12,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 98,
        massaAtomica: 251
    },
    {
        nome: "Einstênio",
        preco: "R$ 10,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 99,
        massaAtomica: 252
    },
    {
        nome: "Férmio",
        preco: "R$ 8,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 100,
        massaAtomica: 257
    },
    {
        nome: "Mendelévio",
        preco: "R$ 6,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 101,
        massaAtomica: 258
    },
    {
        nome: "Nobélio",
        preco: "R$ 4,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 102,
        massaAtomica: 259
    },
    {
        nome: "Laurêncio",
        preco: "R$ 2,00/g",
        categoria: "Actinídeo",
        numeroAtomico: 103,
        massaAtomica: 266
    },
    {
        nome: "Rutherfórdio",
        preco: "R$ 1,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 104,
        massaAtomica: 267
    },
    {
        nome: "Dúbnio",
        preco: "R$ 5,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 105,
        massaAtomica: 268
    },
    {
        nome: "Seabórgio",
        preco: "R$ 30,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 106,
        massaAtomica: 269
    },
    {
        nome: "Bóhrio",
        preco: "R$ 28,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 107,
        massaAtomica: 270
    },
    {
        nome: "Hássio",
        preco: "R$ 26,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 108,
        massaAtomica: 277
    },
    {
        nome: "Meitnério",
        preco: "R$ 24,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 109,
        massaAtomica: 278
    },
    {
        nome: "Darmstádio",
        preco: "R$ 22,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 110,
        massaAtomica: 281
    },
    {
        nome: "Roentgênio",
        preco: "R$ 20,00/g",
        categoria: "Metal de transição",
        numeroAtomico: 111,
        massaAtomica: 282
    },
    {
        nome: "Copernício",
        preco: "R$ 18,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 112,
        massaAtomica: 285
    },
    {
        nome: "Nihônio",
        preco: "R$ 16,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 113,
        massaAtomica: 286
    },
    {
        nome: "Fleróvio",
        preco: "R$ 14,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 114,
        massaAtomica: 289
    },
    {
        nome: "Moscóvio",
        preco: "R$ 12,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 115,
        massaAtomica: 290
    },
    {
        nome: "Livermório",
        preco: "R$ 10,00/g",
        categoria: "Metal pós-transição",
        numeroAtomico: 116,
        massaAtomica: 293
    },
    {
        nome: "Tenessino",
        preco: "R$ 8,00/g",
        categoria: "Halogênio",
        numeroAtomico: 117,
        massaAtomica: 294
    },
    {
        nome: "Oganessônio",
        preco: "R$ 6,00/g",
        categoria: "Gás nobre",
        numeroAtomico: 118,
        massaAtomica: 294
    }
];

function criarCard(produto) {
    return `
        <article class="card">
            <h2>${produto.nome}</h2>
            <p><strong>Característica:</strong> ${produto.preco}</p>
            <p><strong>Categoria:</strong> ${produto.categoria}</p>
            <p><strong>Número Atômico:</strong> ${produto.numeroAtomico}</p>
            <p><strong>Massa Atômica:</strong> ${produto.massaAtomica}</p>
        </article>
    `;
}
function renderizarCards() {
    cardsContainer.innerHTML = "";

    for (let i = 0; i < elementos.length; i++) {
        const cardHTML = criarCard(elementos[i]);
        const wrapper = document.createElement("div");
        wrapper.innerHTML = cardHTML;
        cardsContainer.appendChild(wrapper.firstElementChild);
    }
}

BtnExportar.addEventListener("click", () => {
    const json = JSON.stringify(elementos, null, 2);
    console.log(json);
    OutJSON.textContent = json;
    OutJSON.classList.remove("hidden");
});
renderizarCards();