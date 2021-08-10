/**
 * Reactでは配列の中身を一覧表示させる時に、mapメソッドを用いる
 * →{}内に記述↓配列の要素が並べて表示される
 * →mapメソッドが、戻り値として新しい配列を返す
 * 
 * また、{}内の配列を一覧表示するときには、key属性が必須
 * （配列の要素が動的に変更された時に、変更前の配列の要素との対応関係をReact側が認識するため）
 */

import React from 'react';

class ListSample extends React.Component {
    render() {
        const fruits = ["Apple", "Banana", "Peach"];
        return (
            <ul>
                {fruits.map((fruit, i) => <li key={i}>{fruit}</li>)}
            </ul>
        )
    }
}

export default ListSample