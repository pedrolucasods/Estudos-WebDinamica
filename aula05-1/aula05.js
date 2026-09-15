const adicionarItem = ()=>{
    const item = document.getElementById('item')
    if(item.value === ''){
        return
    }
    
    const ul = document.querySelector('#result')
    const novo_elemento = document.createElement('li')
    novo_elemento.textContent = `${item.value}`

    const remover = document.createElement('span')
    remover.textContent = " x"
    remover.style.cursor = "pointer"
    remover.style.color = "red"

    remover.addEventListener('click',()=>{
        novo_elemento.remove()
    })

    novo_elemento.appendChild(remover)
    ul.appendChild(novo_elemento)


    item.value = ''
}

const adicionar = document.querySelector('#adicionar')
adicionar.addEventListener('click',()=>{
    adicionarItem()
})

const item = document.getElementById('item')
item.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        adicionarItem()
    }
})


