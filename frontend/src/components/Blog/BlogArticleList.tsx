import React, {useEffect, useState} from "react"
import "./BlogArticle.css"
import {isAuth} from "../../commonFunction/auth";
import {UserJwt} from "../../store/models/authority";
import axios from "axios";
import {API} from "../../config";
import {CalendarOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Divider, Modal} from "antd";

import 'markdown-navbar/dist/navbar.css';

// @ts-ignore
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import BlogArticleListContent from "./BlogArticleListContent";

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

const BlogArticleList: React.FC<IArticleList> = ({ArticleList}) => {
    let data = [ "61a714ebc6f43d0ba0d8e948","61a58944796f578c31d68358",]

    // @ts-ignore
    // const { user, token } = isAuth() as UserJwt;
    // useEffect(() => {
    //     getArticle();
    // }, []);
    //
    // async function getArticle() {
    //     try {
    //         let response = await axios.get(`${API}/blogs/${user._id}`)
    //         // @ts-ignore
    //         setArticleList(response)
    //     } catch (e) {
    //         console.log(e);
    //     }
    // }

    return <>
        {data.map((value, index) => {
            return <BlogArticleListContent key={value + index} value={value}/>
        }
        )}
    </>






}
export default BlogArticleList;