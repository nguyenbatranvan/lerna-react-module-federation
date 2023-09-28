import React from 'react';
import './App.css';
import {useBearStore} from "./store";

function App() {
    const {bears} = useBearStore();
    return (
        <div className="App">
            <h1>this is cart app</h1>
            <h1>Count is: {bears}</h1>
        </div>
    );
}

export default App;
