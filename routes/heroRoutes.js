const router = require("express").Router();
const Hero = require ('../src/data/models/Hero');


router.get('/', async (req, res) => {
    try {
        const hero = await Hero.find();
        res.status(200).json(hero);
    } catch (e) {
        res.status(500).json({error: error});
    }
})

router.post("/", async (req, res) => {
    const {
        name,
        password,
        confirm_password,
        email,
        cnpj,
        type_of_person,
        approved,
    } = req.body;

    if (!name) {
        res.status(422).json({error: 'Name is required'})
    }

    if (!cnpj) {
        res.status(422).json({error: 'cnpj não inserido'});
    }

    const hero = {
        name,
        password,
        confirm_password,
        email,
        cnpj,
        type_of_person,
        approved,
    }

    try {
        await Hero.create(hero);
        res.status(201).json({message: 'Hero Cadastrado'});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }
})

module.exports = router;