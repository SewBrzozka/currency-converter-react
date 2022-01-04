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
    <form className="exchange" onSubmit={onSubmit}>
      <fieldset className="exchange__template">
        <legend className="exchange__header">KANTOR</legend>
        <p>
          <label>
            <span className="exchange__text">PLN:</span>
            <input
              value={amount}
              onChange={({ target }) => setAmount(target.value)}
              placeholder="Wpisz kwotę w złotówkach"
              className="exchange__window"
              required type="number"
              min="0"
              step="0.01"
            />
          </label>
        </p>
        <p>
          <label>
            <span className="exchange__text">Wybierz walutę:</span>
            <select
              className="exchange__window"
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
              )))}
            </select>
          </label>
        </p>
      </fieldset>
      <p>
        <button className="exchange__button">Oblicz kurs</button>
      </p>

      <Result result={result} />
    </form>
  )
}