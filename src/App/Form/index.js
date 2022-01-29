import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import { Label, Button, WrapperButton } from "./styled";

export const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].short);
  const [amount, setAmount] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  }

  return (
    <form className="form" onSubmit={onSubmit}>
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
            {currencies.map((currency => (
              <option
                key={currency.short}
                value={currency.short}
              >
                {currency.name}
              </option>
            )))};
          </select>
        </Label>
      </p>
      <WrapperButton>
        <Button>
          Przelicz!
        </Button>
      </WrapperButton>
      <Result result={result} />
    </form>
  )
}