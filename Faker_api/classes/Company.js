const { faker } = require("@faker-js/faker");

class Company{
    constructor(){
        this.id = faker.string.uuid();
        this.companyName = faker.company.name(); 
        this.address =  faker.location.streetAddress();
        this.street = faker.location.street();
        this.city =  faker.location.city();
        this.zipCode = faker.location.zipCode();
        this.country = faker.location.country();

    }
}
module.exports = Company;