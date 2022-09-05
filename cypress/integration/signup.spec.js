import signup from "../pages/SignupPage";
import signupFactory from "../factories/SignupFactory";

describe("Signup", function () {
  //   beforeEach(function () {
  //     cy.fixture("deliver").then((d) => {
  //       this.deliver = d;
  //     });
  //   });

  it("User should be deliver", function () {
    var deliver = signupFactory.deliver();

    signup.go();
    signup.fillForm(deliver);
    signup.submit();

    const expectedMessage =
      "Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.";
    signup.modelContentShouldBe(expectedMessage);
  });

  it("invalid CPF", function () {
    var deliver = signupFactory.deliver();

    deliver.cpf = "a12387469852aa";

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! CPF inválido");
  });

  it("invalid email", function () {
    var deliver = signupFactory.deliver();

    deliver.email = "joao.com.br";

    signup.go();
    signup.fillForm(deliver);
    signup.submit();
    signup.alertMessageShouldBe("Oops! Email com formato inválido.");
  });

  context("Required fields", function () {
    const messages = [
      { field: "name", output: "É necessário informar o nome" },
      { field: "cpf", output: "É necessário informar o CPF" },
      { field: "email", output: "É necessário informar o email" },
      { field: "postalcode", output: "É necessário informar o CEP" },
      { field: "number", output: "É necessário informar o número do endereço" },
      { field: "delivery_method", output: "Selecione o método de entrega" },
      { field: "cnh", output: "Adicione uma foto da sua CNH" },
    ];

    before(function () {
      signup.go();
      signup.submit();
    });

    messages.forEach(function (msg) {
      it(`${msg.field} is required`, function () {
        signup.alertMessageShouldBe(msg.output);
      });
    });
  });

  // it("Required fields", function () {
  //   signup.go();
  //   signup.submit();

  //   signup.alertMessageShouldBe("É necessário informar o nome");
  //   signup.alertMessageShouldBe("É necessário informar o CPF");
  //   signup.alertMessageShouldBe("É necessário informar o email");
  //   signup.alertMessageShouldBe("É necessário informar o CEP");
  //   signup.alertMessageShouldBe("É necessário informar o número do endereço");
  //   signup.alertMessageShouldBe("Selecione o método de entrega");
  //   signup.alertMessageShouldBe("Adicione uma foto da sua CNH");
  // });
});

// Ideia do Antonio para ficar mais performatico

// signup.fillForm([
//   { input: "fullName", name: "matheus A", key: "name" },
//   { input: "cpf", name: "19656965423", key: "name" },
//   { input: "email", name: "mail", key: "name" },
// ]);
