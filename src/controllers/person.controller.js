const db = require("../config/database");
const getPersonByFullnameService = require('../services/person.service');

exports.createPerson = async (req, res) => {
    const { fullname, birth, mother, father } = req.body;
    const person = await getPersonByFullnameService(fullname);
    const existeMother = await getPersonByFullnameService(mother);
    const existeFather= await getPersonByFullnameService(father);
    if (existeMother.length == 0) {
        await db.query(
            "INSERT INTO person (fullname) VALUES ($1)",
            [mother]
        );
    }
    if (existeFather.length == 0) {
        await db.query(
            "INSERT INTO person (fullname) VALUES ($1)",
            [father]
        );
    }
    if (person.length > 0) {
        res.status(200).send({
            message: "La persona ya existe!",
            body: {
                person: { fullname },
                existemother,
                existeFather
            },
        });
    } else {
        await db.query(
            "INSERT INTO person (fullname, birth, mother, father) VALUES ($1, $2, $3, $4)",
            [fullname, birth, mother, father]
        );
    }

    res.status(201).send({
        message: "Person added successfully!",
        body: {
            person: { fullname, birth, mother, fathere },
            existeMother,
            existeFather
        },
    });
};

exports.getAllPerson = async (req, res) => {
    const { rows } = await db.query(
        "SELECT * FROM person",
    );

    res.status(200).send({
        message: "All person!",
        body: {
            rows
        },
    });
};
exports.getPerson = async (req, res) => {
    const idPerson = req.params.id;
    const { rows } = await db.query(
        "SELECT * FROM person WHERE id=$1",
        [idPerson]
    );
    res.status(200).send({
        message: "One person!",
        body: {
            person: rows
        },
    });
};

exports.getPersonName = async (req, res) => {
    const fullname = req.params.name;
    const person = await getPersonByFullnameService(fullname);
    res.status(200).send({
        message: "One person!",
        body: {
            person
        },
    });
};