import React from "react"
import Layout from "../core/Layout";
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
                width: "540px",
                float: "right"
            }}>
                <BlogArticle/>
            </div>
        </div>
    </Layout>
}
export default Blog;