import React from 'react';
import './App.css';
import {useBearStore} from "cart/CartStore";
import {Test} from "~@/components";
import {Fallback} from "shared";


const AppRemote = React.lazy(() => import("remote1/AppRemote"))
const AppCart = React.lazy(() => import("cart/AppCart"))

function App() {
    const {bears, increasePopulation} = useBearStore()
    return (
        <div className="App">
            <Fallback/>
            <h1>
                Count host is: {bears}
            </h1>
            <Test/>
            <button onClick={increasePopulation}> Increase Count</button>
            <React.Suspense fallback={<p>...loading</p>}>
                <div style={{border: "2px dashed red", padding: 10, marginTop:20}}>
                    <AppRemote/>
                </div>
            </React.Suspense>
            <React.Suspense fallback={<p>...loading</p>}>
                <div style={{border: "2px dashed red", padding: 10, margin: 20}}>
                    <AppCart/>
                </div>

            </React.Suspense>
        </div>
    );
}

export default App;
