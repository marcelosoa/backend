const router = require("express").Router();
const User = require('../src/data/models/User');

// get - register user 
router.get('/', async (req, res) => {
    try {
        const user = await User.find();
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({error: error});
    }
});

// get by id

router.get("/:id", async (req, res) => {
    const id = req.params.id;
    try {
        const userId = await User.findOne({ _id: id});
        if (!userId) {
            res.status(422).json({message: 'id not found'});
        } 
        res.status(200).json(userId);
    } catch (e) {
        res.status(500).json({error: error})
    }
})

// post

router.post("/", async (req, res) => {
    const {
        name,
        password,
        confirm_password,
        email,
        cpf,
        type_of_person,
        approved,
    } = req.body;

    if (!name) {
        res.status(422).json({error: 'Name is required'});
    }

    const user = {
        name,
        password,
        confirm_password,
        email,
        cpf,
        type_of_person,
        approved,
    };

    try {
        await User.create(user);
        res.status(201).json({message: 'Usuário criado'});
    } catch (error) {
        console.log(error)
        res.status(500).json({error: error})
    }
});

module.exports = router;
