import React, { useId } from 'react';

const InputBox = ({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = 'usd',
  amountDisable = false,
  currencyDisable = false,
  className = '',
}) => {
  const amountInputId = useId();

  return (
    <div className={`bg-white/10 p-4 rounded-lg flex justify-between items-center gap-4 ${className}`}>
      <div className="w-2/3">
        <label
          htmlFor={amountInputId}
          className="text-sm text-white font-bold mb-2 inline-block"
        >
          {label}
        </label>
        <input
          id={amountInputId}
          type="number"
          className="w-full px-4 py-2 rounded-md border border-white/20 bg-transparent text-white font-bold placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-white/50"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(e) => onAmountChange?.(e.target.value)}
        />
      </div>

      <div className="w-1/3">
        <label
          htmlFor={`${amountInputId}-currency`}
          className="text-sm text-white font-bold mb-2 inline-block"
        >
          Currency Type
        </label>
        <select
          id={`${amountInputId}-currency`}
          className="w-full px-3 py-2 rounded-md border border-white/20 bg-transparent text-white font-bold focus:outline-none focus:ring-2 focus:ring-white/50"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange?.(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option
              key={currency}
              value={currency}
              className="text-black"
            >
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
