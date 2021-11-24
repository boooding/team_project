import React from "react"
import "./BlogArticle.css"
import {CalendarOutlined} from "@ant-design/icons";
import {Divider} from "antd";
import ReactMarkdown from 'react-markdown'

const BlogArticle  = () => {

    return <div className="module-box">
        <div className="module-title divCenter">
            Article
        </div>
        <div>
            <div className="detailed-title">
                React实战视频教程-技术胖Blog开发
            </div>
            <div className="list-icon center">
                <span><CalendarOutlined /> 2019-06-28</span>
            </div>
            <Divider/>
            <ReactMarkdown># Hello, *world*!</ReactMarkdown>

        </div>
    </div>
}
export default BlogArticle;