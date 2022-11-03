const senha = document.querySelector("#senha")
const senha2 = document.querySelector("#senha2")

function comparar(){
    if(senha.value != senha2.value){
        senha2.setCustomValidity("A senha não confere")
    }else{
        senha2.setCustomValidity('')
    }
}

senha.onchange = comparar
senha2.onkeyup = comparar