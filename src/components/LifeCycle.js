/**
 * ライフサイクルは以下の三種類
 * ・Mounting(コンポーネントが生まれる時の期間)
 * 　componentDidmount(マウントが実装された直後に実行される)
 * 　componentWillMount(マウントが行われる直前に実行される、非推奨)
 *
 * ・Updating(コンポーネントが変更される期間)
 * 　componentWillReactiveProps(マウントされたコンポーネントが新しいpropsを受け取る前)
 * 　shouldComponentUpdate(新しいpropsやstateを受け取った時)
 * 　componentWillUpdate(新しいpropsやstateを受け取った後、レンダリングする直前)
 * 　componentDidUpdate(更新が行われた直後)
 *
 * ・UnMounting(コンポーネントが破棄される期間)
 * 　componentWillUnmount(コンポーネントが破棄される直前)
 */

import React from "react";

class LifeCycle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0,
            speed: 1,
        }
    }

    componentDidMount() {
        this.interval = setInterval(
            () => this.setState({
                number: this.state.number + 1,
            }), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        return (
            <div>
                <p>count up per 1 sec.{this.state.number}</p>
            </div>
        )
    }
}

export default LifeCycle