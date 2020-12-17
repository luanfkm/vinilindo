function validar() {

    let name = document.getElementById("txt_nome").value;
    let age = document.getElementById("txt_idade").value;
    validarNome(name); 
    validarIdade(age); 
};

function validarNome(nome) {
    if(nome == null || nome == undefined || nome == '' ) {
        console.log("fiadaputa, escreve qualquer nome");
    } else {
        console.log("blz, vosso nome é: " + nome)
    }
}

function validarIdade(idade) {
    if (idade == null || idade == undefined || idade == '')
        console.log("Digita a idade casseta");
    else if(idade > 17)
        console.log(idade + " anos já pode ser preso");
    else
        console.log(idade + " anos é de menó não pode entrar no site não");
};