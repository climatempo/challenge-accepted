export const celsiusToFahrenheit = (value: string): string => {
    let currentValue = Number(value.replace(/[\D]/g, ""));
    currentValue = (currentValue * 1.8) + 32;
    
    return ~~currentValue + "°F";
};