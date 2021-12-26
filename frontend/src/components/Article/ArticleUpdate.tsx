import React, {useEffect, useState} from 'react';
import { Row, Col ,Input, Select ,Button ,DatePicker } from 'antd'
import './ArticleEdition.css'
import marked from 'marked';
import {isAuth} from "../../commonFunction/auth";
import {UserJwt} from "../../store/models/authority";
import axios from "axios";
import {API} from "../../config";
import ReactDOM from "react-dom";
const { TextArea } = Input

const ArticleUpdate  = (props) => {
    let url = window.location.href;
    let idIndex = url.lastIndexOf('\/')
    let articleId = url.substring(idIndex+1, url.length)

    // use hooks to set title, article markdown introduction content,article markdown content,
    const [articleTitle, setArticleTitle] = useState<string>("")
    const [articleIntroductionMarkdownContent, setArticleIntroductionMarkdownContent] = useState<string>("")
    const [articleMarkdownContent, setArticleMarkdownContent] = useState<string>("");

    // use hooks to set article markdown introduction content's and article markdown content's display
    const [articleContentPreview, setArticleContentPreview] = useState("Preview")
    const [articleContentIntroductionPreview, setArticleContentIntroductionPreview] = useState("Preview")

    // get the user to get Id and token
    const { user, token } = isAuth() as UserJwt;

    async function getArticle() {
        try {
            let response = await axios.get(`${API}/blogs/articles/${articleId}`)
            let data = response.data;
            console.log(data)
            setArticleTitle(data.title);
            setArticleMarkdownContent(data.content);
            let html1 = marked(articleMarkdownContent)
            setArticleContentPreview(html1)

            setArticleIntroductionMarkdownContent(data.introduction);
            let html2 = marked(articleIntroductionMarkdownContent)
            setArticleContentIntroductionPreview(html2)
            console.log("here")
        } catch (e) {
            console.log(e)
        }
    }
    useEffect(() => {
        getArticle().then(() => {
        });
    }, [])

    async function addArticle() {
        if (!(articleTitle && articleIntroductionMarkdownContent && articleMarkdownContent)) {
            alert("Please fill Title, Content and Introduction")
        }
        try {
            let response = await axios.patch(`${API}/blogs/${user._id}/${articleId}`, {
                    title: articleTitle,
                    introduction: articleIntroductionMarkdownContent,
                    content: articleMarkdownContent
                }, {
                    headers: {
                        "Authorization": `Bearer ${token}`
                    }
                }
            )
            if(response.data == "OK") {
                alert("success");
                window.location.href = `http://localhost:3000/#/article`
            }
        } catch (e: any) {
            console.log(e.response.data.message);
        }

    }

    const changeContent = (e)=>{
        setArticleMarkdownContent(e.target.value)
        let html = marked(e.target.value)
        setArticleContentPreview(html)
    }

    const changeIntroduce = (e)=>{
        setArticleIntroductionMarkdownContent(e.target.value)
        let html = marked(e.target.value)
        setArticleContentIntroductionPreview(html)
    }

    const changeTitle = (e) => {
        setArticleTitle(e.target.value)
    }

    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });

    return <div>
        <Row gutter={5}>
            <Col span={18}>
                <Row gutter={10} >
                    <Col span={20}>
                        <Input
                            placeholder="Article Title"
                            size="large"
                            onChange={changeTitle}
                            value={articleTitle}
                        />
                    </Col>
                </Row>
                <br/>
                <Row gutter={10} >
                    <Col span={12}>
                        <TextArea
                            className="markdown-content"
                            rows={35}
                            placeholder="Article Content"
                            onChange={changeContent}
                            id="Content"
                            value={articleMarkdownContent}
                        />
                    </Col>
                    <Col span={12}>
                        <div
                            className="show-html"
                            dangerouslySetInnerHTML={{__html: articleContentPreview}}
                            placeholder="Article Content Preview"
                        >
                        </div>

                    </Col>
                </Row>
            </Col>
            <Col span={6}>
                <Row>
                    <Col span={24}>
                        <Button
                            type="primary"
                            size="large"
                            onClick={addArticle}
                        >Post Article</Button>
                        <br/>
                    </Col>
                    <Col span={24}>
                        <br/>
                        <TextArea
                            rows={4}
                            placeholder="Article Introduction"
                            onChange={changeIntroduce}
                            id="Introduction"
                            value={articleIntroductionMarkdownContent}
                        />
                        <br/><br/>
                        <div
                            className="introduce-html"
                            dangerouslySetInnerHTML={{__html: articleContentIntroductionPreview}}
                        >
                        </div>
                    </Col>
                </Row>


            </Col>
        </Row>
    </div>
}
export default ArticleUpdate;