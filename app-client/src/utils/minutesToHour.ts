export const minutesToHour = (
  minutes: number
): { hour: number; minute: number } => {
  const hour = Math.floor(minutes / 60);
  const minute = minutes - hour * 60;

  return { hour, minute };
};

export default minutesToHour;
