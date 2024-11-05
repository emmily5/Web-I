function validarFormulario() {
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const genero = document.getElementById("genero").value;
    const mensagem = document.getElementById("mensagem").value;
    const senha = document.getElementById("senha").value;

    if (nome === "" || email === "" || genero === "" || senha === "") {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return false;
    }

    alert("Cadastro realizado com sucesso!");
    return true;
}
