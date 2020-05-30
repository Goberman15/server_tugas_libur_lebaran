const { User, Report, Country } = require('../models');
const { Op } = require("sequelize");
const { generateToken } = require('../helpers/jwt.js');
const { compareHash } = require('../helpers/bcrypt.js');

class Controller {
    static login (req, res, next) {
        const { username, password } = req.body;

        User
            .findOne({
                where: {
                    username
                }
            })
            .then(user => {
                if(user) {
                    const compare = compareHash(password, user.password);
                    if(compare) {
                        let payload = {
                            id: user.id,
                            username: user.username,
                            email: user.email
                        }
                        const token = generateToken(payload);

                        res.status(200).json({
                            token,
                            id: user.id,
                            username: user.username
                        })
                    } else {
                        throw {
                            msg: 'invalid email/password',
                            code: 401
                        } 
                    }
                } else {
                    throw {
                        msg: 'invalid email/password',
                        code: 401
                    }
                }
            })
            .catch(err => {
                next(err);
            })
    }

    static getCountries (req, res, next) {
        const { search } = req.query;
        Country
            .findAll({
                where: {
                    name: {
                        [Op.iLike]: `%${search}%`
                    }
                },
                order: [['cases', 'DESC']]
            })
            .then(countries => {
                res.status(200).json({
                    countries
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static showAllReports (req, res, next) {
        const id = req.uid;

        Report
            .findAll({
                where: {
                    UserId: id
                },
                include: [Country]
            })
            .then(reports => {
                res.status(200).json({
                    reports
                })
            })
    }

    static addReport (req, res, next) {
        const { CountryId, report } = req.body;
        const id = req.uid;

        Report
            .create({
                CountryId,
                report,
                UserId: id
            })
            .then(report => {
                return Report
                    .findByPk(report.id, {
                        include: [Country]
                    })
            })
            .then(report => {
                res.status(200).json({
                    report
                })
            })
            .catch(err => {
                next(err);
            })
    }

    static deleteReport (req, res, next) {
        const { id } = req.params;

        Report
            .destroy({
                where: {
                    id
                }
            })
            .then(() => {
                res.status(200).json({
                    report: 'Successfully delete'
                })
            })
            .catch(err => {
                next(err);
            })
    }
}

module.exports = Controller;
