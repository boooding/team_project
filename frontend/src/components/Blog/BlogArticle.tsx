import "./BlogArticle.css"
import BlogArticleContent from "./BlogArticleContent";
import ArticleContent from "./ArticleContent";

const BlogArticle  = () => {
    let data = "61a714ebc6f43d0ba0d8e948";

    return <div className="module-box">
        <div className="module-title divCenter">
            Article
        </div>
        <BlogArticleContent/>
    </div>
}

export default BlogArticle;