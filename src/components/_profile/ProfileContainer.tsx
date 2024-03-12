import React, {Component} from 'react'
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {StateReduxType} from '../../redux/_Store-Redux';
import {ProfileUserType, ResponseUserProfileType, setProfile} from '../../redux/ProfileReducer';
import axios from 'axios';

class ProfileAPIComponent extends Component<ProfileAPIComponentPropsType> {
    componentDidMount() {
        setTimeout(() => axios.get<ResponseUserProfileType>
        (`https://social-network.samuraijs.com/api/1.0/profile/29529`)
            .then((res) => {
                this.props.setProfile(res.data)
            }), 3000)
    }

    render() {
        return <Profile profile={this.props.profile}/>
    }
}

const mapStateToProps = (state: StateReduxType): MStPType => ({
    profile: state.profilePage.profile
})
type MStPType = {
    profile: ResponseUserProfileType | null
}
type MDtPType = {
    setProfile: (profile: ProfileUserType) => void
}
export type ProfileAPIComponentPropsType = MStPType & MDtPType
export const ProfileContainer = connect(mapStateToProps, {setProfile})(ProfileAPIComponent)