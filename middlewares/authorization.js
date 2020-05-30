const { User, Report } = require('../models');

module.exports = {
    authorizeUser: (req, res, next) => {
        const { id } = req.params;

        Report
            .findByPk(id)
            .then(report => {
                if(report) {
                    if(report.UserId === req.uid) {
                        next();
                    } else {
                        throw {
                            msg: 'You dont have permission to do this action',
                            code: 401
                        }
                    }
                } else {
                    throw {
                        msg: `no report with id ${id} found`,
                        code: 400
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }
}