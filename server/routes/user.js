const express = require('express');
const User = require('../models/user.model');
const auth = require('../services/auth');
const router = new express.Router();

//will be used to create a new user(sign up)
router.post('/users', async (req, res) => {
    const user = new User(req.body);

    try {
        await user.save();
        const token = await user.generateAuthToken(req.get('user-agent'));
        res.status(201).send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.post('/users/login', async (req, res) => {
    try {
        const user = await User.findByCredentials(
            req.body.name,
            req.body.password
        );
        const token = await user.generateAuthToken(req.get('user-agent'));
        res.send({ user, token });
    } catch (e) {
        res.status(400).send();
    }
});

//user logs out of specific device
router.post('/users/logout', auth, async (req, res) => {
    try {
        req.user.tokens = req.user.tokens.filter((token) => {
            return token.token !== req.token;
        });
        await req.user.save();

        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

//user logs out of all devices
router.post('/users/logoutAll', auth, async (req, res) => {
    try {
        req.user.tokens = [];
        await req.user.save();
        res.send();
    } catch (e) {
        res.status(500).send();
    }
});

//gets the data of the logged user
router.get('/users/auth', auth, async (req, res) => {
    res.send(req.user);
});

router.get('/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            throw new Error();
        }

        res.send(user);
    } catch (e) {
        res.status(404).send();
    }
});

router.patch('/users/auth', auth, async (req, res) => {
    const user = req.user;
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'password'];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        return res.status(400).send({ error: 'Invalid updates!' });
    }

    try {
        updates.forEach((update) => (user[update] = req.body[update]));
        user.tokens = []; //updating a user should log him out from all devices
        const token = await user.generateAuthToken(req.get('user-agent'));
        // await req.user.save();
        res.send({ user, token });
    } catch (e) {
        res.status(400).send(e);
    }
});

router.delete('/users/auth', auth, async (req, res) => {
    try {
        await req.user.remove();
        res.send(req.user);
    } catch (e) {
        res.status(500).send();
    }
});

module.exports = router;
