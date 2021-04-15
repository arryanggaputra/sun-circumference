const express = require("express");
const app = express();

let cacheLength = 1;

const getManualCalculationPi = () => {
  let i = 1n;
  let x = 3n * 10n ** 1020n;
  let pi = x;
  while (x > 0) {
    x = (x * i) / ((i + 1n) * 4n);
    pi += x / (i + 2n);
    i += 2n;
  }
  return pi / 10n ** 20n;
};

const cachePi = String(getManualCalculationPi());

const getPiValue = (length) => {
  let pi = cachePi.substring(0, length);
  if (length > 1) {
    pi = pi.replace(cachePi.charAt(0), `${cachePi.charAt(0)}.`);
  }
  return pi;
};

const getPi = () => {
  try {
    return getPiValue(cacheLength);
  } catch (error) {
    cacheLength = 1;
    return getPi();
  }
};

app.get("/api/pi", (_, res) => {
  res.json({
    data: getPi(),
  });
});

app.put("/api/pi", (_, res) => {
  cacheLength = cacheLength + 1;
  res.json({
    data: getPi(),
  });
});

app.post("/api/pi/reset", (_, res) => {
  cacheLength = 1;
  res.json({
    data: getPi(),
  });
});

app.listen(3311, () =>
  console.log("Express server is running on localhost:3001")
);
