var faker = require('faker');
var cpf = require('gerador-validador-cpf')
export default {

  deliver: function() {

    var firstName = faker.name.firstName()
    var lastName = faker.name.lastName()


    var data = {
      fullName: `${firstName} ${lastName}`,
      cpf: cpf.generate(),
      email: faker.internet.email(firstName),
      whatsapp: "32988776655",
      address: {
        postalcode: "29215340",
        street: "Rua Aécio Alves Costa",
        number: "100",
        details: "ap 202",
        district: "Muquiçaba",
        city_uf: "Guarapari/ES",
      },
      delivery_method: "Moto",
      cnh: "cnh-digital.jpg",
    };

    return data;
  },
};
