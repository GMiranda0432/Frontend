const cardsContainer = document.getElementById("cardsContainer");
const OutJSON = document.getElementById("OutJSON");
const BtnExportar = document.getElementById("BtnExportar");

const elementos = [
    { nome: "Hidrogênio", nomeIngles: "Hydrogen", preco: "R$ 1,00/g", categoria: "Gás não metálico", numeroAtomico: 1, massaAtomica: 1.008 },
    { nome: "Hélio", nomeIngles: "Helium", preco: "R$ 8,00/g", categoria: "Gás nobre", numeroAtomico: 2, massaAtomica: 4.0026 },
    { nome: "Lítio", nomeIngles: "Lithium", preco: "R$ 21,00/g", categoria: "Metal alcalino", numeroAtomico: 3, massaAtomica: 6.94 },
    { nome: "Berílio", nomeIngles: "Beryllium", preco: "R$ 36,00/g", categoria: "Metal alcalino-terroso", numeroAtomico: 4, massaAtomica: 9.0122 },
    { nome: "Boro", nomeIngles: "Boron", preco: "R$ 54,00/g", categoria: "Semimetal", numeroAtomico: 5, massaAtomica: 10.81 },
    { nome: "Carbono", nomeIngles: "Carbon", preco: "R$ 72,00/g", categoria: "Não metal", numeroAtomico: 6, massaAtomica: 12.011 },
    { nome: "Nitrogênio", nomeIngles: "Nitrogen", preco: "R$ 98,00/g", categoria: "Gás não metálico", numeroAtomico: 7, massaAtomica: 14.007 },
    { nome: "Oxigênio", nomeIngles: "Oxygen", preco: "R$ 128,00/g", categoria: "Gás não metálico", numeroAtomico: 8, massaAtomica: 15.999 },
    { nome: "Flúor", nomeIngles: "Fluorine", preco: "R$ 171,00/g", categoria: "Halogênio", numeroAtomico: 9, massaAtomica: 18.998 },
    { nome: "Neônio", nomeIngles: "Neon", preco: "R$ 202,00/g", categoria: "Gás nobre", numeroAtomico: 10, massaAtomica: 20.180 },
    { nome: "Sódio", nomeIngles: "Sodium", preco: "R$ 253,00/g", categoria: "Metal alcalino", numeroAtomico: 11, massaAtomica: 22.990 },
    { nome: "Magnésio", nomeIngles: "Magnesium", preco: "R$ 292,00/g", categoria: "Metal alcalino-terroso", numeroAtomico: 12, massaAtomica: 24.305 },
    { nome: "Alumínio", nomeIngles: "Aluminum", preco: "R$ 351,00/g", categoria: "Metal pós-transição", numeroAtomico: 13, massaAtomica: 26.982 },
    { nome: "Silício", nomeIngles: "Silicon", preco: "R$ 393,00/g", categoria: "Semimetal", numeroAtomico: 14, massaAtomica: 28.085 },
    { nome: "Fósforo", nomeIngles: "Phosphorus", preco: "R$ 465,00/g", categoria: "Não metal", numeroAtomico: 15, massaAtomica: 30.974 },
    { nome: "Enxofre", nomeIngles: "Sulfur", preco: "R$ 513,00/g", categoria: "Não metal", numeroAtomico: 16, massaAtomica: 32.06 },
    { nome: "Cloro", nomeIngles: "Chlorine", preco: "R$ 603,00/g", categoria: "Halogênio", numeroAtomico: 17, massaAtomica: 35.45 },
    { nome: "Argônio", nomeIngles: "Argon", preco: "R$ 719,00/g", categoria: "Gás nobre", numeroAtomico: 18, massaAtomica: 39.948 },
    { nome: "Potássio", nomeIngles: "Potassium", preco: "R$ 743,00/g", categoria: "Metal alcalino", numeroAtomico: 19, massaAtomica: 39.098 },
    { nome: "Cálcio", nomeIngles: "Calcium", preco: "R$ 802,00/g", categoria: "Metal alcalino-terroso", numeroAtomico: 20, massaAtomica: 40.078 },
    { nome: "Escândio", nomeIngles: "Scandium", preco: "R$ 944,00/g", categoria: "Metal de transição", numeroAtomico: 21, massaAtomica: 44.956 },
    { nome: "Titânio", nomeIngles: "Titanium", preco: "R$ 1.053,00/g", categoria: "Metal de transição", numeroAtomico: 22, massaAtomica: 47.867 },
    { nome: "Vanádio", nomeIngles: "Vanadium", preco: "R$ 1.172,00/g", categoria: "Metal de transição", numeroAtomico: 23, massaAtomica: 50.942 },
    { nome: "Cromo", nomeIngles: "Chromium", preco: "R$ 1.248,00/g", categoria: "Metal de transição", numeroAtomico: 24, massaAtomica: 51.996 },
    { nome: "Manganês", nomeIngles: "Manganese", preco: "R$ 1.373,00/g", categoria: "Metal de transição", numeroAtomico: 25, massaAtomica: 54.938 },
    { nome: "Ferro", nomeIngles: "Iron", preco: "R$ 1.452,00/g", categoria: "Metal de transição", numeroAtomico: 26, massaAtomica: 55.845 },
    { nome: "Cobalto", nomeIngles: "Cobalt", preco: "R$ 1.591,00/g", categoria: "Metal de transição", numeroAtomico: 27, massaAtomica: 58.933 },
    { nome: "Níquel", nomeIngles: "Nickel", preco: "R$ 1.643,00/g", categoria: "Metal de transição", numeroAtomico: 28, massaAtomica: 58.693 },
    { nome: "Cobre", nomeIngles: "Copper", preco: "R$ 1.843,00/g", categoria: "Metal de transição", numeroAtomico: 29, massaAtomica: 63.546 },
    { nome: "Zinco", nomeIngles: "Zinc", preco: "R$ 1.961,00/g", categoria: "Metal de transição", numeroAtomico: 30, massaAtomica: 65.38 },
    { nome: "Gálio", nomeIngles: "Gallium", preco: "R$ 2.161,00/g", categoria: "Metal pós-transição", numeroAtomico: 31, massaAtomica: 69.723 },
    { nome: "Germânio", nomeIngles: "Germanium", preco: "R$ 2.324,00/g", categoria: "Semimetal", numeroAtomico: 32, massaAtomica: 72.630 },
    { nome: "Arsênio", nomeIngles: "Arsenic", preco: "R$ 2.472,00/g", categoria: "Semimetal", numeroAtomico: 33, massaAtomica: 74.922 },
    { nome: "Selênio", nomeIngles: "Selenium", preco: "R$ 2.685,00/g", categoria: "Não metal", numeroAtomico: 34, massaAtomica: 78.971 },
    { nome: "Bromo", nomeIngles: "Bromine", preco: "R$ 2.797,00/g", categoria: "Halogênio", numeroAtomico: 35, massaAtomica: 79.904 },
    { nome: "Criptônio", nomeIngles: "Krypton", preco: "R$ 3.017,00/g", categoria: "Gás nobre", numeroAtomico: 36, massaAtomica: 83.798 },
    { nome: "Rubídio", nomeIngles: "Rubidium", preco: "R$ 3.016,00/g", categoria: "Metal alcalino", numeroAtomico: 37, massaAtomica: 85.468 },
    { nome: "Estrôncio", nomeIngles: "Strontium", preco: "R$ 3.322,00/g", categoria: "Metal alcalino-terroso", numeroAtomico: 38, massaAtomica: 87.62 },
    { nome: "Ítrio", nomeIngles: "Yttrium", preco: "R$ 3.467,00/g", categoria: "Metal de transição", numeroAtomico: 39, massaAtomica: 88.906 },
    { nome: "Zircônio", nomeIngles: "Zirconium", preco: "R$ 3.649,00/g", categoria: "Metal de transição", numeroAtomico: 40, massaAtomica: 91.224 },
    { nome: "Nióbio", nomeIngles: "Niobium", preco: "R$ 3.809,00/g", categoria: "Metal de transição", numeroAtomico: 41, massaAtomica: 92.906 },
    { nome: "Molibdênio", nomeIngles: "Molybdenum", preco: "R$ 4.030,00/g", categoria: "Metal de transição", numeroAtomico: 42, massaAtomica: 95.95 },
    { nome: "Tecnécio", nomeIngles: "Technetium", preco: "R$ 4.214,00/g", categoria: "Metal de transição", numeroAtomico: 43, massaAtomica: 98 },
    { nome: "Rutênio", nomeIngles: "Ruthenium", preco: "R$ 4.447,00/g", categoria: "Metal de transição", numeroAtomico: 44, massaAtomica: 101.07 },
    { nome: "Ródio", nomeIngles: "Rhodium", preco: "R$ 4.631,00/g", categoria: "Metal de transição", numeroAtomico: 45, massaAtomica: 102.905 },
    { nome: "Paládio", nomeIngles: "Palladium", preco: "R$ 4.895,00/g", categoria: "Metal de transição", numeroAtomico: 46, massaAtomica: 106.42 },
    { nome: "Prata", nomeIngles: "Silver", preco: "R$ 5.070,00/g", categoria: "Metal de transição", numeroAtomico: 47, massaAtomica: 107.868 },
    { nome: "Cádmio", nomeIngles: "Cadmium", preco: "R$ 5.396,00/g", categoria: "Metal de transição", numeroAtomico: 48, massaAtomica: 112.414 },
    { nome: "Índio", nomeIngles: "Indium", preco: "R$ 5.626,00/g", categoria: "Metal pós-transição", numeroAtomico: 49, massaAtomica: 114.818 },
    { nome: "Estanho", nomeIngles: "Tin", preco: "R$ 5.936,00/g", categoria: "Metal pós-transição", numeroAtomico: 50, massaAtomica: 118.710 },
    { nome: "Antimônio", nomeIngles: "Antimony", preco: "R$ 6.210,00/g", categoria: "Semimetal", numeroAtomico: 51, massaAtomica: 121.760 },
    { nome: "Telúrio", nomeIngles: "Tellurium", preco: "R$ 6.635,00/g", categoria: "Semimetal", numeroAtomico: 52, massaAtomica: 127.60 },
    { nome: "Iodo", nomeIngles: "Iodine", preco: "R$ 6.726,00/g", categoria: "Halogênio", numeroAtomico: 53, massaAtomica: 126.904 },
    { nome: "Xenônio", nomeIngles: "Xenon", preco: "R$ 7.090,00/g", categoria: "Gás nobre", numeroAtomico: 54, massaAtomica: 131.293 },
    { nome: "Césio", nomeIngles: "Caesium", preco: "R$ 7.310,00/g", categoria: "Metal alcalino", numeroAtomico: 55, massaAtomica: 132.905 },
    { nome: "Bário", nomeIngles: "Barium", preco: "R$ 7.690,00/g", categoria: "Metal alcalino-terroso", numeroAtomico: 56, massaAtomica: 137.327 },
    { nome: "Lantânio", nomeIngles: "Lanthanum", preco: "R$ 7.918,00/g", categoria: "Lantanídeo", numeroAtomico: 57, massaAtomica: 138.905 },
    { nome: "Cério", nomeIngles: "Cerium", preco: "R$ 8.127,00/g", categoria: "Lantanídeo", numeroAtomico: 58, massaAtomica: 140.116 },
    { nome: "Praseodímio", nomeIngles: "Praseodymium", preco: "R$ 8.314,00/g", categoria: "Lantanídeo", numeroAtomico: 59, massaAtomica: 140.908 },
    { nome: "Neodímio", nomeIngles: "Neodymium", preco: "R$ 8.655,00/g", categoria: "Lantanídeo", numeroAtomico: 60, massaAtomica: 144.242 },
    { nome: "Promécio", nomeIngles: "Promethium", preco: "R$ 8.845,00/g", categoria: "Lantanídeo", numeroAtomico: 61, massaAtomica: 145 },
    { nome: "Samário", nomeIngles: "Samarium", preco: "R$ 9.322,00/g", categoria: "Lantanídeo", numeroAtomico: 62, massaAtomica: 150.36 },
    { nome: "Európio", nomeIngles: "Europium", preco: "R$ 9.574,00/g", categoria: "Lantanídeo", numeroAtomico: 63, massaAtomica: 151.964 },
    { nome: "Gadolínio", nomeIngles: "Gadolinium", preco: "R$ 10.064,00/g", categoria: "Lantanídeo", numeroAtomico: 64, massaAtomica: 157.25 },
    { nome: "Térbio", nomeIngles: "Terbium", preco: "R$ 10.330,00/g", categoria: "Lantanídeo", numeroAtomico: 65, massaAtomica: 158.925 },
    { nome: "Disprósio", nomeIngles: "Dysprosium", preco: "R$ 10.725,00/g", categoria: "Lantanídeo", numeroAtomico: 66, massaAtomica: 162.500 },
    { nome: "Hólmio", nomeIngles: "Holmium", preco: "R$ 11.050,00/g", categoria: "Lantanídeo", numeroAtomico: 67, massaAtomica: 164.930 },
    { nome: "Érbio", nomeIngles: "Erbium", preco: "R$ 11.374,00/g", categoria: "Lantanídeo", numeroAtomico: 68, massaAtomica: 167.259 },
    { nome: "Túlio", nomeIngles: "Thulium", preco: "R$ 11.656,00/g", categoria: "Lantanídeo", numeroAtomico: 69, massaAtomica: 168.934 },
    { nome: "Itérbio", nomeIngles: "Ytterbium", preco: "R$ 12.113,00/g", categoria: "Lantanídeo", numeroAtomico: 70, massaAtomica: 173.045 },
    { nome: "Lutécio", nomeIngles: "Lutetium", preco: "R$ 12.423,00/g", categoria: "Lantanídeo", numeroAtomico: 71, massaAtomica: 174.967 },
    { nome: "Háfnio", nomeIngles: "Hafnium", preco: "R$ 12.851,00/g", categoria: "Metal de transição", numeroAtomico: 72, massaAtomica: 178.49 },
    { nome: "Tântalo", nomeIngles: "Tantalum", preco: "R$ 13.209,00/g", categoria: "Metal de transição", numeroAtomico: 73, massaAtomica: 180.948 },
    { nome: "Tungstênio", nomeIngles: "Tungsten", preco: "R$ 13.604,00/g", categoria: "Metal de transição", numeroAtomico: 74, massaAtomica: 183.84 },
    { nome: "Rênio", nomeIngles: "Rhenium", preco: "R$ 13.966,00/g", categoria: "Metal de transição", numeroAtomico: 75, massaAtomica: 186.207 },
    { nome: "Ósmio", nomeIngles: "Osmium", preco: "R$ 14.457,00/g", categoria: "Metal de transição", numeroAtomico: 76, massaAtomica: 190.23 },
    { nome: "Irídio", nomeIngles: "Iridium", preco: "R$ 14.801,00/g", categoria: "Metal de transição", numeroAtomico: 77, massaAtomica: 192.217 },
    { nome: "Platina", nomeIngles: "Platinum", preco: "R$ 15.217,00/g", categoria: "Metal de transição", numeroAtomico: 78, massaAtomica: 195.084 },
    { nome: "Ouro", nomeIngles: "Gold", preco: "R$ 15.560,00/g", categoria: "Metal de transição", numeroAtomico: 79, massaAtomica: 196.967 },
    { nome: "Mercúrio", nomeIngles: "Mercury", preco: "R$ 16.047,00/g", categoria: "Metal pós-transição", numeroAtomico: 80, massaAtomica: 200.592 },
    { nome: "Tálio", nomeIngles: "Thallium", preco: "R$ 16.555,00/g", categoria: "Metal pós-transição", numeroAtomico: 81, massaAtomica: 204.38 },
    { nome: "Chumbo", nomeIngles: "Lead", preco: "R$ 16.990,00/g", categoria: "Metal pós-transição", numeroAtomico: 82, massaAtomica: 207.2 },
    { nome: "Bismuto", nomeIngles: "Bismuth", preco: "R$ 17.345,00/g", categoria: "Metal pós-transição", numeroAtomico: 83, massaAtomica: 208.980 },
    { nome: "Polônio", nomeIngles: "Polonium", preco: "R$ 17.556,00/g", categoria: "Metal pós-transição", numeroAtomico: 84, massaAtomica: 209 },
    { nome: "Astato", nomeIngles: "Astatine", preco: "R$ 17.850,00/g", categoria: "Halogênio", numeroAtomico: 85, massaAtomica: 210 },
    { nome: "Radônio", nomeIngles: "Radon", preco: "R$ 19.092,00/g", categoria: "Gás nobre", numeroAtomico: 86, massaAtomica: 222 },
    { nome: "Frâncio", nomeIngles: "Francium", preco: "R$ 19.401,00/g", categoria: "Metal alcalino", numeroAtomico: 87, massaAtomica: 223 },
    { nome: "Rádio", nomeIngles: "Radium", preco: "R$ 19.888,00/g", categoria: "Metal alcalino-terroso", numeroAtomico: 88, massaAtomica: 226 },
    { nome: "Actínio", nomeIngles: "Actinium", preco: "R$ 20.203,00/g", categoria: "Actinídeo", numeroAtomico: 89, massaAtomica: 227 },
    { nome: "Tório", nomeIngles: "Thorium", preco: "R$ 20.883,00/g", categoria: "Actinídeo", numeroAtomico: 90, massaAtomica: 232.038 },
    { nome: "Protactínio", nomeIngles: "Protactinium", preco: "R$ 21.024,00/g", categoria: "Actinídeo", numeroAtomico: 91, massaAtomica: 231.036 },
    { nome: "Urânio", nomeIngles: "Uranium", preco: "R$ 21.899,00/g", categoria: "Actinídeo", numeroAtomico: 92, massaAtomica: 238.029 },
    { nome: "Netúnio", nomeIngles: "Neptunium", preco: "R$ 22.041,00/g", categoria: "Actinídeo", numeroAtomico: 93, massaAtomica: 237 },
    { nome: "Plutônio", nomeIngles: "Plutonium", preco: "R$ 22.936,00/g", categoria: "Actinídeo", numeroAtomico: 94, massaAtomica: 244 },
    { nome: "Amerício", nomeIngles: "Americium", preco: "R$ 23.085,00/g", categoria: "Actinídeo", numeroAtomico: 95, massaAtomica: 243 },
    { nome: "Cúrio", nomeIngles: "Curium", preco: "R$ 23.712,00/g", categoria: "Actinídeo", numeroAtomico: 96, massaAtomica: 247 },
    { nome: "Berquélio", nomeIngles: "Berkelium", preco: "R$ 23.959,00/g", categoria: "Actinídeo", numeroAtomico: 97, massaAtomica: 247 },
    { nome: "Califórnio", nomeIngles: "Californium", preco: "R$ 24.598,00/g", categoria: "Actinídeo", numeroAtomico: 98, massaAtomica: 251 },
    { nome: "Einstênio", nomeIngles: "Einsteinium", preco: "R$ 24.948,00/g", categoria: "Actinídeo", numeroAtomico: 99, massaAtomica: 252 },
    { nome: "Férmio", nomeIngles: "Fermium", preco: "R$ 25.700,00/g", categoria: "Actinídeo", numeroAtomico: 100, massaAtomica: 257 },
    { nome: "Mendelévio", nomeIngles: "Mendelevium", preco: "R$ 26.058,00/g", categoria: "Actinídeo", numeroAtomico: 101, massaAtomica: 258 },
    { nome: "Nobélio", nomeIngles: "Nobelium", preco: "R$ 26.418,00/g", categoria: "Actinídeo", numeroAtomico: 102, massaAtomica: 259 },
    { nome: "Laurêncio", nomeIngles: "Lawrencium", preco: "R$ 27.398,00/g", categoria: "Actinídeo", numeroAtomico: 103, massaAtomica: 266 },
    { nome: "Rutherfórdio", nomeIngles: "Rutherfordium", preco: "R$ 27.768,00/g", categoria: "Metal de transição", numeroAtomico: 104, massaAtomica: 267 },
    { nome: "Dúbnio", nomeIngles: "Dubnium", preco: "R$ 28.140,00/g", categoria: "Metal de transição", numeroAtomico: 105, massaAtomica: 268 },
    { nome: "Seabórgio", nomeIngles: "Seaborgium", preco: "R$ 28.514,00/g", categoria: "Metal de transição", numeroAtomico: 106, massaAtomica: 269 },
    { nome: "Bóhrio", nomeIngles: "Bohrium", preco: "R$ 28.890,00/g", categoria: "Metal de transição", numeroAtomico: 107, massaAtomica: 270 },
    { nome: "Hássio", nomeIngles: "Hassium", preco: "R$ 29.916,00/g", categoria: "Metal de transição", numeroAtomico: 108, massaAtomica: 277 },
    { nome: "Meitnério", nomeIngles: "Meitnerium", preco: "R$ 30.302,00/g", categoria: "Metal de transição", numeroAtomico: 109, massaAtomica: 278 },
    { nome: "Darmstádio", nomeIngles: "Darmstadtium", preco: "R$ 30.910,00/g", categoria: "Metal de transição", numeroAtomico: 110, massaAtomica: 281 },
    { nome: "Roentgênio", nomeIngles: "Roentgenium", preco: "R$ 31.302,00/g", categoria: "Metal de transição", numeroAtomico: 111, massaAtomica: 282 },
    { nome: "Copernício", nomeIngles: "Copernicium", preco: "R$ 31.920,00/g", categoria: "Metal pós-transição", numeroAtomico: 112, massaAtomica: 285 },
    { nome: "Nihônio", nomeIngles: "Nihonium", preco: "R$ 32.318,00/g", categoria: "Metal pós-transição", numeroAtomico: 113, massaAtomica: 286 },
    { nome: "Fleróvio", nomeIngles: "Flerovium", preco: "R$ 32.946,00/g", categoria: "Metal pós-transição", numeroAtomico: 114, massaAtomica: 289 },
    { nome: "Moscóvio", nomeIngles: "Moscovium", preco: "R$ 33.350,00/g", categoria: "Metal pós-transição", numeroAtomico: 115, massaAtomica: 290 },
    { nome: "Livermório", nomeIngles: "Livermorium", preco: "R$ 33.988,00/g", categoria: "Metal pós-transição", numeroAtomico: 116, massaAtomica: 293 },
    { nome: "Tenessino", nomeIngles: "Tennessine", preco: "R$ 34.398,00/g", categoria: "Halogênio", numeroAtomico: 117, massaAtomica: 294 },
    { nome: "Oganessônio", nomeIngles: "Oganesson", preco: "R$ 34.692,00/g", categoria: "Gás nobre", numeroAtomico: 118, massaAtomica: 294 }
];

function criarCard(produto) {
    return `
        <article class="card">
            <img src="imagens/${produto.nomeIngles}.webp" alt="${produto.nome}" class="element-image">
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