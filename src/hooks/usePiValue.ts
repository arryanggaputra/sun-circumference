import { useCallback, useEffect, useState } from "react";
import ApiClient from "../lib/ApiClient";

const usePiValue = () => {
  const [piValue, setPiValue] = useState("3");

  const getInitialPi = useCallback(async () => {
    let doRequest = await ApiClient("/api/pi");
    setPiValue(doRequest.data);
  }, []);

  const increasePi = useCallback(async () => {
    let doRequest = await ApiClient("/api/pi", {
      method: "PUT",
    });
    setPiValue(doRequest.data);
  }, []);

  const resetPi = useCallback(async () => {
    let doRequest = await ApiClient("/api/pi/reset", {
      method: "POST",
    });
    setPiValue(doRequest.data);
  }, []);

  useEffect(() => {
    getInitialPi();
  }, [getInitialPi]);

  return {
    piValue,
    increasePi,
    resetPi,
  };
};

export default usePiValue;
