import "./BlogArticle.css"

const BlogArticle  = () => {
    const generateTemplate = () => {
        return <div>div1</div>
    }
    return <div className="module-box">
        <div className="module-title divCenter">
            Article
        </div>
        {generateTemplate()}
    </div>
}

export default BlogArticle;