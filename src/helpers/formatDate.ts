export const formatDate = (date: string): string => {
    let currentDate = date.split("-");
    return `${currentDate[2]}/${currentDate[1]}/${currentDate[0]}`
};