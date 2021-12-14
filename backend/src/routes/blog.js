const Router = require('koa-router');
const jwt = require("koa-jwt");
const router = new Router({ prefix: '/blogs' });
const {
    create,
    checkOwner,
    readArticleList,
    readArticleContent,
    deleteArticle,
    updateArticle
} = require('../controllers/blogs')

const auth = jwt({
    secret: "key"
});

router.post('/:id', auth, checkOwner, create)

router.get('/:id', readArticleList)
router.get('/articles/:id', readArticleContent)
router.delete('/:id/:article',auth, checkOwner, deleteArticle )
router.patch('/:id/:article',auth, checkOwner, updateArticle)

module.exports = router;