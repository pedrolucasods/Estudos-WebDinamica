const produtos = [
  { nome: "Notebook Dell Inspiron 15", preco: 3599.90, categoria: "Eletrônicos", estoque: 12 },
  { nome: "Mouse Sem Fio Logitech M170", preco: 79.90, categoria: "Acessórios", estoque: 45 },
  { nome: "Cadeira Gamer ThunderX3", preco: 1299.00, categoria: "Móveis", estoque: 8 },
  { nome: "Monitor LG UltraGear 24''", preco: 949.99, categoria: "Eletrônicos", estoque: 15 },
  { nome: "Teclado Mecânico Redragon Kumara", preco: 219.50, categoria: "Acessórios", estoque: 30 },
  { nome: "Smartphone Samsung Galaxy S23", preco: 3299.00, categoria: "Celulares", estoque: 20 },
  { nome: "Fone de Ouvido Bluetooth JBL Tune 520BT", preco: 249.00, categoria: "Áudio", estoque: 50 },
  { nome: "Cafeteira Expresso Nespresso Essenza", preco: 499.90, categoria: "Eletrodomésticos", estoque: 18 },
  { nome: "Mochila para Notebook Samsonite", preco: 189.90, categoria: "Acessórios", estoque: 25 },
  { nome: "Webcam Full HD Logitech C920s", preco: 429.00, categoria: "Eletrônicos", estoque: 10 }
];

// const produto_baratos = produtos.filter(produto=>produto.preco<100)
// console.log(produto_baratos)


// =================== dobro ===================
const nums = [3,7,2]
const dobros = []
for(const numero of nums){
    dobros.push(numero*2)
}
console.log(dobros)




// map ================= Map opera em um vetor principal e retorna um novo Array com mesma quantidade de elementos
const dobros_map = nums.map(num=>num*2)
console.log(dobros_map)

const listas = produtos.map(p=>p.nome)
console.log(listas)

const comDesconto = produtos.map((p)=>({
    nome:p.nome,
    preco: (p.preco*0.9).toFixed(2)
}))

//localStorage.setItem("Items_com_desconto", JSON.stringify(comDesconto))
console.log(comDesconto)
const x = [2,3,5].map(n=>{n*2}) // undefine pq não está retornando nada no bloco de codigo {}

// [] <- retorno do map








// Foreach ============== Não retorna nada
produtos.forEach(produto=>console.log(`${produto.nome} Custa $${produto.preco}`))

const r = [2,3,4].forEach(n=>n*2) // undefined.







// Filter ============================= Retorna uma nova lista com elementos true
const y = [2,3,4,5,6,7,8].filter(n => n>5)
console.log(y)



// Reduce ============ É um acumulador
const notas = [8,5,9,6]
const soma = notas.reduce((acc,n)=>acc+n,0)
console.log(soma)


const quantidadeEstoque = produtos.reduce((acc,produto)=>acc+produto.estoque,0)
console.log(quantidadeEstoque)

const qtdProdutosQtdMaiorque10 = produtos.filter(p=>p.estoque>10).reduce((acc,produto)=>acc+produto.estoque,0)
console.log(qtdProdutosQtdMaiorque10)

