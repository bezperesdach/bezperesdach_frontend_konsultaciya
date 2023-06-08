export const showAndHideError = (callback: () => void, delayedCallback: () => void, delay: number) => {
  callback();
  setTimeout(() => delayedCallback(), delay);
};

export const isDevelopment = process.env.NODE_ENV === "development";

export const convertBytesToAppropriateUnit = (bytes: number): string => {
  if (bytes < 1024) {
    return bytes + " Б";
  } else if (bytes < 1024 * 1024) {
    return (bytes / 1024).toFixed(2) + " КБ";
  } else if (bytes < 1024 * 1024 * 1024) {
    return (bytes / (1024 * 1024)).toFixed(2) + " МБ";
  } else {
    return (bytes / (1024 * 1024 * 1024)).toFixed(2) + " ГБ";
  }
};

export function getLastDayOfYear(): string {
  const today = new Date();
  const year = today.getFullYear();
  const lastDay = new Date(year, 11, 31); // 11 represents December (0-based index)

  return lastDay.toISOString();
}

export const roundTo = (n: number, decimalPlaces: number): number => {
  // Check if the number has fewer decimal places than the specified number
  if (n.toString().split(".")[1]?.length < decimalPlaces) {
    // If it does, return the original number
    return n;
  } else {
    // Otherwise, round the number to the specified number of decimal places
    const factor = Math.pow(10, decimalPlaces);
    return Math.round(n * factor) / factor;
  }
};

export const shuffleArray = <T>(array: T[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const getFullDateStr = (dateStr: string, inclYear = true) => {
  const MONTHS = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"];
  const dc = dateStr.match(/(\d{1,2}).(\d{1,2}).(\d{4})/);
  if (dc) {
    dc.splice(0, 1);
    dc[1] = MONTHS[+dc[1] - 1];
    return inclYear ? dc.join(" ") : `${dc[0]} ${dc[1]}`;
  }
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function throttle<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let lastCall = 0;
  return ((...args: Parameters<T>): void => {
    const now = Date.now();
    if (now - lastCall >= delay) {
      lastCall = now;
      func.apply(null, args);
    }
  }) as T;
}

export function clamp(input: number, min: number, max: number): number {
  return input < min ? min : input > max ? max : input;
}

export function map(current: number, in_min: number, in_max: number, out_min: number, out_max: number): number {
  const mapped: number = ((current - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return clamp(mapped, out_min, out_max);
}

export function debounce<F extends (...args: Parameters<F>) => ReturnType<F>>(
  func: F,
  waitFor: number
): (...args: Parameters<F>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<F>): void => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), waitFor);
  };
}

export const getNoun = (number: number, one: string, two: string, five: string) => {
  let n = Math.abs(number);
  n %= 100;
  if (n >= 5 && n <= 20) {
    return five;
  }
  n %= 10;
  if (n === 1) {
    return one;
  }
  if (n >= 2 && n <= 4) {
    return two;
  }
  return five;
};

export const hoursToWordAndNumber = (hours: number) => {
  if (hours >= 24) {
    return { amount: hours / 24, word: getNoun(hours / 24, "дня", "дней", "дней") };
  } else {
    return { amount: hours, word: getNoun(hours, "часа", "часов", "часов") };
  }
};

export const getYYYYmmddFromDate = (date: Date) => {
  const offset = date.getTimezoneOffset();
  const accurateDate = new Date(date.getTime() - offset * 60 * 1000);
  return accurateDate.toISOString().split("T")[0];
};
