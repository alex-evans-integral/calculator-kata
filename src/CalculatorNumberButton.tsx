import React from 'react';
import './App.css';
import CalculatorNumberButtonProperties from "./CalculatorNumberButtonProperties";

function CalculatorNumberButton(props: CalculatorNumberButtonProperties) {

    return (
        <button onClick={() => props.action(props.numberValue)}>
            {props.numberValue}
        </button>
    );
}

export default CalculatorNumberButton;
