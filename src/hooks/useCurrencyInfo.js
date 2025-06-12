import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://open.er-api.com/v6/latest/${currency.toUpperCase()}`
        );
        const json = await res.json();

        if (json && json.result === "success") {
          setData(json.rates); // 'rates' contains all currency values
        } else {
          setData({});
          console.error("Invalid API response:", json);
        }
      } catch (err) {
        console.error("Failed to fetch currency data:", err);
        setData({});
      }
    };

    fetchData();
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
