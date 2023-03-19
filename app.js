const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
const Employee = require('./models/employee');
const Department = require('./models/department');
const notFoundController = require('./controllers/not-found');

// routes
const employeeRoutes = require('./routes/employee');
const departmentRoutes = require('./routes/department');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/employee', employeeRoutes);
app.use('/department', departmentRoutes);

// app.use(notFoundController.getNotFound);

app.get('/', (req, res, next) => {
  res.render('index', {
    pageTitle: 'CRUD',
    path: '/',
  });
});

// relations
// Employee.hasOne(Department);
Employee.belongsTo(Department);
Department.hasMany(Employee);

sequelize
  // .sync({ force: true })
  .sync()
  .then(result => {
    app.listen(3000);
  })
  .catch(err => {
    console.log(err);
  });
