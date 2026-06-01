fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (users) {
    // 2. Mostra todos os dados no console
    console.log(users);

    // 3. Nome do primeiro usuário
    const nomePrimeiro = users[0].name;
    console.log("Nome do primeiro usuário:", nomePrimeiro);

    // 4. Email do segundo usuário
    const emailSegundo = users[1].email;
    console.log("Email do segundo usuário:", emailSegundo);

    // Exibe na página
    document.getElementById("nome").innerHTML =
      "Nome do 1º usuário: <span>" + nomePrimeiro + "</span>";
    document.getElementById("email").innerHTML =
      "Email do 2º usuário: <span>" + emailSegundo + "</span>";
  })
  .catch(function (error) {
    console.error("Erro ao buscar dados:", error);
  });
  