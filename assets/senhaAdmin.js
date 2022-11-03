var password = "admin123"

const admin = document.querySelector("#admin")

admin.addEventListener("click", ()=>{
    var x = prompt("Senha do administrador","");
    if (x == password) {
        window.location = "admin";
}else {
 alert("SEU COMPUTADOR DESLIGARÁ EM 10 SEGUNDOS")
}

})

