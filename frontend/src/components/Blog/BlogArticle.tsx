import React, { useState} from "react"
import "./BlogArticle.css"
import {CalendarOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Divider, Modal} from "antd";

import 'markdown-navbar/dist/navbar.css';

// @ts-ignore
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import BlogArticleList from "./BlogArticleList";
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
let markdown = "# Marked\n" +
    "\n" +
    "[![npm](https://badgen.net/npm/v/marked)](https://www.npmjs.com/package/marked)\n" +
    "[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/marked/marked.min.js)](https://cdn.jsdelivr.net/npm/marked/marked.min.js)\n" +
    "[![install size](https://badgen.net/packagephobia/install/marked)](https://packagephobia.now.sh/result?p=marked)\n"
let html = marked(markdown)


const BlogArticle  = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false)
    }
    return <div className="module-box">
        <div className="module-title divCenter">
            Article
        </div>
        {/*<BlogArticleList/>*/}
        <div className="article-box">
            <div className="article-title">
                Introduction to Scrum
            </div>
            <div className="article-icon">
                <span><CalendarOutlined /> 2019-06-28</span>
                <span><UserOutlined /> Booding</span>
            </div>
            <div className="article-icon">
                <span style={{marginLeft: "10px"}}>
                    A article talk about scrum,A article talk about scrum,
                    A article talk about scrum,A article talk about scrum,
                    A article talk about scrum,A article talk about scrum...
                </span>
            </div>
            <div>
                <span style={{float: "right"}}>
                    <Button type="link" onClick={showModal}>View details</Button>
                    {
                        isModalVisible &&
                        <Modal
                            title="Basic Modal"
                            visible={isModalVisible}
                            onCancel={hideModal}
                            destroyOnClose={true}
                            footer={null}
                            width={"800px"}
                        >
                            <div
                                dangerouslySetInnerHTML={{__html: html}}
                            >
                            </div>
                        </Modal>
                    }
                </span>
            </div>
            <Divider/>
        </div>
    </div>
}

export default BlogArticle;