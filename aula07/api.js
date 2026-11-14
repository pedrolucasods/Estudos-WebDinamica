/*
    fazer a requisicao e guardar no localstorage.


    api -> conjunto de regras e protocolos
    fetch -> É uma interface do JS que faz requisições HTTP
    async | await -> utilizado quando faz uma comunicação externa e espera uma Promise 

    GET, POST 9(REQ. HTTP)


    Trabalho:
        - Criar Uma pagina para mostrar todos os posts dentro de uma GRID de 200 por 200.
        - E utilizar um Filter para filtrar a medida digita o buscado
        - Tela para os posts, users 
        - Associar os Posts com os Comments
        - Associar os Comments aos Usuarios
        - Utilizar o Map, filter, reduce
        - Implementar Busca utilizando o Filter por Email e Por ID do Post

        - Um Fetch para cada Endpoint
        - Quando clicar no post, carregar os comentarios.
        - Na tela de post ter a pesquisa por nome
        - Quantidade de itens carregados
*/




export async function getData(){
    try {
        const url = `https://jsonplaceholder.typicode3.com/users`
        const response = await fetch(url)
        if(!response.ok){
            throw new Error("Erro HTTP: "+ response.status)
        }
        const data = await response.json()
        console.log(response.status)
        console.log(data)
    } catch (error) {
        console.log("Algo Deu Errado!: ", error)
    }
    
}

getData()