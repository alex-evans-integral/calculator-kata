import React from 'react';
import './App.css';
import CalculatorButtonProperties from "./CalculatorButtonProperties";

function CalculatorButton(props: CalculatorButtonProperties) {

    return (
        <button onClick={() => props.action(props.label)}>
            {props.label}
        </button>
    );
}

export default CalculatorButton;
