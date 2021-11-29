import React, {useState} from "react"
import {Modal} from "antd";

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
let markdown = "# 代码的艺术\n" +
    "\n" +
    "## 好代码的标准\n" +
    "\n" +
    "①高效、②鲁棒、③简洁、④简短、⑤可共享、⑥可测试、⑦可移植。、⑧可监控、⑨可运维、⑩可扩展\n" +
    "\n" +
    "以上十条标准进行总结精简，可以归纳为：\n" +
    "\n" +
    "- 正确和性能；\n" +
    "- 可读和可维护性；\n" +
    "- 可运维和可运营；\n" +
    "- 可共享和可重用。\n" +
    "\n" +
    "## **好的代码从哪里来**\n" +
    "\n" +
    "*好的代码是多个环节工作共同作用的结果*\n" +
    "\n" +
    "- 在编码前，要进行需求分析和系统设计\n" +
    "- 在编码过程中，要注意做单元测试\n" +
    "- 在编码后，要做集成测试，要上线，要持续运营，要迭代改进\n" +
    "\n" +
    "### *需求分析和系统设计*\n" +
    "\n" +
    "需求分析和系统设计在软件开发中经常被忽略或轻视，但是这两点都是非常重要的环节\n" +
    "\n" +
    "### **需求分析和系统设计的差别**\n" +
    "\n" +
    "- 需求分析主要是定义系统或软件的黑盒行为，即：外部行为\n" +
    "- 系统设计主要是设计系统或软件的白盒机制。即：内部行为\n" +
    "\n" +
    "### **需求分析的注意要点**\n" +
    "\n" +
    "- 要点一：清楚怎么用寥寥数语勾勒出一个系统的功能。需求描述的内容基本包括：\n" +
    "\n" +
    "①系统类型描述\n" +
    "\n" +
    "②系统规模描述\n" +
    "\n" +
    "③系统定位和系统差异描述\n" +
    "\n" +
    "④系统对外接口功能描述\n" +
    "\n" +
    "- 要点二：需求分析需要用精确的数字来描述。\n" +
    "\n" +
    "### 系统设计的注意要点\n" +
    "\n" +
    "- **要点一、清楚什么是系统架构**\n" +
    "- **要点二、注意系统设计的约束**\n" +
    "- **要点三、清楚需求是系统设计决策的来源**\n" +
    "- **要点四、系统设计的风格与哲学**\n" +
    "- **要点五、清楚接口的重要性**"
let html = marked(markdown)


const ArticleModal  = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    return <>
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        {html}
    </Modal>
    </>
}
export default ArticleModal;