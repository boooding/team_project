import React from "react"
import Layout from "./Layout";
import {useSelector} from "react-redux";
import homePng from './img_3.png'
import 'markdown-navbar/dist/navbar.css';

// @ts-ignore
import marked from 'marked';
import highlightjs from "highlight.js";
import 'highlight.js/styles/vs2015.css';
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
        return highlightjs.highlightAuto(code).value;
    }
});
let markdown = "## Mini-Blog Team12\n" +
    "\n" +
    "### Team Member\n" +
    "\n" +
    "- Zekai Cai, Jiaxi Chen, Runjie Fan, Weibin Zou, Junchen Li, Xianpeng Wu\n" +
    "\n" +
    "### Product Introduction\n" +
    "\n" +
    "The “Mini-Blog” is a web-based  blo system. It's a writing product, which support web online markdown wrting and preview.\n" +
    "\n" +
    "### Tech Stack\n" +
    "\n" +
    "#### Front-end\n" +
    "\n" +
    "- TypeScript\n" +
    "- React + Redux + Redux-Saga \n" +
    "- Ant design\n" +
    "- Marked + highlight.js + Three.js\n" +
    "- Axios\n" +
    "\n" +
    "#### Back-end\n" +
    "\n" +
    "- nodejs\n" +
    "- Koa + Koa-cors + Koa-parameter\n" +
    "- MongoDB + Mongoose\n" +
    "\n" +
    "#### Testing\n" +
    "\n" +
    "- Postman\n" +
    "- Jest + Enzyme"
let html = marked(markdown)
const Home  = () => {
    const state = useSelector(state => state)
    const homeStyle = {
        marginTop: "60px",
        width: "830",
        height: "500px"
    }

    return (
        <Layout title="homepage" subTitle="enjoy">
            <div style={homeStyle}>
                <img src={homePng} style={{
                    width: "370px",
                    float: "right"
                }}/>
                <div style={{
                    width: "400px",
                    float: "left"
                }}>
                    <div
                        dangerouslySetInnerHTML={{__html: html}}
                    >
                    </div>
                </div>
            </div>
        </Layout>
    )

}
export default Home;