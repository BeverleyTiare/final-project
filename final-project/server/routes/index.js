const router = require('express').Router();
const { User } = require('../../models');
const { authMiddleware } = require('../../utils/auth');
const { route } = require('./user-routes');
//const { route } = require('./sleep-routes');

// GET /api/users
router.get('/', (req, res) => {
    // Access User model and run.findAll() method)
    User.findAll({
        attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err)
            res.status(500).json(err);
        });
}
);

module.exports = router;