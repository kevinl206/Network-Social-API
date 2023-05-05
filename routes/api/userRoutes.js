const router = require('express').Router();
const {
  getUser,
  getSingleUser,
  createUser,
  updateUserById,
  deleteUserById,
  addFriend,
  removeFriend,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getUser).post(createUser);

// /api/users/:userId
router.route('/:userId')
.get(getSingleUser)
.delete(deleteUserById)
.put(updateUserById);

// /api/users/:userId/friends/:friendId POST and DELETE a friend by ID
router.route('/:userId/friends/:friendId')
.post(addFriend)
.delete(removeFriend);

module.exports = router;