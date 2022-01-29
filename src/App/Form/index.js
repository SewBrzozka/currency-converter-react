import { useState } from "react";
import { Result } from "./Result";
import { Label, Button, WrapperButton, Info, Loading, Failure } from "./styled";
import { useRatesDate } from "./useRatesData";

export const Form = () => {
  const [currency, setCurrency] = useState("USD");
  const [result, setResult] = useState();
  const [amount, setAmount] = useState("");
  const ratesData = useRatesDate();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency]

    setResult({
      sourceAmount: +amount,
      targetAmount: amount * rate,
      currency,
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  const onReset = (event) => {
    event.preventDefault();
    setAmount("");
    setResult();
    setCurrency("EUR");
  };

  return (
    <form onSubmit={onSubmit} onReset={onReset}>
      {ratesData.state === "loading"
        ? (
          <Loading>
            Sekundka... <br />Ładuję kursy walut z Europejskiego Banku Centralnego..
          </Loading>
        )
        : (
          ratesData.state === "error" ? (
            <Failure>
              Hmm... coś poszło nie tak... Sprawdź czy masz połączenie z internetem, jeśli tak to błąd jest po naszej stronie. Skontaktuj się z SB
            </Failure>
          ) : (
            <>
              <p>
                <Label>
                  Podaj kwotę w zł:
                  <input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    placeholder="Wpisz kwotę"
                    required type="number"
                    min="0"
                    step="0.01"
                  />
                </Label>
              </p>
              <p>
                <Label>
                  Wybierz walutę:
                  <select
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                  >
                    {Object.keys(ratesData.rates).map((currency => (
                      <option
                        key={currency}
                        value={currency}
                      >
                        {currency}
                      </option>
                    )))};
                  </select>
                </Label>
              </p>
              <WrapperButton>
                <Button type="submit">
                  Przelicz!
                </Button>
              </WrapperButton>
              <Info>
                Kursy walut pobierane są z Europejskiego Banku Centralnego.<br /> na dzień {ratesData.date}.
              </Info>
              <Result result={result} />
            </>
          )
        )
      }
    </form>
  )
};