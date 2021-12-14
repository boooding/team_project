import React from "react"
import "./BlogInfo.css"
import img from "../core/img.png"
import {Divider} from "antd";

const BlogInfo  = () => {
    return <div className="info-box">
        <div className="avatar">
            <img
                src={img}
                alt="avatar"
            />
        </div>

        <div className="info-username textCenter">
            <div>
                Booding
            </div>
        </div>

        <Divider style={
            {
                padding:"0 10px"
            }
        }>Introduction</Divider>
        <div className="info-intro divCenter">
            The blogger is to lazy to introduce himself
        </div>

    </div>
}
export default BlogInfo;