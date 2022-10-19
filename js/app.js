// 
function changeLogin()
{    
    let texto = document.querySelector("#btnLogin").value;

    if(texto == "Login")
        document.querySelector("#btnLogin").value = "Logout";
    else
        document.querySelector("#btnLogin").value = "Login";
}

// Elimina elemento
function ocultar(boton){
    boton.remove();
}

// Cambia Texto
function changeText(){
    alert("Ninja was liked");
}


const elemento = document.querySelector("#btnLogin");

if(elemento){
    elemento.addEventListener("click", changeLogin);
}
