import { format } from "date-fns";

export const formatDate = (date: string): string => {
  const parsedDate = new Date(date);
  return format(parsedDate, "MMMM d, yyyy");
};
