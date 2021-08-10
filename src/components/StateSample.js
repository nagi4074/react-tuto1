/**
 * 各コンポーネント毎に持つ、コンポーネントの状態を管理する仕組み
 * stateの初期値を設定
 * ↓
 * this.setState()にstateを更新させる処理を書く
 * stateの値を更新する時は必ずsetState()経由で行うこと
 * ↓
 * stateを更新すると、必要なコンポーネントが自動で再リロードされる
 */

import React from 'react';

class StateSample extends React.Component {
    state = {
        count: 0,
    }

    countUp = () => {
        this.setState({
            count: this.state.count + 1,
        });
    }

    render() {
        return (
            <div>
                <button onClick={this.countUp}>count</button>
                <p>{this.state.count}</p>
            </div>
        )
    }
}

export default StateSample