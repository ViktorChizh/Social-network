import React, {Component} from 'react'
import {Header} from './Header'
import axios from 'axios';
import {AuthType, setAuthUserData} from '../../redux/AuthReducer';
import {connect} from 'react-redux';
import {setPreloader} from '../../redux/UsersReducer';
import {ProfileUserType} from '../../redux/ProfileReducer';
import {StateReduxType} from '../../redux/_Store-Redux';

class HeaderAPIContainer extends Component<HeaderAPIContainerPropsType> {
    componentDidMount() {
        this.props.setPreloader(true)
        setTimeout( () =>  axios.get<ResponseServerType<AuthType>>(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
                .then((res) => {
                    if (res.data.resultCode === 0) {
                        let authData = res.data.data
                        axios.get<ProfileUserType>(`https://social-network.samuraijs.com/api/1.0/profile/${res.data.data.id}`)
                            .then((res) => {
                                    this.props.setPreloader(false)
                                    this.props.setAuthUserData(authData, res.data.photos.small)
                                }
                            )
                    }
                }),250)
    }

    render() {
        return (
            <Header {...this.props}/>
        )
    }
}

type mStPType = {
    isAuth: boolean
    login: string | null
    ownUserAvatar: string | null
    isPreloading: boolean
}
type mDtPType = {
    setAuthUserData: (data: AuthType, ownUserAvatar: string | null) => void
    setPreloader: (isPreloader: boolean) => void
}
type HeaderAPIContainerPropsType = mStPType & mDtPType

const MapStateToProps = (state: StateReduxType): mStPType  => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    ownUserAvatar: state.auth.ownUserAvatar,
    isPreloading: state.usersPage.isPreloading
})


export const HeaderContainer = connect<mStPType,mDtPType, unknown, StateReduxType >(MapStateToProps, {setAuthUserData, setPreloader})(HeaderAPIContainer)


export type ResponseServerType<D = {}> = {
    data: D
    resultCode: 0 | 1 | 10
    messages: string[]
}