import React, {useEffect, useState} from "react"
import {CalendarOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Divider, Modal} from "antd";
import axios from "axios";
import {API} from "../../config";
// @ts-ignore
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
import {isAuth} from "../../commonFunction/auth";
import {UserJwt} from "../../store/models/authority";
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

const BlogArticleListContentAdmin  = (value) => {
    let articleContent;
    const [title, setTitle] = useState();
    const [author, setAuthor] = useState();
    const [createdAt, setCreatedAt] = useState();
    const [introduction, setIntroduction] = useState();
    const [content, setContent] = useState("");
    const [html, setHtml] = useState("")
    const [articleId, setArticleId] = useState("")
    async function getArticleContent() {
        try {
            let response = await axios.get(`${API}/blogs/articles/${value.value}`)
            articleContent = response.data
        } catch (e) {
            console.log(e);
        }
    }

    getArticleContent().then(() => {
        setArticleId(articleContent._id)
        setContent(articleContent.content);
        setHtml(marked(content));
        setTitle(articleContent.title);
        setAuthor(articleContent.author);
        // @ts-ignore
        setCreatedAt(transferDate(articleContent.createdAt));
        setIntroduction(articleContent.introduction);
    })
    useEffect(() => {

    },[] )
    const [isModalVisible, setIsModalVisible] = useState(false);
    const showModal = () => {
        setIsModalVisible(true);
    };
    const hideModal = () => {
        setIsModalVisible(false)
    }
    const transferDate = (date: string) => {
        let newDate = new Date(date);
        return newDate.getFullYear() + "-" + ( newDate.getMonth() + 1) + "-" + (newDate.getDate())
    }
    const copyLink = () => {
        navigator.clipboard.writeText("http://localhost:3000/#/article/share/" + articleId).then(() => {
            alert("The link of article has been copied")
        })
    }
    const editArticle = () => {
        window.location.href = `http://localhost:3000/#/update/${articleId}`
    }
    const { user, token } = isAuth() as UserJwt;
    const deleteArticle = () => {
        axios.delete(`${API}/blogs/${user._id}/${articleId}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        }).then(() => {
            alert("success");
            window.location.reload();
        })
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
    <Button type="link" onClick={copyLink}>Share the article</Button>
    <Button type="link" onClick={showModal}>View details</Button>
    <Button type="link" onClick={editArticle}>Edit</Button>
    <Button type="link" onClick={deleteArticle}>Delete</Button>


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
export default BlogArticleListContentAdmin;