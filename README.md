# Sun Circumference and Pi Accuracy

This project was bootstrapped with ReactJS, ExpressJs, TailwindCSS.

## Available Hooks
| Endpoint | Description |
 ------------- | ------------- |
|  `src/hooks/usePiValue.ts`  | reuse Pi logic in React  |
|  `src/hooks/useSunCircumference.ts`  | reuse circumference logic in React  |


## Available API endpoint

| Method  | Endpoint | Description |
| ------------- | ------------- | ------------- |
| `GET`  | `/api/pi`  | get the servers’ current known value of Pi  |
| `PUT`  | `/api/pi`  | increase Pi accuracy. e.g. 3, 3.1, 3.14, 3.141, 3.1415... etc |
| `POST`  | `api/pi/reset`  | reset Pi accuracy to initial value |
