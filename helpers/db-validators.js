const Role = require('../models/role');
const User = require('../models/user');


const isValidRole = async (role = '') => {
    const roleExist = await Role.findOne({ role });

    if (!roleExist) {
        throw new Error(`The role ${role} is not in the DB`);
    }
}

// TODO: custom validation email
const isExistEmail = async (email = '') => {
    const emailExist = await User.findOne({ email });
    if (emailExist) {
        throw new Error(`The email ${email} is already`);
    }
}

// TODO: custom validation user ID
const isExistUserId = async (id) => {
    const idExist = await User.findById(id);
    if (!idExist) {
        throw new Error(`The id ${id} does not exist`);
    }
}


module.exports = {
    isValidRole,
    isExistEmail,
    isExistUserId
}