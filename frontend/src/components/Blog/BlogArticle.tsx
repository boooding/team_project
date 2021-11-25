import React from "react"
import "./BlogArticle.css"
import {CalendarOutlined, UserOutlined} from "@ant-design/icons";
import {Affix, Button, Divider} from "antd";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

const BlogArticle  = () => {

    return <div className="module-box">

        <div className="module-title divCenter">
            Article
        </div>
        <div className="article-box">
            <div className="article-title">
                Introduction to Scrum
            </div>
            <div className="article-icon">
                <span><CalendarOutlined /> 2019-06-28</span>
                <span><UserOutlined /> Booding</span>
            </div>
            <div className="article-icon">
                <span style={{marginLeft: "10px"}}>A article talk about scrum,A article talk about scrum,A article talk about scrum,A article talk about scrum,A article talk about scrum,A article talk about scrum...</span>
            </div>
            <div>
                <span style={{float: "right"}}>
                    <Button type="link">View details</Button>
                </span>
            </div>


            <Divider/>
            {/*<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>*/}

        </div>
    </div>
}
export default BlogArticle;