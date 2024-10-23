// iremos declarar duas variavéis, uma para o conteúdo e uma para o input do tipo "search"
// o document.querySelector(''), é utilizado para puxar o primeiro elemento com a classe que fica dentro das "()""
// o ponto antes da classe que está dentro das aspas, serve para identificar as classes do HTML
const conteudo = document.querySelector(".conteudo");
const inputPesquisar = document.querySelector("input[type ='search']");

// criar uma variável(vai ser arrays), vai armazenar os items que eu irei carregar da API

let items = [];
// agora para funcionar a pesquisa iremos criar o evento "oninput", para o campo do tipo search
inputPesquisar.oninput = () => {
  conteudo.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputPesquisar.value.toLowerCase())
  )
  .forEach((item) => addHTML(item));
};

//ira criar um elemento do tipo div , pegar um name do usuario que esta recebendo da API, vai atribuir como InnerHTML e vai adicionar no conteudo
function addHTML(item){
  const div = document.createElement("div");
  div.innerHTML = item;
  conteudo.append(div);
}


// agora iremos utilizar uma API 
fetch("https://jsonplaceholder.typicode.com/users")
  .then((data) => data.json())
  .then((users) => {
    users.forEach((user) => {
        addHTML(user.name);
        items.push(user.name);
    });
  });