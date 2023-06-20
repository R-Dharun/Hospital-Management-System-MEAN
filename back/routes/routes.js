var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');

var bookController = require('../src/book/bookController');

var recpController = require('../src/recp/recpController');

var billController = require('../src/bill/billController');

router.route('/user/getAll').get(userController.getDataConntrollerfn);

router.route('/booking/getAll').get(bookController.getDataConntrollerfn);

router.route('/booking/create').post(bookController.createUserControllerFn);

router.route('/user/create').post(userController.createUserControllerFn);

router.route('/user/update/:id').patch(userController.updateUserController);

router.route('/user/delete/:id').delete(userController.deleteUserController);

router.route('/reception/getAll').get(recpController.getDataConntrollerfn);

router.route('/reception/create').post(recpController.createUserControllerFn);

router.route('/reception/update/:id').patch(recpController.updateUserController);

router.route('/reception/delete/:id').delete(recpController.deleteUserController);

router.route('/bill/getAll').get(billController.getDataConntrollerfn);

router.route('/bill/create').post(billController.createUserControllerFn);

router.route('/bill/update/:id').patch(billController.updateUserController);

router.route('/bill/delete/:id').delete(billController.deleteUserController);

module.exports = router; 

