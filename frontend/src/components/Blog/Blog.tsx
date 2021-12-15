import React, {useEffect, useState} from "react"
import Layout from "../core/Layout";
import BlogInfo from "./BlogInfo";
import BlogArticle from "./BlogArticle";
import BlogArticleList from "./BlogArticleList";


const Blog  = () => {
    return <Layout title="blog" subTitle="blog">
        <div style={{
            marginTop: "40px"
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
                <BlogArticleList  ArticleList={""}/>
            </div>
        </div>

    </Layout>
}
export default Blog;