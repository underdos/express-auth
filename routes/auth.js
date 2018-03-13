var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/login', function(req, res, next) {
  let result = {
    status: 0,
    message: 'Success',
    data: {
      name: 'Kusnadi',
      email: 'kus.underdos@gmail.com',
      phone: '085780621341'
    }
  }

  res.send(result);
})


module.exports = router;