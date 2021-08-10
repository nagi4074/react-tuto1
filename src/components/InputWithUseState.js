/**
 * useStateを使ったinput
 * リアルタイムで値の同期ができる
 * inputタグの値が更新されるごとにレンダリングが行われる
 */
import React, { useState } from 'react';

const InputWithUseState = () => {
    const [text, changeText] = useState("");

    const handleChange = (e) => {
        changeText(() => e.target.value)
    }

    return (
        <div>
            <label>Input Sample</label>
            <input value={text} type="text" onChange={handleChange} />
            <button onClick={() => alert(text)}>input value</button>
        </div>
    )
}

export default InputWithUseState