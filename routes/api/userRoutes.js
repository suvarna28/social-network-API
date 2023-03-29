const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  addFriend,
  deleteFriend,
  deleteUser,
} = require('../../controllers/userController');

// '/api/users/' route to get all users and create a single user
router.route('/').get(getUsers).post(createUser);

// '/api/users/:userId' route to get a single user, update a user, and delete a user
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

module.exports = router;
