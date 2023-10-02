import React from 'react';
import './App.css';
import {useBearStore} from "./store";

function App() {
    const {bears, increasePopulation} = useBearStore();
    return (
        <div className="App">
            <h1>this is cart app</h1>
            <h1 data-testid={"hi"}>Count is: {bears}</h1>
            <button onClick={increasePopulation}>Change Count</button>
        </div>
    );
}

export default App;
