import React, {useState} from 'react';
import './App.css';
import CalculatorNumberButton from "./CalculatorNumberButton";

function App() {

    const [displayValue, setDisplayValue] = useState(0)

    return (
        <div className="App">
            <div>
                {displayValue}
            </div>
            <CalculatorNumberButton numberValue={1} action={setDisplayValue}></CalculatorNumberButton>
        </div>
    );
}

export default App;
