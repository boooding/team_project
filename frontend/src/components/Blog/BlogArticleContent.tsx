import React, {useEffect, useState} from "react"
import axios from "axios";
import {API} from "../../config";
import {isAuth} from "../../commonFunction/auth";
import {UserJwt} from "../../store/models/authority";
import ArticleContent from "./ArticleContent";

const BlogArticleContent  = () => {
    const { user } = isAuth() as UserJwt
    let articleList = [];
    const [article, setArticle] = useState([])
    useEffect(() => {}, [article]);
    async function getArticleContent() {
        try {
            let response = await axios.get(`${API}/blogs/${user._id}`)
            for (let i of response.data) {
                // @ts-ignore
                articleList.push(i._id)
            }
            setArticle(articleList)
        } catch (e: any) {
            console.log(e);
        }
    }

    const generateTemplate = (data) => {
        let template = data.map((value) => {
            return <ArticleContent value={value}/>
        })
        return <div>{template}</div>
    }
    getArticleContent();
    return <div>
        {generateTemplate(article)}
    </div>
}
export default BlogArticleContent;