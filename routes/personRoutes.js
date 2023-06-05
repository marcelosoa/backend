const router = require("express").Router();
const Person = require("../src/data/models/Person");

// api routes
// GET
router.get("/", async (req, res) => {
  try {
    const people = await Person.find();
    res.status(200).json(people);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// GET BY ID
router.get("/:id", async (req, res) => {
  // extract data of request
  const id = req.params.id;

  try {
    const person = await Person.findOne({ _id: id });
    if (!person) {
      res.status(422).json({ message: "id not found" });
      return;
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// PUT
router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const {
    name,
    password,
    confirm_password,
    email,
    cpf,
    type_of_person,
    approved,
  } = req.body;

  const person = {
    name,
    password,
    confirm_password,
    email,
    cpf,
    type_of_person,
    approved,
  };

  try {
    const updatePerson = await Person.updateOne({ _id: id }, person);
    if (updatePerson.matchedCount === 0) {
      res.status(422).json({ message: "id not found" });
      return;
    }
    res.status(200).json(person);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// POST
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
    res.status(422).json({ error: "Name is required" });
  }

  const person = {
    name,
    password,
    confirm_password,
    email,
    cpf,
    type_of_person,
    approved,
  };
  // create

  try {
    await Person.create(person);
    res.status(201).json({ message: "User Added" });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// DELETE
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const person = await Person.findOne({ _id: id });
  if (!person) {
    res.status(422).json({ message: "id not found" });
    return;
  }
  try {
    await Person.deleteOne({_id: id})
    res.status(200).json({message: 'Usuário removido com sucesso'});
  } catch (error) {

  }
});

module.exports = router;
