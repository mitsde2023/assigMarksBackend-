const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('Marks', 'root', 'YourRootPassword', {
//   host: 'localhost',
//   dialect: 'mysql', 
// });

const sequelize = new Sequelize('assignment_marks', 'admin', 'Mahesh!!123',
    {
        host: 'mahesh.cznxpwqkznhn.us-east-1.rds.amazonaws.com',
        dialect: 'mysql',
    });

// const sequelize = new Sequelize('mitsde_db', 'dbmasteruser', '%hy3])k$<${G:rY0[k:]>QcOZ;JUvK-C', {
//   host: '127.0.0.1',
//   dialect: 'mysql',
//   port:'3306'
// });

module.exports = sequelize;
