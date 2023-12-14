const { faker } = require("@faker-js/faker");

class UserCompanies{
    constructor(){
        this.password =  faker.internet.password();
        this.email = faker.internet.exampleEmail();
        this.phoneNumber =  faker.phone.number();
        this.lastName = faker.person.lastName();
        this.firstName = faker.person.firstName();
        this.id = faker.string.uuid();

        this._id = faker.string.uuid();
        this.companyName = faker.company.name(); 
        this.address =  faker.location.streetAddress();
        this.street = faker.location.street();
        this.city =  faker.location.city();
        this.zipCode = faker.location.zipCode();
        this.country = faker.location.country();
    }
}
module.exports = UserCompanies;