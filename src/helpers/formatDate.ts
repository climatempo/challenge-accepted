export const formatDate = (date: string): string => {
    let currentDate = date.split("-");
    return `${currentDate[2]}/${currentDate[1]}/${currentDate[0]}`; //prev: year/mm/dd, now: dd/mm/yyyy
};