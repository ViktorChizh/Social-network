// для сложных селекторов используется библиотека reselect
// в нее передаются простые (или уже сложные) селекторы, а результат кэшируется
// и пересчитывается только в случаях изменения входных данных
// export const selectorUsers = (state) => state.usersPage.users
// export const superSelectorUsers = createSelector(selectorUsers, (users) => users.filter(u => true))
// если фильтровать в selectorUsers, то будет перерисовка каждый раз, т.к. filter возвращает новый массив
// superSelectorUsers будет пересчитывать только при изменении users, получаемых в selectorUsers (простом селекторе)
// в mapStatetoProps мы просто прописываем: users: superSelectorUsers(state)

// в данном проекте нет сложных селекторов, поэтому создает только простые

import { StateReduxType } from "redux/_Store-Redux"

//auth
export const idSelector = (state: StateReduxType) => state.auth.id
export const loginSelector = (state: StateReduxType) => state.auth.login
export const isLoggedInSelector = (state: StateReduxType) => state.auth.isLoggedIn
export const ownUserAvatarSelector = (state: StateReduxType) => state.auth.ownUserAvatar
//dialogs
export const dialogSelector = (state: StateReduxType) => state.dialogsPage
//profile
export const profilePageSelector = (state: StateReduxType) => state.profilePage
export const statusSelector = (state: StateReduxType) => state.profilePage.status
export const profileSelector = (state: StateReduxType) => state.profilePage.profile
//users
export const usersSelector = (state: StateReduxType) => state.usersPage.users
export const pageSizeSelector = (state: StateReduxType) => state.usersPage.pageSize
export const totalCountSelector = (state: StateReduxType) => state.usersPage.totalCount
export const currentPageSelector = (state: StateReduxType) => state.usersPage.currentPage
export const isPreloadingSelector = (state: StateReduxType) => state.usersPage.isPreloading
export const buttonDisabledSelector = (state: StateReduxType) => state.usersPage.buttonDisabled
