window.addEventListener('DOMContentLoaded', function() {
    exercicio1();
    exercicio2();
    exercicio3();
    exercicio4();
    exercicio5();
    exercicio6();
    exercicio7();
    exercicio8();
    exercicio10Initial();
    exercicio11Initial();
    exercicio13();
});

function exercicio1() {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.textContent = 'Olá, mundo dinâmico!';
    p.classList.add('destaque');
    container.appendChild(p);
}

function exercicio2() {
    const frutas = ["Maçã", "Banana", "Laranja", "Uva"];
    const lista = document.getElementById('lista');
    for (let i = 0; i < frutas.length; i++) {
        const li = document.createElement('li');
        li.textContent = frutas[i];
        lista.appendChild(li);
    }
}

function exercicio3() {
    function criarCard(titulo, descricao) {
        return `<div class="card"><h3>${titulo}</h3><p>${descricao}</p></div>`;
    }
    
    const cards = document.getElementById('cards');
    cards.innerHTML += criarCard('Card 1', 'Descrição do primeiro card');
    cards.innerHTML += criarCard('Card 2', 'Descrição do segundo card');
    cards.innerHTML += criarCard('Card 3', 'Descrição do terceiro card');
}

function exercicio4() {
    const filmes = [
        { título: 'Inception', ano: 2010 },
        { título: 'The Matrix', ano: 1999 },
        { título: 'Interstellar', ano: 2014 },
        { título: 'Tenet', ano: 2020 }
    ];
    
    function renderizarFilmes() {
        const filmesDiv = document.getElementById('filmes');
        filmesDiv.innerHTML = '';
        filmes.forEach(filme => {
            const div = document.createElement('div');
            div.className = 'card';
            div.innerHTML = `<h3>${filme.título}</h3><p>Ano: ${filme.ano}</p>`;
            filmesDiv.appendChild(div);
        });
    }
    
    renderizarFilmes();
}

function exercicio5() {
    const disciplinas = ['Matemática', 'Programação', 'Banco de Dados', 'Sistemas Operacionais', 'Redes'];
    console.log('EXERCÍCIO 5 - Acessando um array:');
    console.log('Primeiro elemento:', disciplinas[0]);
    console.log('Último elemento:', disciplinas[disciplinas.length - 1]);
    console.log('Total de disciplinas:', disciplinas.length);
}

function exercicio6() {
    const aluno = {
        nome: 'João Silva',
        matrícula: '2024001',
        curso: 'Engenharia de Software',
        período: '5º semestre'
    };
    
    console.log('EXERCÍCIO 6 - Modelando um aluno:');
    console.log('Nome:', aluno.nome);
    console.log('Matrícula:', aluno.matrícula);
    console.log('Curso:', aluno.curso);
    console.log('Período:', aluno.período);
    
    aluno.email = 'joao.silva@email.com';
    console.log('Email (propriedade nova):', aluno.email);
}

function exercicio7() {
    const contatos = [
        { nome: 'Ana', telefone: '(27) 99999-0000' },
        { nome: 'Bruno', telefone: '(21) 98765-4321' },
        { nome: 'Carla', telefone: '(11) 91234-5678' }
    ];
    
    console.log('EXERCÍCIO 7 - Lista de contatos como objetos:');
    for (let i = 0; i < contatos.length; i++) {
        console.log(`${contatos[i].nome} — ${contatos[i].telefone}`);
    }
}

function exercicio8() {
    const produto = {
        nome: 'Notebook',
        preço: 3500.00,
        disponível: true
    };
    
    console.log('EXERCÍCIO 8 - Serialização e desserialização:');
    const jsonString = JSON.stringify(produto);
    console.log('String JSON:', jsonString);
    
    const produtoRecuperado = JSON.parse(jsonString);
    console.log('Objeto recuperado - Preço:', produtoRecuperado.preço);
}

function salvarTexto() {
    const texto = document.getElementById('inputTexto').value;
    localStorage.setItem('meuTexto', texto);
    document.getElementById('inputTexto').value = '';
    alert('Texto salvo!');
}

function carregarTexto() {
    const texto = localStorage.getItem('meuTexto');
    document.getElementById('textoCarregado').textContent = texto || 'Nenhum texto salvo';
}

function exercicio10Initial() {
    const dados = localStorage.getItem('formularioDados');
    if (dados) {
        const obj = JSON.parse(dados);
        document.getElementById('inputNome').value = obj.nome;
        document.getElementById('inputCidade').value = obj.cidade;
    }
}

function salvarFormulario() {
    const nome = document.getElementById('inputNome').value;
    const cidade = document.getElementById('inputCidade').value;
    const dados = { nome, cidade };
    localStorage.setItem('formularioDados', JSON.stringify(dados));
    alert('Dados salvos!');
}

function exercicio11Initial() {
    const contador = localStorage.getItem('contador');
    if (contador) {
        document.getElementById('contadorDisplay').textContent = contador;
    }
}

function incrementarContador() {
    let valor = parseInt(localStorage.getItem('contador')) || 0;
    valor++;
    localStorage.setItem('contador', valor);
    document.getElementById('contadorDisplay').textContent = valor;
}

function resetarContador() {
    localStorage.setItem('contador', 0);
    document.getElementById('contadorDisplay').textContent = 0;
}

function adicionarTarefa() {
    const inputTarefa = document.getElementById('inputTarefa');
    const texto = inputTarefa.value.trim();
    
    if (!texto) return;
    
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const tarefa = {
        id: crypto.randomUUID(),
        texto: texto
    };
    tarefas.push(tarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    
    inputTarefa.value = '';
    renderizarTarefas();
}

function renderizarTarefas() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const tarefasDiv = document.getElementById('tarefas');
    tarefasDiv.innerHTML = '';
    
    for (let i = 0; i < tarefas.length; i++) {
        const div = document.createElement('div');
        div.className = 'tarefas-item';
        div.innerHTML = `
            <span>${tarefas[i].texto}</span>
            <button class="delete" onclick="excluirTarefa('${tarefas[i].id}')">Excluir</button>
        `;
        tarefasDiv.appendChild(div);
    }
}

function exercicio13() {
    renderizarTarefas();
}

function excluirTarefa(id) {
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas = tarefas.filter(t => t.id !== id);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    renderizarTarefas();
}

function salvarAgenda() {
    const id = document.getElementById('inputId').value;
    const nome = document.getElementById('inputAgendaNome').value.trim();
    const telefone = document.getElementById('inputAgendaTelefone').value.trim();
    
    if (!nome || !telefone) {
        alert('Preencha todos os campos');
        return;
    }
    
    let contatos = JSON.parse(localStorage.getItem('agenda')) || [];
    
    if (id) {
        const index = contatos.findIndex(c => c.id === id);
        if (index !== -1) {
            contatos[index].nome = nome;
            contatos[index].telefone = telefone;
        }
    } else {
        contatos.push({
            id: crypto.randomUUID(),
            nome: nome,
            telefone: telefone
        });
    }
    
    localStorage.setItem('agenda', JSON.stringify(contatos));
    limparFormularioAgenda();
    renderizarAgenda();
}

function renderizarAgenda() {
    const contatos = JSON.parse(localStorage.getItem('agenda')) || [];
    const agendaDiv = document.getElementById('agenda');
    agendaDiv.innerHTML = '';
    
    for (let i = 0; i < contatos.length; i++) {
        const div = document.createElement('div');
        div.className = 'agenda-item';
        div.innerHTML = `
            <strong>${contatos[i].nome}</strong> - ${contatos[i].telefone}
            <div style="margin-top: 8px;">
                <button onclick="editarAgenda('${contatos[i].id}', '${contatos[i].nome}', '${contatos[i].telefone}')" style="background: #28a745; margin-right: 5px;">Editar</button>
                <button class="delete" onclick="excluirAgenda('${contatos[i].id}')">Excluir</button>
            </div>
        `;
        agendaDiv.appendChild(div);
    }
}

function editarAgenda(id, nome, telefone) {
    document.getElementById('inputId').value = id;
    document.getElementById('inputAgendaNome').value = nome;
    document.getElementById('inputAgendaTelefone').value = telefone;
    document.getElementById('btnCancelar').style.display = 'inline-block';
}

function cancelarEdicao() {
    limparFormularioAgenda();
}

function limparFormularioAgenda() {
    document.getElementById('inputId').value = '';
    document.getElementById('inputAgendaNome').value = '';
    document.getElementById('inputAgendaTelefone').value = '';
    document.getElementById('btnCancelar').style.display = 'none';
}

function excluirAgenda(id) {
    let contatos = JSON.parse(localStorage.getItem('agenda')) || [];
    contatos = contatos.filter(c => c.id !== id);
    localStorage.setItem('agenda', JSON.stringify(contatos));
    renderizarAgenda();
}

window.addEventListener('DOMContentLoaded', function() {
    renderizarAgenda();
});
