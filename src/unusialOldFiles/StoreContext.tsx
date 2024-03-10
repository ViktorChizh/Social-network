import React, {FC, ReactNode} from 'react'
import {StoreReduxType} from '../redux/_Store-Redux';

export const StoreContext = React.createContext({} as StoreReduxType)

type ProviderType = {
    store: StoreReduxType
    children: ReactNode
}

export const Provider: FC<ProviderType> = (props) => {

    return (
        <StoreContext.Provider value={props.store}>
            {props.children}
        </StoreContext.Provider>
    )
}
