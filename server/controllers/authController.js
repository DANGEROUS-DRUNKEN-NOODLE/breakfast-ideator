//useful, but currently unused
const User = require('../models/UserModel')

const authController = {}
  

// authController.sessionRequired: (req, res, next) => {
//     if (!req.user) return res.redirect('/auth/login');
//     next();
//   },
// };


authController.createUser = (req, res, next) => {
  if (!req.body.email || !req.body.password) {
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
