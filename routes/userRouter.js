const User = require('../models/user');
const bcrypt = require('bcrypt');

const usersRouter = require('express').Router();

usersRouter.get('/', async (req, res) => {
  const data = await User.find({});
  console.log(data);
  return res.status(200).json(data);
});

usersRouter.post('/', async (req, res) => {
  const { username, password, notes } = req.body;
  const existingUser = await User.findOne({ username });
  if (existingUser)
    return res.status(400).json({ error: 'user already exists' });

  const saltRounds = 10;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const newUser = new User({
    username,
    passwordHash: hashedPassword,
    notes: [],
  });

  const savedUser = newUser.save();
  return res.status(201).json(savedUser);
});

module.exports = usersRouter;
