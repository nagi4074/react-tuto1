/**
 * 親コンポーネントから子コンポーネントへ値を渡す仕組み
 * 親：コンポーネントを利用する側（App.js）
 * 子：コンポーネントを利用される側（このファイル）
 * 子から親へは渡せない
 * propsの値を動的に変更することはできない
 * 
 * propsとstateの使い分け（？）
 * props:外部の情報を参照する
 * state:内部の情報を参照する
 */

const PropsSample = (props) => {
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

export default PropsSample