var express = require('express');
var router = express.Router();
const taskRouter = require('./task.route')
/* GET home page. */
// router.get('/api', function(req, res, next) {
//   res.json({'users':['userOne', 'userTwo']})
// });

router.use('/', taskRouter)

module.exports = router;
