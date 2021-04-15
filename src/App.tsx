import usePiValue from "./hooks/usePiValue";
import useSunCircumference from "./hooks/useSunCircumference";

function App() {
  const { piValue, resetPi, increasePi } = usePiValue();
  const { circumference, diameter } = useSunCircumference(piValue);

  return (
    <div className="container mx-auto md:max-w-lg">
      <div className="bg-gradient-to-r bg-gradient-to-r from-green-400 to-blue-500 p-5 m-10 md:mt-10 md:m-5 rounded-[0.7rem] shadow-md">
        <div className="flex flex-row justify-between items-center ">
          <h1 className="text-lg md:text-2xl font-bold text-white">
            Pi Accuracy
          </h1>
          <div className="text-4xl relative rounded-[100%] w-[40px] h-[40px] color bg-white">
            <span className="absolute top-[-2px] left-[8px]">π</span>
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.5)] rounded-[0.4rem] mt-3 py-2 px-4 flex flex-col md:flex-row items-center justify-between">
          <span className="font-bold flex-1 text-sm break-all mb-3 md:mb-0">
            {piValue}
          </span>
          <div className="flex-one">
            <button
              onClick={resetPi}
              className="text-xs bg-[transparent] text-red-500 px-3 py-1 focus:outline-none rounded-sm"
            >
              Reset
            </button>
            <button
              onClick={increasePi}
              className="text-xs bg-blue-600 text-white px-3 py-1 focus:outline-none hover:bg-blue-500 rounded-sm"
            >
              Increase
            </button>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r bg-gradient-to-r from-yellow-400 to-red-500 p-5 m-10 md:mt-10 md:m-5 rounded-[0.7rem] shadow-md">
        <div className="flex flex-row justify-between items-center ">
          <h1 className="text-lg md:text-2xl font-bold text-white">Sun</h1>
          <div>
            <img
              width="40px"
              src="https://upload.wikimedia.org/wikipedia/commons/c/c2/Emoji_u2600.svg"
              className="animate-spin"
              alt="sun icon"
            />
          </div>
        </div>
        <div className="bg-[rgba(255,255,255,0.5)] rounded-[0.4rem] mt-3 py-2 px-4 flex flex-col md:flex-row items-center justify-between">
          <span className="font-bold flex-1 text-sm break-all mb-3 md:mb-0">
            Diameter = {Intl.NumberFormat("MY").format(diameter)} KM
            <br />
            Circumference = {Intl.NumberFormat("MY").format(circumference)} KM
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
