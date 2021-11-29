import React, {FC} from "react"
import Navigation from "../core/Navigation";

interface Props {
    children: React.ReactNode
}
const Layout: FC<Props> = ({ children}) => {
    return <div>
        <Navigation/>
        <div>
            {children}
        </div>
    </div>
}
export default Layout;