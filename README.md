### **Descrição**

Essa aplicação web simples permite aos fãs do BTS pesquisar por seus membros favoritos. Ao digitar o nome de um membro no campo de pesquisa, a aplicação retorna resultados relevantes, 
exibindo informações como nome, descrição e um link para mais detalhes.

### **Funcionalidades**

* **Pesquisa:** Permite realizar buscas por nome, descrição ou tags relacionadas aos membros.
* **Resultados dinâmicos:** A lista de resultados é atualizada em tempo real conforme o usuário digita.
* **Links externos:** Cada resultado possui um link que direciona para uma página externa com mais informações sobre o membro.

### **Tecnologias Utilizadas**

* **HTML:** Estrutura básica da página.
* **CSS:** Estilização da interface do usuário.
* **JavaScript:** Lógica da aplicação, incluindo a função de pesquisa e a renderização dos resultados.

### **Como funciona**

1. **Interface do usuário:** O usuário interage com a aplicação através de um campo de pesquisa e um botão.
2. **Evento de pesquisa:** Ao clicar no botão ou pressionar Enter, a função `pesquisar()` é acionada.
3. **Processamento da pesquisa:** A função coleta o termo de pesquisa, converte-o para minúsculas e itera sobre um conjunto de dados pré-definidos.
4. **Filtragem dos resultados:** Os dados são filtrados com base na presença do termo de pesquisa em seus campos (título, descrição e tags).
5. **Renderização dos resultados:** Os resultados encontrados são formatados em HTML e inseridos na seção de resultados da página.

### **Estrutura de arquivos**

* **index.html:** Arquivo principal da aplicação, contendo a estrutura HTML da página.
* **style.css:** Arquivo CSS responsável por estilizar a página.
* **dados.js:** Arquivo JavaScript contendo um array de objetos com informações sobre os membros do BTS (exemplo: nome, descrição, link).
* **app.js:** Arquivo JavaScript contendo a lógica da aplicação, incluindo a função de pesquisa.


### **Observações**

* **Conjunto de dados:** O arquivo `dados.js` pode ser expandido para incluir mais membros e informações detalhadas.
* **Personalização:** A aparência da aplicação pode ser personalizada editando o arquivo `style.css`.
* **Funcionalidades adicionais:** A aplicação pode ser aprimorada com novas funcionalidades, como ordenação dos resultados, filtros adicionais e integração com APIs externas.
