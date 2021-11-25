import React from "react"
import "./BlogArticle.css"
import {CalendarOutlined} from "@ant-design/icons";
import {Affix, Divider} from "antd";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import MarkNav from 'markdown-navbar';
import 'markdown-navbar/dist/navbar.css';

const BlogArticle  = () => {
    let markdown='# P01:课程介绍和环境搭建\n' +
        '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
        '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
        '**这是加粗的文字**\n\n' +
        '*这是倾斜的文字*`\n\n' +
        '***这是斜体加粗的文字***\n\n' +
        '~~这是加删除线的文字~~ \n\n'+
        '\`console.log(111)\` \n\n'+
        '# p02:来个Hello World 初始Vue3.0\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n'+
        '***\n\n\n' +
        '# p03:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# p04:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '#5 p05:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# p06:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'+
        '# p07:Vue3.0基础知识讲解\n' +
        '> aaaaaaaaa\n' +
        '>> bbbbbbbbb\n' +
        '>>> cccccccccc\n\n'

    return <div className="module-box">
        {/*<Affix offsetTop={5}>*/}
        {/*    <div className="detailed-nav comm-box">*/}
        {/*        <div className="nav-title">文章目录</div>*/}
        {/*        <MarkNav*/}
        {/*            className="article-menu"*/}
        {/*            source={markdown}*/}

        {/*            ordered={false}*/}
        {/*        />*/}
        {/*    </div>*/}
        {/*</Affix>*/}
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
            <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]}/>

        </div>
    </div>
}
export default BlogArticle;