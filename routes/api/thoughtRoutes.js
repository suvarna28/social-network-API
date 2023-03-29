const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
  addThoughtReaction,
  removeThoughtReaction,
} = require('../../controllers/thoughtController');

// '/api/thoughts/' route to get all thoughts and create a single thought
router.route('/').get(getThoughts).post(createThought);

// '/api/thoughts/:thoughtId' route to get a single thought, update a thought, and delete a thought
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

// '/api/thoughts/:thoughtId/reactions' route to create a thought reaction
router.route('/:thoughtId/reactions').post(addThoughtReaction);

// '/api/thoughts/:thoughtId/reactions/:reactionId' route to delete a thought reaction
router.route('/:thoughtId/reactions/:reactionId').delete(removeThoughtReaction);

module.exports = router;
