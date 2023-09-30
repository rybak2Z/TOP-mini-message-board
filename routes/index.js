const express = require('express');
const router = express.Router();

const messages = [
  {
    text: 'Do you love me?',
    user: 'She',
    added: new Date(),
  },
  {
    text: 'Only partly',
    user: 'Drake',
    added: new Date(),
  },
  {
    text: "I only love my bed and my momma, I'm sorry",
    user: 'Drake',
    added: new Date(),
  },
];

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express', messages });
});

module.exports = router;
