import { useState } from "react";
import { InputBox } from "./components";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(1);
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  const convert = () => {
    if (!currencyInfo[to]) {
      setConvertedAmount("Invalid currency");
      return;
    }
    setConvertedAmount((amount * currencyInfo[to]).toFixed(2));
  };

  return (
<div
  className="w-full h-screen flex justify-center items-center bg-black bg-no-repeat bg-cover"
  style={{
    backgroundImage: `url('https://i.pinimg.com/originals/90/70/32/9070324cdfc07c68d60eed0c39e77573.gif')`,
  }}
>
  <div className="w-full px-4">
    <div className="max-w-lg mx-auto backdrop-blur-lg bg-white/5 border border-white/20 rounded-2xl p-8 shadow-2xl text-white">
      <h2 className="text-4xl font-bold text-center mb-6 tracking-wide">
        Currency Converter
      </h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          convert();
        }}
        className="space-y-6"
      >
        <InputBox
          label="From"
          amount={amount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
          onAmountChange={(val) => setAmount(val)}
        />

        <div className="flex justify-center">
        <button
  type="button"
  onClick={swap}
  className="px-5 py-2 rounded-md bg-gradient-to-r from-white/10 to-white/20 text-white font-bold border border-white/30 shadow-md hover:from-white/20 hover:to-white/30 hover:shadow-lg transition-all duration-300 ease-in-out"
>
  ⇄ Swap
</button>

        </div>

        <InputBox
          label="To"
          amount={convertedAmount}
          currencyOptions={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
          amountDisable
        />

        <button
          type="submit"
          className="w-full bg-white text-black font-bold text-lg py-3 rounded-lg hover:bg-gray-200 transition-all"
        >
          Convert {from.toUpperCase()} to {to.toUpperCase()}
        </button>
      </form>
    </div>
  </div>
</div>


  );
}

export default App;
