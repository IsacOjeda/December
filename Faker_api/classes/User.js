const { faker } = require("@faker-js/faker");

class User{
    constructor(){
        this.password =  faker.internet.password();
        this.email = faker.internet.exampleEmail();
        this.phoneNumber =  faker.phone.number();
        this.lastName = faker.person.lastName();
        this.firstName = faker.person.firstName();
        this.id = faker.string.uuid();

    }
}
module.exports = User;