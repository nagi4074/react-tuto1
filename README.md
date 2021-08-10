# コンポーネント
## Reactはコンポーネント（部品）単位で実装する
### コンポーネント単位で管理することで以下のような利点がある
* 再利用することができる
* 変更してもバグが起きにくい
### コンポーネントの種類は2種類ある
* Functionalコンポーネント
* クラスコンポーネント
---
# Functionalコンポーネント
## 以下のようにアロー関数かfunction()で定義した関数を用いる
### stateを持たず、引数にpropsを持つことが特徴
```javascript
import React from 'react'

const App = (props) => {
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
}
export default App
```
---
# クラスコンポーネント
## 以下のように記述する
### stateを持ち、ライフサイクルがあることが特徴
```javascript
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'hoge'
    }
  }
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}
export default App
```
---
# props  
## 親コンポーネントから子コンポーネントへ値を渡す仕組み  
### 親：コンポーネントを利用する側  
### 子：コンポーネントを利用される側  
#### ※子から親へは渡せない  
#### ※propsの値を動的に変更することはできない  
---
# state  
## 各コンポーネント毎に持つ、コンポーネントの状態を管理する仕組み
#### ※stateの値を更新する時は必ずsetState()経由で行うこと  
---
 # ライフサイクル
 ## ライフサイクルは以下の三種類
* Mounting(コンポーネントが生まれる時の期間)  
componentDidmount(マウントが実装された直後に実行される)  
componentWillMount(マウントが行われる直前に実行される、非推奨)  
* Updating(コンポーネントが変更される期間)  
componentWillReactiveProps(マウントされたコンポーネントが新しいpropsを受け取る前)    
shouldComponentUpdate(新しいpropsやstateを受け取った時)  
componentWillUpdate(新しいpropsやstateを受け取った後、レンダリングする直前)  
componentDidUpdate(更新が行われた直後)
* UnMounting(コンポーネントが破棄される期間)  
componentWillUnmount(コンポーネントが破棄される直前)  
---
# イベント処理・イベントハンドラ
### イベントはcamelCaseで命名(onClick等)
### イベントハンドラには文字列ではなく関数を渡す
### bindは記述の仕方によっては省略できる
---
# 配列
## 配列の中身を一覧表示させる時はmapメソッドを用いる
### {}内に記述した配列の要素が並べて表示される
### mapメソッドが、戻り値として新しい配列を返す
### {}内の配列を一覧表示するときには、key属性が必須
#### 配列の要素が動的に変更された時に、変更前の配列の要素との対応関係をReact側が認識するため

---
# フック
## 状態管理等のReactの機能を、クラスを記述しないで使えるようになる機能
### React16.8(2019/2~)から追加
### クラスの内部では動作しない(関数型のみ)
#### APIリファレンス(https://ja.reactjs.org/docs/hooks-reference.html)
---
# useState
## クラスコンポーネントに頼らないでもstateを持つことができる
```javascript
import React, { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  )
}
```
---
# useEffect
## レンダリングの後に処理を行わせる
### 第二引数に配列を与えることで、特定の値が変化した時にのみ動作させることもできる
### componentDidMountやcomponentDidUpdateと同じように使うことができ、一括管理ができる
```javascript
import React, { useState, useEffect } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('count up!!')
  })

  return (
    <div>
      <p>{count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click
      </button>
    </div>
  );
}

export default App
```
---
# useContext
## prop drilling問題を解決することができる
#### ※prop drilling問題：propsを利用すると親コンポーネントから孫コンポーネントへ値を渡したい時、親→子→孫という手順で値を渡さなければならないこと
```javascript
import React, { createContext, useContext } from 'react'

const Context = createContext()

const Grandson = () => {
  const { money } = useContext(Context)
  return <p>{money}円</p>
}

const Child = () => <Grandson />

const Parent = () => {
  return (
    <Context.Provider value={{ money: 10000 }}>
      <Child />
    </Context.Provider>
  )
}

export default Parent
```