
function validar() {
    let name = document.getElementById("txt_nome").value;
    let age = document.getElementById("txt_idade").value;
    validarIdade(age); //comentario teste
    validarNome(name);
    console.log(name);
    console.log(age);
}


function validarNome(nome) {
    if(nome == null || nome == undefined || nome == '' ) {
        console.log("fiadaputa, escreve qualquer nome");
    } else {
        console.log("blz, escreveu o nome: " + nome)
    }
}

function validarIdade(idade) {
    if (idade == null || idade == undefined || idade == '')
        console.log("Digita a idade casseta");
    else if(idade > 17)
        console.log("É de Maió");
    else
        console.log("É de menó");
};