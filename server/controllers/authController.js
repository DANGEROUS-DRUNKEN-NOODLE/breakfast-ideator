//useful, but currently unused
const { default: Signup } = require('../../client/components/Signup.jsx');
const User = require('../models/UserModel')

const authController = {}
  

// authController.sessionRequired: (req, res, next) => {
//     if (!req.user) return res.redirect('/auth/login');
//     next();
//   },
// };


authController.createUser = (req, res, next) => {
  // const email = req.body.email;
  // const password = req.body.password;
  // const firstName = req.body.firstName;
  // const lastName = req.body.lastName;
  console.log(req.body)

  if (!email || !password) {
    return next({
      log: 'authController.createUser: ERROR invalid username/password',
      message: {
        err: 'Error: check logs for more details'
      }
    })
  }

  user = User.create({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  })
   .then(() => next())
   .catch(err => next({
    log: `In authController.createUser: ${err}`,
    status: 500,
    message: { err: 'An error occurred' },
  }))
} 


module.exports = authController;
