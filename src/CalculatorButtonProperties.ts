

export default interface CalculatorButtonProperties {
    label: string;
    numberValue: number;
    action(displayValue: string): void;
}