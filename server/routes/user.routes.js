const express = require('express');
const UserController = require('../controllers/user.controller');
const auth = require('../middleware/auth');
const router = new express.Router();

//will be used to create a new user(sign up)
router.post('/users', UserController.createUser);

router.post('/users/login', UserController.loginUser);

//user logs out of specific device
router.post('/users/logout', auth, UserController.logoutUser);

//user logs out of all devices
router.post('/users/logoutAll', auth, UserController.logoutAllUsers);

//gets the data of the logged user
router.get('/users/auth', auth, UserController.getAuthUser);

router.get('/users/:id', UserController.getUserById);

router.patch('/users/auth', auth, UserController.updateAuthUser);

router.delete('/users/auth', auth, UserController.deleteAuthUser);

router.get('/ping', (__, res) => {
    res.send('pong');
});

module.exports = router;
