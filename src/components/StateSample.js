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