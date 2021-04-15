const express = require("express");
const app = express();

let cacheLength = 0;

const getPi = () => {
  try {
    let pi = Math.PI.toFixed(cacheLength);
    return pi;
  } catch (error) {
    cacheLength = 0;
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
  cacheLength = 0;
  res.json({
    data: getPi(),
  });
});

app.listen(3311, () =>
  console.log("Express server is running on localhost:3001")
);
