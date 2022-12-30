import { DateTime } from "luxon";

export const translateDate = (strDate: string): string => {
  const today = DateTime.fromJSDate(new Date());
  const date = DateTime.fromISO(strDate);

  if (date.startOf("day").equals(today.startOf("day"))) return "Hoje";
  if (date.minus({ day: 1 }).startOf("day").equals(today.startOf("day")))
    return "Amanhã";

  return date.weekdayLong;
};

export const shortDate = (strDate: string): string => {
  const date = DateTime.fromISO(strDate).toFormat("dd/MM");
  if (date === "Invalid DateTime") return "";
  return date;
};
