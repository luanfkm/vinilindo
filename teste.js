
function validar() {
    let nome = document.getElementById("txt_nome").value;
    let idade = document.getElementById("txt_idade").value;
    validarNome(nome);
    console.log(nome);
    console.log(idade);
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