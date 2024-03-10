import React, {FC, LegacyRef} from 'react'
import s from './TextareaWithButton.module.css';
import {StoreActionType} from '../../redux/_Store-Redux';

export type TextareaButtonPropsType = {
    buttonName: string
    newText: string
    dispatch: (AC:StoreActionType) => void
    addAC: ()=>StoreActionType
    newTextAC: (refElement: string)=>StoreActionType

}

export const TextareaWithButton: FC<TextareaButtonPropsType> = (props) => {

    const {buttonName, newText, addAC, newTextAC, dispatch} = props

    const refElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const updateNewTextHandler = () => {
        refElement.current && dispatch(newTextAC(refElement.current.value))
    }
    const addTextHandler = () => {
        dispatch(addAC())
    }
    return (
        <div className={s.textareaButton }>
            <textarea ref={refElement} value={newText} onChange={updateNewTextHandler}/>
            <button onClick={addTextHandler}> {buttonName} </button>
        </div>
    )
} 