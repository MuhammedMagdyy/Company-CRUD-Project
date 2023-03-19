const Employee = require('../models/employee');
const Department = require('../models/department');

exports.getAddEmployee = (req, res, next) => {
  Department.findAll()
    .then(department => {
      res.render('employee/add-employee', {
        pageTitle: 'Add Employee',
        path: '/add-employee',
        departments: department,
      });
    })
    .catch();
};

exports.postAddEmployee = (req, res, next) => {
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const salary = req.body.salary;
  const department = req.body.department;
  Employee.create({
    name: name,
    email: email,
    phone: phone,
    address: address,
    salary: salary,
    departmentId: department,
  })
    .then(result => {
      console.log('Employee created');
      res.redirect('/employee/show-employee');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllEmployees = (req, res, next) => {
  Employee.findAll()
    .then(employees => {
      res.render('employee/show-employee', {
        employees: employees,
        pageTitle: 'Employees',
        path: '/show-employee',
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditEmployee = async (req, res, next) => {
  const id = req.params.id;
  const departments = await Department.findAll();
  Employee.findByPk(id).then(employee => {
    if (!employee) {
      return res.redirect('/');
    }
    res.render('employee/edit-employee', {
      pageTitle: 'Edit Employee',
      path: '/edit-employee',
      employee: employee,
      departments: departments,
    });
  });
};

exports.postEditEmployee = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  const email = req.body.email;
  const phone = req.body.phone;
  const address = req.body.address;
  const salary = req.body.salary;
  const department = req.body.department;
  Employee.findByPk(id)
    .then(employee => {
      employee.name = name;
      employee.email = email;
      employee.phone = phone;
      employee.address = address;
      employee.salary = salary;
      employee.departmentId = department;
      return employee.save();
    })
    .then(result => {
      console.log('Employee updated');
      res.redirect('/employee/show-employee');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteEmployee = (req, res, next) => {
  const id = req.params.id;
  Employee.findByPk(id)
    .then(employee => {
      return employee.destroy();
    })
    .then(result => {
      console.log('Deleted!');
      res.redirect('/employee/show-employee');
    })
    .catch(err => console.log(err));
};
