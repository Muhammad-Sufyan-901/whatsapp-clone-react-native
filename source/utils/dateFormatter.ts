export const hourFormatter = (date: Date): string => {
  return `${date.getHours()}.${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
};

export const hourFormatterFull = (date: Date): string => {
  return `${date.getHours()}.${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}.${date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds()}`;
};

export const dateDayFormatter = (date: Date): string => {
  const today = new Date();

  if (today.getDate() > date.getDate()) {
    return `Kemarin ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}.${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  } else {
    return `Hari ini ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}.${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  }
};

export const dateDayFormatterWithLastSeenTemplate = (date: Date): string => {
  const today = new Date();

  if (today.getDate() > date.getDate()) {
    return `Terakhir dilihat kemarin pukul ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}.${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  } else {
    return `Terakhir dilihat hari ini pukul ${date.getHours() < 10 ? `0${date.getHours()}` : date.getHours()}.${date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes()}`;
  }
};

export const dateMonthFormatter = (date: Date): string => {
  const months: string[] = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return `${date.getDate()} ${months[date.getMonth()]}`;
};

export const fullDateFormatter = (date: Date): string => {
  return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}`;
};

export const fullDateFormatterWithAlpabethicMonth = (date: Date): string => {
  const months: string[] = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];

  return `${date.getDate()} ${months[date.getMonth()]} ${date.getHours()}.${date.getMinutes()}`;
};

export const fullDateTimeFormatter = (date: Date): string => {
  return `${date.getFullYear()}/${date.getMonth()}/${date.getDate()} ${hourFormatterFull(date)}`;
};

export const dateFormatterBasedOnStartedAtAndEndedAtDifferences = (startedAt: Date, endedAt: Date): string => {
  const hourDifferences: number = endedAt.getHours() - startedAt.getHours();
  const minuteDifferences: number = endedAt.getMinutes() - startedAt.getMinutes();
  const secondDifferences: number = endedAt.getSeconds() - startedAt.getSeconds();

  return `${Math.abs(hourDifferences)}.${Math.abs(minuteDifferences) < 0 ? `0${minuteDifferences}` : minuteDifferences}.${Math.abs(secondDifferences) < 0 ? `0${secondDifferences}` : secondDifferences}`;
};
