import React from 'react';

class EventSample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOn: true,
            isOn2: true,
        }
    }

    //手法1
    handleClick() {
        this.setState(state => ({
            isOn: !state.isOn,
        }));
    }

    //手法2
    handleClick2 = () => {
        this.setState(state => ({
            isOn2: !state.isOn2,
        }))
    }

    render() {
        return (
            //手法1
            // <button onClick={() => this.handleClick()}>
            //     {this.state.isOn ? "ON" : "OFF"}
            // </button>

            //手法2
            <button onClick={() => this.handleClick2()}>
                {this.state.isOn2 ? "ON" : "OFF"}
            </button>
        )
    }
}

export default EventSample