import React, {useState} from 'react';
import './App.css';
import CalculatorButton from "./CalculatorButton";

function App() {

    const [displayValue, setDisplayValue] = useState("0")

    return (
        <div className="App">
            <div>
                {displayValue}
            </div>
            <CalculatorButton label="1" numberValue={1} action={setDisplayValue}></CalculatorButton>
        </div>
    );
}

export default App;
