import { useState, useEffect } from "react";

export const useRatesDate = () => {
    const [ratesData, setRatesData] = useState({
        state: "loading",
    });


    useEffect(() => {
        const fetchRates = async () => {
            try {
                const response = await fetch("https://api.exchangerate.host/latest?base=PLN");

                if (!response.ok) {
                    throw new Error(response.statusText);
                }

                const { rates, date } = await response.json();
                console.log(rates, date);

                setRatesData({
                    state: "success",
                    rates,
                    date,
                });

            } catch (error) {
                setRatesData({
                    state: "error",
                });
            };
        };

        setTimeout(fetchRates, 1500);
    }, []);

    return ratesData;
};