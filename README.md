# Currency Converter – Black & White Theme Styling Guide

This guide provides styling for a clean, modern currency converter with a professional black & white theme and bold typography.

---

## 🔁 Swap Button (Professional Look)

```jsx
<button
  type="button"
  onClick={swap}
  className="px-5 py-2 rounded-md bg-gradient-to-r from-white/10 to-white/20 text-white font-bold border border-white/30 shadow-md hover:from-white/20 hover:to-white/30 hover:shadow-lg transition-all duration-300 ease-in-out"
>
  ⇄ Swap
</button>
```

### Features:
- Gradient background (`from-white/10 to-white/20`)
- Bold white text with subtle hover effects
- Rounded corners and soft shadows
- Smooth transition animations

---

## 🧾 InputBox Styling

```jsx
<input
  type="number"
  value={amount}
  onChange={(e) => onAmountChange?.(e.target.value)}
  disabled={amountDisable}
  className="w-full px-4 py-2 rounded-lg border border-white/20 bg-white/10 text-white font-bold placeholder-white/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50"
/>

<select
  value={selectCurrency}
  onChange={(e) => onCurrencyChange?.(e.target.value)}
  className="ml-2 px-3 py-2 rounded-lg border border-white/20 bg-white/10 text-white font-bold shadow-sm focus:outline-none focus:ring-2 focus:ring-white/50"
>
  {currencyOptions.map((currency) => (
    <option key={currency} value={currency} className="text-black">
      {currency}
    </option>
  ))}
</select>
```

---

## 📦 Container Suggestion (for `App.jsx`)

```jsx
<div className="min-h-screen w-full flex justify-center items-center bg-black text-white font-bold">
  {/* Inner converter UI */}
</div>
```

---

## 📝 Notes

- Tailwind CSS is used for all styling.
- All text is `font-bold` for clarity.
- Backgrounds are semi-transparent white on black for elegance.
- Use `backdrop-blur-sm` and `bg-white/20` for container elements to maintain contrast.
