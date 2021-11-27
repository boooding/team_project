import React, {useEffect, useState} from "react"
import "./BlogArticle.css"
import {CalendarOutlined, UserOutlined} from "@ant-design/icons";
import {Affix, Button, Divider, Modal} from "antd";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

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
                        >
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                            <p>Some contents...</p>
                        </Modal>
                    }


                </span>
            </div>


            <Divider/>
            {/*<ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>*/}

        </div>
    </div>
}
export default BlogArticle;