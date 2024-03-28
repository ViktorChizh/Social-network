import React, {Component} from 'react'
import {Profile} from './Profile';
import {connect} from 'react-redux';
import {StateReduxType} from 'redux/_Store-Redux';
import {ProfileUserType, ResponseUserProfileType, setProfile} from 'redux/ProfileReducer';
import {RouteComponentProps, withRouter} from 'react-router-dom';
import {api} from 'api/API';


class ProfileAPIComponent extends Component<WithRouterProfileComponentType> {
    componentDidMount() {
        const userId = this.props.match.params.userId || 29529
        api.getProfile(+userId).then((res) => {
                this.props.setProfile(res)
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