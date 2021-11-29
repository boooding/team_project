import React from "react"
import LayoutForArticle from "./LayoutForArticle";
import {Col, Menu, Row} from "antd";
import Layout from "../core/Layout";
import MenuItem from "antd/es/menu/MenuItem";
import {Link} from "react-router-dom";
import {UnorderedListOutlined, BlockOutlined} from '@ant-design/icons';
import { Typography } from 'antd';

const Article  = () => {
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
            articleList
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