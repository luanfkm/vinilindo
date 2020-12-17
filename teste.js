
function validar() {
    let nome = document.getElementById("txt_nome").value;
    let idade = document.getElementById("txt_idade").value;
    console.log(nome);
    console.log(idade);
}


function validarNome(nome) {
    if(nome == null || nome == undefined || nome == '' ) {
        console.log("fiadaputa, escreve qualquer nome");
    }
}

function validarIdade(idade) {
    
}