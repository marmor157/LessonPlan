export interface IFormatTime {
  hour: number;
  minute: number;
}

export const formatTime = (time: IFormatTime): [string, string] => {
  const { hour, minute } = time;
  const hourFormatted = hour < 10 ? "0" + hour : "" + hour;
  const minuteFormatted = minute < 10 ? "0" + minute : "" + minute;

  return [hourFormatted, minuteFormatted];
};

export default formatTime;
