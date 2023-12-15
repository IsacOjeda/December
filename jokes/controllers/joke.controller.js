const Joke = require("../models/joke.model")
const mongoose = require('mongoose');

const joke = {
    findAllJokes: (req,res) => {
        Joke.find()
            .then((data) => {
                    console.log(data);
                    res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    create: (req,res) => {
        const newJoke = req.body;
        Joke.create(newJoke)
            .then((data) => {
                    console.log(data);
                    res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    },
    findOneJoke: (req,res) => {
        Joke.findOne({_id: req.params.id})
            .then(data => {
                    console.log(data);
                    res.json(data);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            });
    },
    updateJoke: (req,res) =>{
        Joke.findOneAndUpdate({_id: req.params.id},req.body,
            {new:true, runValidators:true}
            )
            .then(data => {
                res.json({data})
            })
            .catch((err) => {
                res.json(err)
            });
    },
    deleteJoke:(req,res) => {
        Joke.deleteOne({_id: req.params.id})
            .then(data => {
                res.json({data})
            })
            .catch((err) => {
                res.json(err)

            });
    }

}
module.exports = joke;