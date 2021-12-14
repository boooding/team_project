const Blog = require('../models/blog')
const User = require('../models/users')
class BlogCtl {
    async readBlog(ctx) {
        ctx.body = await Blog.find({ title: new RegExp(ctx.query.q) })
    }
    async create(ctx) {
        ctx.verifyParams({
            title: { type: 'string', required: true },
            introduction: { type: 'string', required: true },
            content: { type: 'string', required: true }
        })
        const authorId = ctx.params.id
        const author = await User.findById({_id: authorId})
        ctx.request.body.author = author.username;
        const blog = await new Blog(
            ctx.request.body
        ).save()
        await User.findByIdAndUpdate({_id: authorId},{ $push: {"blogList": blog._id}})
        ctx.body = blog;
    }
    async checkOwner(ctx, next) {
        if (ctx.params.id !== ctx.state.user._id) { ctx.throw(403, 'no authority'); }
        await next();
    }
    //
    async readArticleList(ctx) {
        // read user first
        const authorId = ctx.params.id
        const author = await User.findById({_id: authorId})
        // read user's article list
        const articleIdList = author.blogList;
        const articleContent = [];
        for ( let articleId of articleIdList) {
            const article = await Blog.findById({_id: articleId})
            articleContent.splice(0, 0,article)
        }
        ctx.body = articleContent;
    }
    async readArticleContent(ctx) {
        const articleId = ctx.params.id;
        ctx.body = await Blog.findById({_id: articleId});
    }
    async deleteArticle(ctx) {
        console.log(ctx.params)
        await Blog.findByIdAndDelete({_id: ctx.params.article})
        await User.findByIdAndUpdate({_id: ctx.params.id},{$pull: {blogList: ctx.params.article}})
        console.log("success")
    }
    async updateArticle(ctx) {
        ctx.verifyParams({
            title: { type: 'string', required: true },
            introduction: { type: 'string', required: true },
            content: { type: 'string', required: true }
        });
        await Blog.findByIdAndUpdate({_id: ctx.params.article},
            ctx.request.body
        )
        console.log()
    }
}

module.exports = new BlogCtl();