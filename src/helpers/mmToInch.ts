export const mmToInch = (value: string): string => {
    let currentValue = Number(value.replace(/[\D]/g, ""));
    currentValue = currentValue / 25.4;

    return currentValue.toFixed(2) + "inch";    
};