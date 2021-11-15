import React from "react"
import "./BlogInfo.css"
import img from "./img.png"

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

        <div className="info-tag divCenter clearfix">
            <div>
                Programmer
            </div>
            <div>
                Programmer
            </div>
            <div>
                Programmer
            </div>
        </div>

        <div className="info-intro divCenter">
            The blogger is to lazy to introduce himself
        </div>
        <div className="info-friend">

        </div>
    </div>
}
export default BlogInfo;