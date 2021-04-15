import { useEffect, useState } from "react";

const useSunCircumference = (piValue?: string) => {
  const [sunDiameter] = useState(1392684);
  const [circumference, setCircumference] = useState(0);

  useEffect(() => {
    if (!piValue) return;
    setCircumference(parseFloat(piValue) * sunDiameter);
  }, [piValue, sunDiameter]);

  return { circumference, diameter: sunDiameter };
};

export default useSunCircumference;
