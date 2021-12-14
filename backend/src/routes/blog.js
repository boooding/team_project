const Router = require('koa-router');
const jwt = require("koa-jwt");
const router = new Router({ prefix: '/blogs' });
const {
    create, checkOwner, readArticleList, readArticleContent
} = require('../controllers/blogs')

const auth = jwt({
    secret: "key"
});

router.post('/:id', auth, checkOwner, create)

router.get('/:id', readArticleList)
router.get('/articles/:id', readArticleContent)
router.delete('/articles/:id')
module.exports = router;