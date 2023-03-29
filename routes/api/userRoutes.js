const router = require('express').Router();
const {
  getUsers,
  getSingleUser,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require('../../controllers/userController');

// '/api/users/' route to get all users and create a single user
router.route('/').get(getUsers).post(createUser);

// '/api/users/:userId' route to get a single user, update a user, and delete a user
router
  .route('/:userId')
  .get(getSingleUser)
  .put(updateUser)
  .delete(deleteUser);

// '/api/users/:userId/friends/:friendId' route to add a friend and delete a friend
router
  .route('/:userId/friends/:friendId')
  .post(addFriend)
  .delete(deleteFriend);

module.exports = router;
