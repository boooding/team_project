import React from "react"
import logo from './logo.png'
const Logo  = () => {
    return <div style={{width:"400px", margin:"0 auto"}}>
        <div  style={{width:"60px", margin:"0 auto"}}>
            <img
                src={logo} alt=""
                style={{width:"60px",height:"60px", padding:"10px"}}
            />
        </div>
        <div style={{width:"80px", margin:"0 auto", fontSize:"18px"}}>
            <div>
                Mini-blog
            </div>
        </div>
    </div>

}

export default Logo;