const div_result = document.querySelector('.result')
let valor = 0
div_result.textContent = `Cliquei ${valor}`

// function soma(){
//     valor+= 1
//     div_result.textContent = `Cliquei ${valor}`
//     console.log(valor)
// }

// function sub(){
//     valor -= 1
//     div_result.textContent = `Cliquei ${valor}`
// }

const add = document.querySelector("#add")
const del = document.querySelector("#del")

add.addEventListener('click',()=>{
    valor+=1
    div_result.textContent = `Cliquei ${valor} x`
})

del.addEventListener('click',(e)=>{
    if(valor > 0){
        valor-=1
        div_result.textContent = `Cliquei ${valor}`
    }
    
})