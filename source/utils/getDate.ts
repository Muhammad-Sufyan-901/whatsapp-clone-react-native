export const getYesterdayDate = (): Date => {
  const date = new Date();
  const yesterday = new Date(date.getTime());

  yesterday.setDate(date.getDate() - 1);

  return yesterday;
};
