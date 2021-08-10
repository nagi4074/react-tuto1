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