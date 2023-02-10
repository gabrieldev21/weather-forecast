export const formattedDate = (date: string | Date) => {
  const convertedDate = new Date(date);

  return convertedDate.toLocaleString("en", {
    day: "2-digit",
    month: "2-digit",
    year: "2-digit",
  });
};
