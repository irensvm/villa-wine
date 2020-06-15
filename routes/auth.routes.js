const express = require('express')
const router  = express.Router()
const bcryptjs = require('bcryptjs')
const User = require('../models/User.model')
const saltRounds = 10


/* LOGIN */
router.get('/login', (req, res, next) => {
  res.render('auth/login');
});

router.post('/login', (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  }
)


/* CREATE ACCOUNT  */

router.get('/createaccount', (req, res, next) => {
  res.render('auth/createaccount');
});

router.post('/createaccount', (req, res, next) => {
  const {
    email,
    password
  } = req.body;

  if (!email || !password) {
    res.render('auth/createaccount', { errorMessage: 'All fields are mandatory. Please provide your email and password.' });
    return;
  }

  const regex = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;
  if (!regex.test(password)) {
    res
      .status(500)
      .render('auth/createaccount', { errorMessage: 'Password needs to have at least 6 chars and must contain at least one number, one lowercase and one uppercase letter.' });
    return;
  }

  bcryptjs
    .genSalt(saltRounds)
    .then(salt => bcryptjs.hash(password, salt))
    .then(hashedPassword => {
      return User.create({
        email,
        passwordHash: hashedPassword
      });
    })

    .then(userFromDB => {
      console.log('Newly created user is: ', userFromDB);
      res.redirect('/index');
    })
    .catch(error => {
      if (error instanceof mongoose.Error.ValidationError) {
        res.status(500).render('auth/createaccount', { errorMessage: error.message });
      } else if (error.code === 11000) {
        res.status(500).render('auth/createaccount', {
          errorMessage: 'Email need to be unique. Either username or email is already used.'
        });
      } else {
        next(error);
      }
    });
});

module.exports = router;