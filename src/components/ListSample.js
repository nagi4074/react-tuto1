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