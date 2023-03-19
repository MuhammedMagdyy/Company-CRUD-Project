const Department = require('../models/department');

exports.getAddDepartment = (req, res, next) => {
  res.render('department/add-department', {
    pageTitle: 'Add Department',
    path: '/add-department',
  });
};

exports.postAddDepartment = (req, res, next) => {
  const name = req.body.name;
  Department.create({
    name: name,
  })
    .then(result => {
      console.log('Department created');
      res.redirect('/department/show-department');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getAllDepartments = (req, res, next) => {
  Department.findAll()
    .then(departments => {
      res.render('department/show-department', {
        departments: departments,
        pageTitle: 'All Departments',
        path: '/show-departments',
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.getEditDepartment = (req, res, next) => {
  const id = req.params.id;
  Department.findByPk(id)
    .then(department => {
      res.render('department/edit-department', {
        department: department,
        pageTitle: 'Edit Department',
        path: '/edit-department',
      });
    })
    .catch(err => {
      console.log(err);
    });
};

exports.postEditDepartment = (req, res, next) => {
  const id = req.body.id;
  const name = req.body.name;
  Department.findByPk(+id)
    .then(department => {
      department.name = name;
      return department.save();
    })
    .then(result => {
      console.log('Updated Department');
      res.redirect('/department/show-department');
    })
    .catch(err => {
      console.log(err);
    });
};

exports.deleteDepartment = (req, res, next) => {
  const id = req.params.id;
  Department.findByPk(id)
    .then(department => {
      return department.destroy();
    })
    .then(result => {
      console.log('Deleted!');
      res.redirect('/department/show-department');
    })
    .catch(err => console.log(err));
};
