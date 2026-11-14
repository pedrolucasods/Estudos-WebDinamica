document.addEventListener("DOMContentLoaded",()=>{
    const btn_calular = document.getElementById("calcular")
    btn_calular.addEventListener("click",()=>{
        const valor_forca = document.getElementById("input_forca").value
        const valor_distancia = document.getElementById("input_distancia").value
        if(valor_forca && valor_distancia){
            const resultado = calculo(valor_forca,valor_distancia)
            exibir_resultado(resultado)
        }
    })
})

function calculo(forca,distancia){
    const resultado = forca * distancia
    return resultado
}

function exibir_resultado(resultado){
    const div_resultado = document.getElementById("resultado")
    const span_texto = document.getElementById("text-resultado")
    if(resultado>50){
        div_resultado.classList.add("alerta")
    }
    div_resultado.style.display = "flex"
    span_texto.textContent = resultado
}