const UserService = require('../services/user.service');

exports.createUser = async (req, res) => {
    try {
        const resData = await UserService.createUser(
            req.body,
            req.get('user-agent')
        );
        res.status(201).send(resData);
    } catch (e) {
        console.error(e);
        res.status(400).send(e);
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
        res.status(400).send();
    }
};

exports.logoutUser = async (req, res) => {
    try {
        await UserService.logoutUser(req.user);

        res.send();
    } catch (e) {
        res.status(500).send();
    }
};

exports.logoutAllUsers = async (req, res) => {
    try {
        await UserService.logoutAllUsers(req.user);
        res.send();
    } catch (e) {
        res.status(500).send();
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
        res.status(404).send();
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
        res.status(400).send(e);
    }
};

exports.deleteAuthUser = async (req, res) => {
    try {
        await req.user.remove(); //todo: test this!!!
        res.send(req.user);
    } catch (e) {
        res.status(500).send();
    }
};
