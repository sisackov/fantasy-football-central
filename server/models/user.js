const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const Task = require('./task');

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            unique: true,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 7,
            trim: true,
            validate(value) {
                if (value.toLowerCase().includes('password')) {
                    throw new Error('Password cannot contain "password"');
                }
            },
        },
        tokens: [
            //each object will have an id property because it is considered a sub-document
            //tokens is an array to store multiple tokens and allow the user to log in
            //from multiple devices
            {
                token: {
                    type: String,
                    required: true,
                },
                userAgent: {
                    type: String,
                    required: true,
                },
            },
        ],
    },
    {
        timestamps: true,
    }
);

//todo: use this for saving the user's leagues
// userSchema.virtual('tasks', {
//     ref: 'Task',
//     localField: '_id',
//     foreignField: 'owner',
// });

//don't send the password and tokens in JSON response
userSchema.methods.toJSON = function () {
    const user = this;
    const userObject = user.toObject();

    delete userObject.password;
    delete userObject.tokens;

    return userObject;
};

//methods are available on the instance of the model
userSchema.methods.generateAuthToken = async function (userAgent) {
    const user = this;
    const token = jwt.sign(
        { _id: user._id.toString() },
        process.env.JWT_SECRET
    );

    //todo: add device name to the token
    user.tokens = user.tokens.concat({ token, userAgent });
    await user.save();

    return token;
};

//statics are available on the model(instance not needed)
userSchema.statics.findByCredentials = async (name, password) => {
    const user = await User.findOne({ name, password }); //todo: verify that this works or change to email

    if (!user) {
        throw new Error('Unable to login');
    }

    // const isMatch = await bcrypt.compare(password, user.password);

    // if (!isMatch) {
    //     throw new Error('Unable to login');
    // }

    return user;
};

// Hash the plain text password before saving
userSchema.pre('save', async function (next) {
    const user = this;

    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8);
    }

    next();
});

// todo: change to user leagues
// Delete user tasks when user is removed
// userSchema.pre('remove', async function (next) {
//     const user = this;
//     await Task.deleteMany({ owner: user._id });
//     next();
// });

const User = mongoose.model('User', userSchema);

module.exports = User;
