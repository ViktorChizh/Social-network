import React, {FC, LegacyRef} from 'react'
import s from './TextareaWithButton.module.css';

type TextareaButtonPropsType = {
    newText: string
    addText: () => void
    updateNewText: (p: string) => void
}

export const TextareaWithButton: FC<TextareaButtonPropsType> = ({newText, addText, updateNewText}) => {
    const refElement: LegacyRef<HTMLTextAreaElement> | undefined = React.createRef()
    const updateNewTextHandler = () => {
        refElement.current && updateNewText(refElement.current.value)
    }
    return (
        <div className={s.textareaButton }>
            <textarea ref={refElement} value={newText} onChange={updateNewTextHandler}/>
            <button onClick={addText}>ADD POST</button>
        </div>
    )
} 