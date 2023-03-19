const express = require('express');
const EmployeeController = require('../controllers/employee');
const router = express.Router();

// Get
router.get('/add-employee', EmployeeController.getAddEmployee);
router.get('/show-employee', EmployeeController.getAllEmployees);
router.get('/edit-employee/:id', EmployeeController.getEditEmployee);
router.get('/delete/:id', EmployeeController.deleteEmployee);

// Post
router.post('/add-employee', EmployeeController.postAddEmployee);
router.post('/edit-employee', EmployeeController.postEditEmployee);

module.exports = router;
