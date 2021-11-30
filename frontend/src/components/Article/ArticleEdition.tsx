import React,{useState} from 'react';
import { Row, Col ,Input, Select ,Button ,DatePicker } from 'antd'
import './ArticleEdition.css'
import marked from 'marked';
const { Option } = Select;
const { TextArea } = Input

const ArticleEdition  = () => {
    const [articleId,setArticleId] = useState(0)  // 文章的ID，如果是0说明是新增加，如果不是0，说明是修改
    const [articleTitle,setArticleTitle] = useState('')   //文章标题
    const [articleContent , setArticleContent] = useState('')  //markdown的编辑内容
    const [markdownContent, setMarkdownContent] = useState('预览内容') //html内容
    const [introducemd,setIntroducemd] = useState() //简介的markdown内容
    const [introducehtml,setIntroducehtml] = useState('等待编辑') //简介的html内容

    const changeContent = (e)=>{
        setArticleContent(e.target.value)
        let html=marked(e.target.value)
        setMarkdownContent(html)
    }

    const changeIntroduce = (e)=>{
        setIntroducemd(e.target.value)
        let html=marked(e.target.value)
        setIntroducehtml(html)
    }
    marked.setOptions({
        renderer: marked.Renderer(),
        gfm: true,
        pedantic: false,
        sanitize: false,
        tables: true,
        breaks: false,
        smartLists: true,
        smartypants: false,
    });

    return <div>
        <Row gutter={5}>
            <Col span={18}>
                <Row gutter={10} >
                    <Col span={20}>
                        <Input
                            placeholder="博客标题"
                            size="large" />
                    </Col>
                </Row>
                <br/>
                <Row gutter={10} >
                    <Col span={12}>
                        <TextArea
                            className="markdown-content"
                            rows={35}
                            placeholder="文章内容"
                            onChange={changeContent}
                        />
                    </Col>
                    <Col span={12}>
                        <div
                            className="show-html"
                            dangerouslySetInnerHTML={{__html: markdownContent}}
                        >
                        </div>

                    </Col>
                </Row>
            </Col>
            <Col span={6}>

                    <Row>
                        <Col span={24}>
                            <Button  size="large">暂存文章</Button>&nbsp;
                            <Button type="primary" size="large">发布文章</Button>
                            <br/>
                        </Col>
                        <Col span={24}>
                            <br/>
                            <TextArea
                                rows={4}
                                placeholder="文章简介"
                                onChange={changeIntroduce}
                            />
                            <br/><br/>
                            <div
                                className="introduce-html"
                                dangerouslySetInnerHTML={{__html: introducehtml}}
                            >

                            </div>
                        </Col>
                    </Row>


            </Col>
        </Row>
    </div>
}
export default ArticleEdition;