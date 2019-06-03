const router = require('express').Router();

const BlogsController = require('../controllers/blogsController');

router.get('/new', BlogsController.new);
router.get('/drafts', BlogsController.drafts);
router.get('/published', BlogsController.published);
router.get('/', BlogsController.index);
router.get('/:id', BlogsController.show);
router.post('/', BlogsController.create);

module.exports = router;