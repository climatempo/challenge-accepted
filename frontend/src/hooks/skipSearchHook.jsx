import { useEffect, useState } from "react";

export function useSkipSearch(value, timeout, callback) {
  const [timer, setTimer] = useState(null);
  const clearTimer = () => {
    if (timer) clearTimeout(timer);
  };
  useEffect(() => {
    clearTimer();

    if (value && callback) {
      const newTimer = setTimeout(callback, timeout);
      setTimer(newTimer);
    }
    // eslint-disable-next-line
  }, [value]);
}
