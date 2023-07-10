const router = require('express').Router();
const { User, Post, Comment } = require('../../models');
const { authMiddleware } = require('../../utils/auth');
const { route } = require('./user-routes');

// GET /api/users
router.get('/', (req, res) => {
    // Access our User model and run .findAll() method)
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