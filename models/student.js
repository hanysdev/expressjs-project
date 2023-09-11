const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Student = sequelize.define('student', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dateOfBirth: {
        type: Sequelize.DATE,
        allowNull: false
    },
    gender: {
        type: Sequelize.STRING,
        allowNull: false
    },
    emailAddress: {
        type: Sequelize.STRING,
        allowNull: false
    },
    phoneNumber: {
        type: Sequelize.STRING,
        allowNull: false
    },
    address: {
        type: Sequelize.STRING,
        allowNull: false
    },
    enrollmentDate: {
        type: Sequelize.DATE,
        allowNull: false
    },
    programOfStudy: {
        type: Sequelize.STRING,
        allowNull: false
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false
    },
    studentPhoto: {
        type: Sequelize.BLOB('long'),
        allowNull: true
    }
});

sequelize.sync();

module.exports = Student;