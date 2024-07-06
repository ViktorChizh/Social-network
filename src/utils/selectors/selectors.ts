// для сложных селекторов используется библиотека reselect
// в нее передаются простые (или уже сложные) селекторы, а результат кэшируется
// и пересчитывается только в случаях изменения входных данных
// export const selectorUsers = (state) => state.usersPage.users
// export const superSelectorUsers = createSelector(selectorUsers, (users) => users.filter(u => true))
// если фильтровать в selectorUsers, то будет перерисовка каждый раз, т.к. filter возвращает новый массив
// superSelectorUsers будет пересчитывать только при изменении users, получаемых в selectorUsers (простом селекторе)
// в mapStatetoProps мы просто прописываем: users: superSelectorUsers(state)

// в данном проекте нет сложных селекторов, поэтому создаем только простые

import { StateRedux } from "redux/_Store-Redux"

//auth
export const idSelector = (state: StateRedux) => state.auth.id
export const loginSelector = (state: StateRedux) => state.auth.login
export const isLoggedInSelector = (state: StateRedux) => state.auth.isLoggedIn
export const ownUserAvatarSelector = (state: StateRedux) => state.auth.ownUserAvatar
export const captchaUrlSelector = (state: StateRedux) => state.auth.captchaUrl
//dialogs
export const dialogSelector = (state: StateRedux) => state.dialogsPage
//profile
export const profilePageSelector = (state: StateRedux) => state.profilePage
export const statusSelector = (state: StateRedux) => state.profilePage.status
export const profileSelector = (state: StateRedux) => state.profilePage.profile
export const isErrorSelector = (state: StateRedux) => state.profilePage.isError
//users
export const usersSelector = (state: StateRedux) => state.usersPage.users
export const pageSizeSelector = (state: StateRedux) => state.usersPage.pageSize
export const totalCountSelector = (state: StateRedux) => state.usersPage.totalCount
export const currentPageSelector = (state: StateRedux) => state.usersPage.currentPage
export const isPreloadingSelector = (state: StateRedux) => state.usersPage.isPreloading
export const buttonDisabledSelector = (state: StateRedux) => state.usersPage.buttonDisabled
