const express = require('express');
const departmentController = require('../controllers/department');
const router = express.Router();

// GET
router.get('/add-department', departmentController.getAddDepartment);
router.get('/show-department', departmentController.getAllDepartments);
router.get('/edit-department/:id', departmentController.getEditDepartment);

router.get('/delete/:id', departmentController.deleteDepartment);

// POST
router.post('/add-department', departmentController.postAddDepartment);
router.post('/edit-department', departmentController.postEditDepartment);

module.exports = router;
