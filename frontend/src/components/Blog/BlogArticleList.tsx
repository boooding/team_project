import React, {useEffect, useState} from "react"
import "./BlogArticle.css"
import 'markdown-navbar/dist/navbar.css';

// @ts-ignore
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import BlogArticleListContent from "./BlogArticleListContent";
import {isAuth} from "../../commonFunction/auth";
import {UserJwt} from "../../store/models/authority";
import axios from "axios";
import {API} from "../../config";

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

interface IArticleList {
    ArticleList: any
}

const BlogArticleList: React.FC<IArticleList> = () => {
    const [data, setData ] = useState()

    const { user, token } = isAuth() as UserJwt;

    async function getArticleList() {
        try {
            let response = await axios.get(`${API}/blogs/${user._id}`)
            // @ts-ignore
            setArticleList(response)
        } catch (e) {
            console.log(e);
        }
    }

    return <>
        <div></div>
    </>
}
export default BlogArticleList;