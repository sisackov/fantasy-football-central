const User = require('../models/user.model');

exports.createUser = async (userData, userAgent) => {
    const user = new User(userData);

    await user.save();
    const token = await user.generateAuthToken(userAgent);
    return { user, token };
};

exports.loginUser = async (name, password, userAgent) => {
    // console.log(userAgent);
    const user = await User.findByCredentials(name, password);
    const token = await user.generateAuthToken(userAgent);
    // console.log(token);
    return { user, token };
};

exports.logoutUser = async (user) => {
    user.tokens = user.tokens.filter((token) => {
        return token.token !== token;
    });
    await user.save();
};

exports.logoutAllDevices = async (user) => {
    user.tokens = [];
    await user.save();
};

exports.getUserById = async (id) => {
    const user = await User.findById(id);
    if (!user) {
        throw new Error();
    }
    return user;
};

exports.updateAuthUser = async (user, updatesObj, userAgent) => {
    const updates = Object.keys(updatesObj);
    const allowedUpdates = ['name', 'password'];
    const isValidOperation = updates.every((update) =>
        allowedUpdates.includes(update)
    );

    if (!isValidOperation) {
        throw new Error('Invalid updates!');
    }

    updates.forEach((update) => (user[update] = updatesObj[update]));
    user.tokens = []; //updating a user should log him out from all devices
    const token = await user.generateAuthToken(userAgent);

    return { user, token };
};

exports.updateUserFavorites = async (user, { playerID }, action) => {
    const favorites = user.favorites;
    console.log('favorites', favorites);
    if (action === 'add') {
        favorites.push(playerID);
    } else if (action === 'remove') {
        favorites.splice(favorites.indexOf(playerID), 1);
    }
    console.log('favorites', favorites);
    await user.save();

    return user;
};
