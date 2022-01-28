import { useState } from "react";
import { currencies } from "../currencies";
import { Result } from "./Result";
import "./style.css";

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
        <label className="form__label">
          Podaj kwotę w zł:
          <input
            value={amount}
            onChange={({ target }) => setAmount(target.value)}
            placeholder="Wpisz kwotę"
            className="exchange__window"
            required type="number"
            min="0"
            step="0.01"
          />
        </label>
      </p>
      <p>
        <label className="form__label">
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
        </label>
      </p>
      <p className="button">
        <button className="button__specification">Przelicz!</button>
      </p>
        <Result result={result} />
    </form>
  )
}