

export default interface CalculatorNumberButtonProperties {
    numberValue: number;
    action(currentNumber: number): void;
}