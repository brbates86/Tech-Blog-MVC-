const { User } = require('../models');

const userData = [
    {
        username: "mattybkc",
        twitter: "mattbkc",
        github: "mattbkc",
        email: "matty_b@gmail.com",
        password: "p@ssword1"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "ully_saxman",
        twitter: "ullysax",
        github: "ullyR",
        email: "ully_r@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_n",
        twitter: "leenorris",
        github: "leenorris",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "realclairebates",
        twitter: "cmkmkay",
        github: "cmbates",
        email: "rcb_21@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "brbates86",
        twitter: "bbates86",
        github: "brbates86",
        email: "brettbates86@gmail.com",
        password: "p@ssword6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
