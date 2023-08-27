const jwt = require('jsonwebtoken');
const config = require('config');

const getUserId = (authHeader, callback) => {
    if (!authHeader) {
        return callback(false);
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2) {
        return callback(false);
    }

    const [scheme, token] = parts;

    if (!/^Bearer$/i.test(scheme)) {
        return callback(false);
    }


    jwt.verify(token, process.env.jwtSecret, (err, decoded) => {
        if (err) {
            return callback(false);
        }

        const userId = decoded.userId;
        callback(userId);
    });

};


module.exports = { getUserId };