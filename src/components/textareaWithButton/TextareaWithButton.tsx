import React, {FC, LegacyRef} from 'react'
import s from './TextareaWithButton.module.css';
import {StoreActionType} from '../../redux/_Store';

type TextareaButtonPropsType = {
    buttonName: string
    newText: string
    dispatch: (action: StoreActionType) => void
    addText: () => StoreActionType
    updateNewText: (refElement: string )=> StoreActionType
}

export const TextareaWithButton: FC<TextareaButtonPropsType> = (props) => {

    const {buttonName, newText, dispatch, addText, updateNewText} = props

    const refElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()

    const updateNewTextHandler = () => {
        refElement.current && dispatch(updateNewText(refElement.current.value))
    }
    const addTextHandler = () => {
        dispatch(addText())
    }
    return (
        <div className={s.textareaButton }>
            <textarea ref={refElement} value={newText} onChange={updateNewTextHandler}/>
            <button onClick={addTextHandler}> {buttonName} </button>
        </div>
    )
} 