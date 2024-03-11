const express = require('express');
const router = express.Router();
const taskController = require('../src/app/Controllers/TasksController')

router.use('/getTasks', taskController.getTask)
router.use('/postTask', taskController.postTask)
router.delete('/deleteTask/:id', taskController.deleteTask)
router.put('/updateTask/:id', taskController.updateTask)
module.exports = router;