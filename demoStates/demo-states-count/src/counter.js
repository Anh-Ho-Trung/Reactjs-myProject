import React from 'react';


class Counter extends React.Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }

    timeStick = () => {
        this.setState({
            count: this.state.count + 100
        })
    }

    componentDidMount() {
        setInterval(this.timeStick, 1000)
    }

    render() {
        return (
            <h1> {this.state.count} </h1>
        )
    }
}


export default Counter;
