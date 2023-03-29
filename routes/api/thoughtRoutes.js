const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  updateThought,
  deleteThought,
} = require('../../controllers/thoughtController');

// '/api/thoughts/' route to get all thoughts and create a single thought
router.route('/').get(getThoughts).post(createThought);

// '/api/thoughts/:thoughtId' route to get a single thought, update a thought, and delete a thought
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .put(updateThought)
  .delete(deleteThought);

module.exports = router;
