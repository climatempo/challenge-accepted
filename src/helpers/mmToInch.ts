export const mmToInch = (value: string): string => {
    let toggleValue = '';

    let currentValue: number = Number(value.replace(/[\D]/g, ""));
    currentValue = currentValue / 25.4;

    toggleValue = currentValue.toFixed(2) + "inch";    

    return toggleValue;
};