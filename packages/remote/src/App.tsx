import React from 'react';
import './App.css';
import {useBearStore} from "cart/CartStore";

function App() {
    const {bears, removeAllBears} = useBearStore()
    return (
        <div className="App">
            <h1>This is remote App</h1>
            <h1>Count is: {bears}</h1>
            <button onClick={removeAllBears}>Reset count</button>
        </div>
    );
}

export default App;
