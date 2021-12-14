import React from "react"
import Layout from "./Layout";
import {useSelector} from "react-redux";
import homePng from './img_3.png'
import 'markdown-navbar/dist/navbar.css';

// @ts-ignore
import marked from 'marked';
import hljs from "highlight.js";
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
        return hljs.highlightAuto(code).value;
    }
});
let markdown = "## Team12 -  Mini-blog\n" +
    "\n" +
    "### About the Project\n" +
    "\n" +
    "The Mini-blog is Planned to be a blog system with \"community\" feature. For now the most part of blog system is finished, including account related signin, signup and blog article's CRUD, what's more, The web-based online markdown editor is supported with preview.\n" +
    "\n" +
    "### Technology stack\n" +
    "\n" +
    "#### Front-end\n" +
    "\n" +
    "- Typescript\n" +
    "\n" +
    "Compared to traditional JS, TS’s defined types make code management easier and less “undefined” problems in JS. \n" +
    "\n" +
    "- React + Redux + Redux-Saga\n" +
    "\n" +
    "React is a JS(TS) library for building the UI. Component-based feature make complex UI development easier. Redux is a state container for application. Bluntly, the redux helps to manage different types of data(state) in react. \n" +
    "\n" +
    "- Ant design\n" +
    "\n" +
    "The ant-design is the most popular UI component library of react. \n" +
    "\n" +
    "- Axios\n" +
    "\n" +
    "The axios is a http client, which simplify the request.\n" +
    "\n" +
    "- Marked + highlight.js + Three.js\n" +
    "\n" +
    "As a blog system, markdown is the most important file type, which means the display of markdown is very important, the marked is a compiler for parsing markdown and highlight.js is a syntax highlighter for browser. \n" +
    "\n" +
    "#### Back-end\n" +
    "\n" +
    "- Node.js\n" +
    "- Koa + Koa-cors + Koa-parameter\n" +
    "\n" +
    "Koa is a famous web framework for node.js. Compared to the traditional web framework Express, the Koa is smaller and more concise in syntax. Even the Koa has not many build-in middleware, the Koa community provide excellent many solutions.\n" +
    "\n" +
    "- MongoDB + Mongoose\n" +
    "\n" +
    "MongoDB is one of the most popular databases in the world. MongoDB is based on the document data mode, which naturally support JSON. Mongoose is MongoDB object modeling for node.\n" +
    "\n" +
    "#### Testing\n" +
    "\n" +
    "- Jest + Enzyme\n" +
    "\n" +
    "Used for testing the front-end components.\n" +
    "\n" +
    "- Postman\n" +
    "\n" +
    "Used for testing API.\n" +
    "\n" +
    "### Major Feature\n" +
    "\n" +
    "- Sign in + Sign up\n" +
    "\n" +
    "- Blog Post + CRUD of Blog\n" +
    "\n" +
    "- Web-based Markdown editor\n" +
    "\n"
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