import React, {Component} from 'react'
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {StateReduxType} from '../../redux/_Store-Redux';
import {ProfileUserType, ResponseUserProfileType, setProfile} from '../../redux/ProfileReducer';
import axios from 'axios';
import {RouteComponentProps, withRouter} from 'react-router-dom';

class ProfileAPIComponent extends Component<WithRouterProfileComponentType> {
    componentDidMount() {
        const userId = this.props.match.params.userId || 29529
        axios.get<ResponseUserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then((res) => {
                this.props.setProfile(res.data)
            })
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

type WithRouterProfileComponentType = MStPType & MDtPType & RouteComponentProps<{ userId?: string }>

export const ProfileContainer = connect(mapStateToProps, {setProfile})(withRouter(ProfileAPIComponent))