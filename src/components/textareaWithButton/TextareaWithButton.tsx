import React, {FC, LegacyRef} from 'react'
import s from './TextareaWithButton.module.css';
import {StoreActionType} from '../../redux/Store';

type TextareaButtonPropsType = {
    newText: string
    dispatch: (action: StoreActionType) => void
    addText: () => StoreActionType
    updateNewText: (refElement: string )=> StoreActionType
}

export const TextareaWithButton: FC<TextareaButtonPropsType> = ({newText, dispatch, addText, updateNewText}) => {
    const refElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()
    const updateNewTextHandler = () => {
        refElement.current && dispatch(updateNewText(refElement.current.value))
    }
    return (
        <div className={s.textareaButton }>
            <textarea ref={refElement} value={newText} onChange={updateNewTextHandler}/>
            <button onClick={()=>dispatch(addText())}>ADD POST</button>
        </div>
    )
} 