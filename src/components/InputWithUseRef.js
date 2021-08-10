/**
 * useRefを使ったinput
 * 再レンダリングが不要でinputの値のみを参照するときはこっちを使う
 */
import React, { useRef } from 'react';

const InputWithUseRef = () => {
    const textRef = useRef("");

    return (
        <div>
            <input ref={textRef} type="text" />
            <button onClick={() => alert(textRef.current.value)}>input value</button>
        </div>
    )
}

export default InputWithUseRef