import React, { useState} from "react"
import "./BlogArticle.css"
import {CalendarOutlined, UserOutlined} from "@ant-design/icons";
import {Button, Divider, Modal} from "antd";

import 'markdown-navbar/dist/navbar.css';

// @ts-ignore
import marked from 'marked';
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';
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
let markdown = "# Marked\n" +
    "\n" +
    "[![npm](https://badgen.net/npm/v/marked)](https://www.npmjs.com/package/marked)\n" +
    "[![gzip size](https://badgen.net/badgesize/gzip/https://cdn.jsdelivr.net/npm/marked/marked.min.js)](https://cdn.jsdelivr.net/npm/marked/marked.min.js)\n" +
    "[![install size](https://badgen.net/packagephobia/install/marked)](https://packagephobia.now.sh/result?p=marked)\n" +
    "[![downloads](https://badgen.net/npm/dt/marked)](https://www.npmjs.com/package/marked)\n" +
    "[![github actions](https://github.com/markedjs/marked/workflows/Tests/badge.svg)](https://github.com/markedjs/marked/actions)\n" +
    "[![snyk](https://snyk.io/test/npm/marked/badge.svg)](https://snyk.io/test/npm/marked)\n" +
    "\n" +
    "- ⚡ built for speed\n" +
    "- ⬇️ low-level compiler for parsing markdown without caching or blocking for long periods of time\n" +
    "- ⚖️ light-weight while implementing all markdown features from the supported flavors & specifications\n" +
    "- 🌐 works in a browser, on a server, or from a command line interface (CLI)\n" +
    "\n" +
    "## Demo\n" +
    "\n" +
    "Checkout the [demo page](https://marked.js.org/demo/) to see marked in action ⛹️\n" +
    "\n" +
    "## Docs\n" +
    "\n" +
    "Our [documentation pages](https://marked.js.org) are also rendered using marked 💯\n" +
    "\n" +
    "Also read about:\n" +
    "\n" +
    "* [Options](https://marked.js.org/#/USING_ADVANCED.md)\n" +
    "* [Extensibility](https://marked.js.org/#/USING_PRO.md)\n" +
    "\n" +
    "## Compatibility\n" +
    "\n" +
    "**Node.js:** Only [current and LTS](https://nodejs.org/en/about/releases/) Node.js versions are supported. End of life Node.js versions may become incompatible with Marked at any point in time.\n" +
    "\n" +
    "**Browser:** Not IE11 :)\n" +
    "\n" +
    "## Installation\n" +
    "\n" +
    "**CLI:** `npm install -g marked`\n" +
    "\n" +
    "**In-browser:** `npm install marked`\n" +
    "\n" +
    "## Usage\n" +
    "\n" +
    "### Warning: 🚨 Marked does not [sanitize](https://marked.js.org/#/USING_ADVANCED.md#options) the output HTML. Please use a sanitize library, like [DOMPurify](https://github.com/cure53/DOMPurify) (recommended), [sanitize-html](https://github.com/apostrophecms/sanitize-html) or [insane](https://github.com/bevacqua/insane) on the output HTML! 🚨\n" +
    "\n" +
    "**CLI**\n" +
    "\n" +
    "\n" +
    "``` bash\n" +
    "# Example with stdin input\n" +
    "$ marked -o hello.html\n" +
    "hello world\n" +
    "^D\n" +
    "$ cat hello.html\n" +
    "<p>hello world</p>\n" +
    "```\n" +
    "\n" +
    "```bash\n" +
    "# Print all options\n" +
    "$ marked --help\n" +
    "```\n" +
    "\n" +
    "**Browser**\n" +
    "\n" +
    "```java\n" +
    "system.out.println()\n" +
    "```"
let html = marked(markdown)


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
                            width={"800px"}
                        >
                            <div
                                dangerouslySetInnerHTML={{__html: html}}
                            >
                            </div>
                        </Modal>
                    }
                </span>
            </div>
            <Divider/>
        </div>
    </div>
}
export default BlogArticle;