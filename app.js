let listaDeAmigo = []; // array que irá guardar os nomes

let campoAmigo = document.getElementById('amigo'); 
let lista = document.querySelector('#listaAmigos');
const resultado = document.getElementById('resultado');

function limpar(){ //limpar os campos de texto
    campo = document.querySelector('input');
    campo.value = '';
}

function limparTudo(){ // vai limpar a lista, array e o campo de texto

        limpar();
        lista.innerHTML = "Limpeza completa"
        resultado.innerHTML = ""
        
        for(let i = 0; i < listaDeAmigo.length; i++){
                listaDeAmigo.splice(i);
                }
}



function adicionarAmigo(){ //adicionar nome na lista


    let campo = campoAmigo.value.trim();

        if(campo == ""){ //verificar se ao apertar o botao tinha algum nome inserido no campo de texto
                alert('Por favor, insira um nome');
                return;
        }
        if(listaDeAmigo.includes(campo)){ // verificar se esse nome ja existia no arrray
                alert('Este nome ja foi adicionado');
                return;
                
        }

        listaDeAmigo.push(campo);  // adiciona o nome no array
        atualizarLista();
        limpar(); 
        

        
}

function atualizarLista(){ // atualiza a lista que aparece no HTML

    lista.innerHTML = "";

    for(let i = 0; i < listaDeAmigo.length; i++){ // percorre o array

            const attLista = document.createElement("li"); // cria a lista
            attLista.textContent = listaDeAmigo[i];
            lista.appendChild(attLista);
    }
}

function sortearAmigo(){ // sortear o nome

        if(listaDeAmigo.length !== 0){ // verificar se existe nomes no array

        const sorteio = Math.floor((Math.random() * listaDeAmigo.length)); //sortear o nome com base nos indices do array
        const resultadoSorteio = listaDeAmigo[sorteio]; // recupera o nome sorteado
        const removerNome = listaDeAmigo.indexOf(resultadoSorteio); // busca o indice do nome sorteado

        resultado.innerHTML = `O vencedor do sorteio é ${resultadoSorteio}`; // imprime na tela o nome sorteado

        listaDeAmigo.splice(removerNome, 1); //remove o amigo sorteado da lista 

        atualizarLista();   // atualiza a lista exibida na tela  
        }
else{
        
        lista.innerHTML = "Adicione nomes para que o sorteio aconteça";     // caso a lista esteja pura
}
}

