var express = require('express');
var router = express.Router();

var users = [
  {
    id: 1,
    name: 'Andrea',
    email: 'andrea@email.com'
  },
  {
    id: 2,
    name: 'Hazael',
    email: 'hazael@email.com'
  },
  {
    id: 3,
    name: 'Marcos',
    email: 'marcos@email.com'
  }
];

//GET
router.get('/', function(req, res, next) {
  res.json(users);
});

//POST
router.post('/', function(req, res, next) {
  var user = req.body;
  users.push(user);
  res.json(users);
});

//PUT
router.put('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);
  const updatedUser = req.body;

  const userToUpdate = users.find(user => user.id === userId);

  if (userToUpdate) {
    userToUpdate.name = updatedUser.name || userToUpdate.name;
    userToUpdate.email = updatedUser.email || userToUpdate.email;
    res.json(userToUpdate);
  } else {
    res.status(404).json({ message: 'Id no encontrado' });
  }

  res.json(users);
});

//DELETE
router.delete('/:id', function(req, res, next) {
  const userId = parseInt(req.params.id);

  const deletedUser = users.find(user => user.id === userId);
  users = users.filter(user => user.id !== userId);

  if (deletedUser) {
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'Id no encontrado' });
  }

  res.json(users);
});
module.exports = router;
