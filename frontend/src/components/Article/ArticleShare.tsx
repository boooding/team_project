import React, {useEffect, useState} from "react"
import Layout from "../core/Layout";
import { useParams } from "@reach/router"

import axios from "axios";
import {API} from "../../config";
// @ts-ignore
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
const renderer = new marked.Renderer();

marked.setOptions({
    renderer: renderer,
    gfm: true,
    pedantic: false,
    sanitize: false,
    tables: true,
    breaks: false,
    smartLists: true,
    smartypants: false,
    highlight: function (code) {
        return hljs.highlightAuto(code).value;
    }
});

const ArticleShare  = () => {
    let articleId = window.location.href;
    var index = articleId.lastIndexOf('\/');
    articleId = articleId.substring(index + 1, articleId.length)
    let articleContent;
    const [html,setHtml] = useState("");
    async function getArticleContent() {
        try {
            let response = await axios.get(`${API}/blogs/articles/${articleId}`)
            articleContent = response.data;
            console.log(articleContent);
            setHtml(marked(articleContent.content))
        } catch (e) {
            console.log(e);
        }
    }

    getArticleContent();
    useEffect(() => {

    }, [html]);

    return <Layout title="" subTitle="">
        <div style={{
            marginTop: "50px"
        }}/>
        <div
            dangerouslySetInnerHTML={{__html: html}}
        >
        </div>
    </Layout>
}
export default ArticleShare;