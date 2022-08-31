export const celsiusToFahrenheit = (value: string): string => {
    let toggleValue = '';

    let currentValue = Number(value.replace(/[\D]/g, ""));
    currentValue = (currentValue * 1.8) + 32;
    toggleValue = ~~currentValue + "°F";
    
    return toggleValue;
};