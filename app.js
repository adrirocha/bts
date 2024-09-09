/*
  Esta função é responsável por renderizar os resultados da pesquisa na página.
  Itera sobre um array de dados e para cada item, cria um elemento HTML
  com as informações do resultado.
*/
function pesquisar() {
    let section = document.getElementById("resultados-pesquisa"); // Seção onde os resultados serão exibidos
    
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    //Funcionalidade de retornar nenhum membro caso pesquisar com o espaço em branco (vazio)
    //if (campoPesquisa == "") {
    //    section.innerHTML = "<p>Nada foi encontrado</p>"
    //    return
    //}

    campoPesquisa = campoPesquisa.toLowerCase()

    let resultados = ""; // String para armazenar os resultados formatados em HTML
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    for (let dado of dados) { // Itera sobre cada item de dados
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // cria um novo elemento
            resultados += `
            <div class="item-resultado"> 
            <h2>
                <a href="#" target="_blank">${dado.titulo}</a> 
            </h2>
            <p class.descricao-meta">${dado.descricao}</p> 
            <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>
        `;
        }
        
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }
  
    section.innerHTML = resultados; // Atualiza o conteúdo da seção com os resultados
  }