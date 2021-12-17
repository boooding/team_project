import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../../store/reducers";
import {UserInformationState} from "../../store/reducers/userInformation.reducer";
import {useEffect} from "react";
import {getUserInformation} from "../../store/actions/userInformation.actions";
import Layout from "../core/Layout";
import {isAuth} from "../../commonFunction/auth";

const UserInformation = () => {
    const dispatch = useDispatch();
    const { userInformation } = useSelector<AppState, UserInformationState>(
        state => state.userInformation
    )
    let id = "";
    if (isAuth()) {
        // @ts-ignore
        id = isAuth().user._id
    }
    useEffect(() => {
        dispatch(getUserInformation(id))
    }, [])

    return (
        <Layout title="" subTitle="">
            <div>
                userInformation
            </div>
            <div>
                {userInformation.result.username}
            </div>
        </Layout>
    )
}

export default UserInformation;