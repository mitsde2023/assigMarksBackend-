const { Sequelize } = require('sequelize');

// const sequelize = new Sequelize('Marks', 'root', 'YourRootPassword', {
//   host: 'localhost',
//   dialect: 'mysql', 
// });

const sequelize = new Sequelize('AssigMarks', 'dbmasteruser', 'WuRd#t[Q[Q807yyh[c:f3[Hh)6{u?V-b',
    {
        host: 'ls-5a08001694d3b562476cc3ff204a6d8b4ad971f9.caavigzlesxe.ap-south-1.rds.amazonaws.com',
        dialect: 'mysql',
    });

// const sequelize = new Sequelize('mitsde_db', 'dbmasteruser', '%hy3])k$<${G:rY0[k:]>QcOZ;JUvK-C', {
//   host: '127.0.0.1',
//   dialect: 'mysql',
//   port:'3306'
// });

module.exports = sequelize;
