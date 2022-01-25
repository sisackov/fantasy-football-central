const jwt = require('jsonwebtoken');
const User = require('../models/user');

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '');
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({
            _id: decoded._id,
            'tokens.token': token, //this will check for the token in the user's tokens array
        });

        if (!user) {
            throw new Error();
        }

        req.token = token;
        req.user = user; //this is the user that was already authenticated and extracted from the database
        next();
    } catch (e) {
        res.status(401).send({ error: 'Please authenticate.' });
    }
};

module.exports = auth;
