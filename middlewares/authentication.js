const { User } = require('../models');
const { verifyToken } = require('../helpers/jwt.js');

module.exports = {
    authenticateUser: (req, res, next) => {
        const { token } = req.headers;

        try {
            const decode = verifyToken(token);
            const { id } = decode;

            User
                .findByPk(id)
                .then(user => {
                    if(user) {
                        req.uid = user.id;
                        next();
                    } else {
                        throw {
                            msg: 'You dont have permission to do this action',
                            code: 401
                        }
                    }
                })
                .catch(err => {
                    next(err);
                })
        } catch (err) {
            next(err);
        }
    }
}