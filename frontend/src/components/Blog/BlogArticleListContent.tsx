import React, {useState} from "react"
import {CalendarOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Divider, Modal} from "antd";
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

const BlogArticleListContent  = (value) => {
    let articleContent;
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [createdAt, setCreatedAt] = useState();
    const [introduction, setIntroduction] = useState();
    const [content, setContent] = useState("");
    const [html, setHtml] = useState("")
    async function getArticleContent() {
        try {
            let response = await axios.get(`${API}/blogs/articles/${value.value}`)
            articleContent = response.data
        } catch (e: any) {
            console.log(e.response.data.message);
        }
    }
    getArticleContent().then(() => {
        setContent(articleContent.content);
        setHtml(marked(content));
        setTitle(articleContent.title);
        setAuthor(articleContent.author);
        setCreatedAt(articleContent.createdAt);
        setIntroduction(articleContent.introduction);
    })

    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const hideModal = () => {
        setIsModalVisible(false)
    }
    return <>
        <div>
            <div className="article-box">
                <div className="article-title">
                    {title}
                </div>
                <div className="article-icon">
                    <span><CalendarOutlined/> {createdAt}</span>
                    <span><UserOutlined/> {author}</span>
                </div>
                <div className="article-icon">
                <span style={{marginLeft: "10px"}}>
                    {introduction}
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
                            {
                                isModalVisible &&
                                <div
                                    dangerouslySetInnerHTML={{__html: html}}
                                >
                                </div>
                            }
                        </Modal>
                    }
                </span>
                </div>
                <Divider/>
            </div>
        </div>
    </>
}
export default BlogArticleListContent;