import React from "react"
import Layout from "./Layout";
import BlogInfo from "./BlogInfo";
import BlogArticle from "./BlogArticle";

const Blog  = () => {
    return <Layout title="blog" subTitle="blog">
        <div style={{
            marginTop: "30px"
        }}>
            <div style={{
                width: "250px",
                float: "left"
            }}>
                <BlogInfo/>
            </div>
            <div style={{
                width: "520px",
                float: "right"
            }}>
                <BlogArticle/>
            </div>
        </div>
    </Layout>
}
export default Blog;