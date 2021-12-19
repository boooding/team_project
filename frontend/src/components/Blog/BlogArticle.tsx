import "./BlogArticle.css"
import BlogArticleContent from "./BlogArticleContent";

const BlogArticle  = () => {

    return <div className="module-box">
        <div className="module-title divCenter">
            Article
        </div>
        <BlogArticleContent/>
        <div className="clear">

        </div>
    </div>
}

export default BlogArticle;