export const getNextDay = (): number => {
  const currDate = new Date();
  return currDate.getDay() > 4 || currDate.getDay() == 0
    ? 1
    : currDate.getDay() + 1;
};

export default getNextDay;
