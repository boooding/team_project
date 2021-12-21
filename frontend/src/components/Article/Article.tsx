import React, {useEffect, useState} from "react"
import LayoutForArticle from "./LayoutForArticle";
import {Col, Menu, Row} from "antd";
import Layout from "../core/Layout";
import MenuItem from "antd/es/menu/MenuItem";
import {Link} from "react-router-dom";
import {UnorderedListOutlined, BlockOutlined} from '@ant-design/icons';
import { Typography } from 'antd';
import {isAuth} from "../../commonFunction/auth";
import {UserJwt} from "../../store/models/authority";
import axios from "axios";
import {API} from "../../config";
import ArticleContent from "../Blog/ArticleContent";
import ArticleContentAdmin from "../Blog/ArticleContentAdmin";

const Article  = () => {
    const { user } = isAuth() as UserJwt
    let articleList1 = [];
    const [article, setArticle] = useState([])
    useEffect(() => {}, [article]);
    async function getArticleContent() {
        try {
            let response = await axios.get(`${API}/blogs/${user._id}`)
            for (let i of response.data) {
                // @ts-ignore
                articleList1.push(i._id)
            }
            setArticle(articleList1)
        } catch (e: any) {
            console.log(e);
        }
    }
    const generateTemplate = (data) => {
        let template = data.map((value) => {
            return <ArticleContentAdmin value={value}/>
        })
        return <div>{template}</div>
    }

    useEffect(() => {
        getArticleContent();
    }, []);
    const articleLinks = () => {
        const {Title} = Typography;
        return  <React.Fragment>
            <Title level={5}>Article links</Title>
            <Menu>
                <MenuItem>
                    <Link to="/article">
                        <UnorderedListOutlined />Article List</Link>
                </MenuItem>
                <MenuItem>
                    <Link to="/edit">
                        <BlockOutlined />New Article</Link>
                </MenuItem>
            </Menu>
        </React.Fragment>
    }


    const articleList = () => {
        return <div>
            {generateTemplate(article)}
        </div>
    }

    return <Layout title="" subTitle="">
        <div style={{
            marginTop:"30px"
        }}>
            <Row gutter={32}>
                <Col span="5">
                    {articleLinks()}
                </Col>
                <Col span="19">
                    {articleList()}
                </Col>
            </Row>
        </div>
    </Layout>
}
export default Article;