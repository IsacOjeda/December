const express = require("express");
const app = express();
const port = 8000;
const Company = require('./classes/Company');
const User = require('./classes/User');
const UserCompanies = require('./classes/usercompanies');

app.use( express.json() );

app.use( express.urlencoded({ extended: true }) );


app.get("/api", (req, res) => {
    console.log(req);
    res.json( {"message": "this is express"} );
});

app.get("/api/users/new", (req, res) => {
    console.log(req);
    res.json( new User ());
});

app.get("/api/companies/new", (req, res) => {
    console.log(req);
    res.json( new Company());
});

app.get("/api/user/company", (req, res) => {
    console.log(req);
    res.json(new UserCompanies());
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );