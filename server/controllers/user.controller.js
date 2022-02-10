const UserService = require('../services/user.service');

exports.createUser = async (req, res) => {
    try {
        const resData = await UserService.createUser(
            req.body,
            req.get('user-agent')
        );
        console.log(resData);
        res.status(201).send(resData);
    } catch (e) {
        console.error(e.message);
        res.status(400).send(e.message);
    }
};

exports.loginUser = async (req, res) => {
    try {
        const resData = await UserService.loginUser(
            req.body.name,
            req.body.password,
            req.get('user-agent')
        );
        res.send(resData);
    } catch (e) {
        res.status(400).send(e.message);
    }
};

exports.logoutUser = async (req, res) => {
    try {
        await UserService.logoutUser(req.user);

        res.send();
    } catch (e) {
        res.status(500).send(e.message);
    }
};

exports.logoutAllDevices = async (req, res) => {
    try {
        await UserService.logoutAllDevices(req.user);
        res.send();
    } catch (e) {
        res.status(500).send(e.message);
    }
};

exports.getAuthUser = async (req, res) => {
    res.send(req.user);
};

exports.getUserById = async (req, res) => {
    try {
        const user = await UserService.getUserById(req.params.id);
        res.send(user);
    } catch (e) {
        res.status(404).send(e.message);
    }
};

exports.updateAuthUser = async (req, res) => {
    try {
        const resData = await UserService.updateAuthUser(
            req.user,
            req.body,
            req.get('user-agent')
        );
        res.send(resData);
    } catch (e) {
        res.status(400).send(e.message);
    }
};

exports.updateUserFavorites = async (req, res) => {
    try {
        const resData = await UserService.updateUserFavorites(
            req.user,
            req.body,
            req.params.action
        );
        res.send(resData);
    } catch (e) {
        res.status(400).send(e.message);
    }
};

exports.deleteAuthUser = async (req, res) => {
    try {
        await req.user.remove(); //todo: test this!!!
        res.send(req.user);
    } catch (e) {
        res.status(500).send(e.message);
    }
};
