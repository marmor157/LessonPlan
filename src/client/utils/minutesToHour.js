export const minutesToHour = (minutes) => {
  const hour = Math.floor(minutes / 60);
  const minute = minutes - hour * 60;

  return { hour, minute };
};

export default minutesToHour;
