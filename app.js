// Lista para armazenar os nomes dos amigos/inserir nomes dos amigos no campo de texto
let amigos = [];
let lista = document.getElementById('listaAmigos');
lista.innerHTML = '';
for (let i = 0; i < amigos.length; i++){
    let item = document.createElement('li');
    item.textContent = amigos[i];  // Garantindo que o nome seja exibido
    lista.appendChild(item);  // Adiciona o item na lista
}

// função para adicionar um amigo na lista
function adicionarAmigo(){
    let campoNome = document.getElementById('amigo');
    let nome = campoNome.value;
    
// Verificação para garantir que o nome não está vazio ou repetido
    if (nome === ''){
        alert('Por favor, insira um nome.');
        return;
    }
    if (amigos.includes(nome)) {
        alert('Nome já adicionado, por favor insira outro!');
        return
    }
    amigos.push(nome);
    limparCampo();
    atualizarLista();
    console.log(nome);
} 

// Função para atualizar a lista de amigos na tela
function atualizarLista() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';  // Limpa a lista de amigos antes de atualizar
    amigos.forEach(function(nome) {
        let item = document.createElement('li');
        item.textContent = nome; // Adiciona o nome ao item da lista
        lista.appendChild(item); // Adiciona o item à lista
    });
}

// Função para sortear o amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert('A lista de amigos está vazia! Adicione um nome para sortear');
        return;
    }
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 participantes!');
        return;
    }


    let amigosAleatorios = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[amigosAleatorios];
    document.getElementById("resultado").innerHTML = `🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>!`;
    amigos.splice(amigosAleatorios, 1);  // Remove o nome sorteado da lista
    atualizarLista();  // Atualiza a lista após o sorteio
}

// limpar o campo de entrada
function limparCampo(){
    nome = document.getElementById('amigo')
    nome.value = '';
}

// Função para reiniciar o sorteio
function reiniciar() {
    amigos = [];  // Limpa a lista de amigos
    atualizarLista();  // Atualiza a lista visualmente
    document.getElementById('resultado').innerHTML = '';  // Limpa os resultados do sorteio
    alert('O sorteio foi reiniciado!');  // Feedback para o usuário
}

