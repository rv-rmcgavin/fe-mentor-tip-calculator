import React, { useState } from 'react';
import CalculatorStyled from "./CalculatorStyled";
import { TIP_PERCENT } from "../../constants";

const Calculator = () => {
  // ?How do I type these things below? Do I need to?
  const [bill, setBill] = useState(0);
  const [activePercentIndex, setActivePercentIndex] = useState(-1);
  const [customPercent, setCustomPercent] = useState("")
  const [numOfPeople, setNumOfPeople] = useState(1);
  const tipPercentage: number = TIP_PERCENT[activePercentIndex] || Number(customPercent) || 0;
  const tipDecimal: number = tipPercentage / 100;
  const tipTotal: number = bill * tipDecimal;
  const tipPerPerson: number = tipTotal / numOfPeople;
  const totalPerPerson: number = (bill + tipTotal) / numOfPeople;

  const displayTipPerPerson: string = tipPerPerson.toFixed(2);
  const displayTotalPerPerson: string = totalPerPerson.toFixed(2);

  const handlePercentButton = (event: React.BaseSyntheticEvent): void => {
    const buttonPercent: number = Number(event.target.value.substring(0, event.target.value.length - 1));
    const activeIndex: number = TIP_PERCENT.indexOf(buttonPercent);
    setCustomPercent("");
    setActivePercentIndex(activeIndex);
  }

  const handleCustomPercent = (event: React.BaseSyntheticEvent): void => {
    const num: number = Number(event.target.value);
    if (num >= 0 && num <= 100) setCustomPercent(event.target.value);
  }

  const handleNumOfPeople = (event: React.BaseSyntheticEvent): void => {
    const num: number = Number(event.target.value);
    if (num >= 1) setNumOfPeople(num);
  }

  return (
    <CalculatorStyled>
      <div className="bill">
        <label htmlFor="bill">Bill</label>
        <input
          type="number"
          name="bill"
          id="bill"
          step="0.01"
          value={bill}
          onChange={e => setBill(Number(e.target.value))} />
      </div>
      <div className="tip-percent">
        <label htmlFor="custom-tip">Select Tip %</label>
        <div className="button-container">
          {TIP_PERCENT.map((item: number, index: number) => (
            <input
              className={`percent-button ${index === activePercentIndex && 'percent-button--active'}`}
              key={item}
              type="button"
              value={`${item}%`}
              onClick={e => handlePercentButton(e)}
            />
          ))}
          <input
            type="number"
            name="tip-percent"
            id="tip-percent"
            value={customPercent}
            placeholder="Custom"
            onChange={e => handleCustomPercent(e)}
            onFocus={() => setActivePercentIndex(-1)}
          />
        </div>
      </div>
      <div className="people">
        <label htmlFor="people">Number of people</label>
        <input
          type="number"
          name="people"
          id="people"
          value={numOfPeople}
          onChange={e => handleNumOfPeople(e)}
        />
      </div>
      <div className="output">
        <div className="line-item">
          <div>
            <div className="label">Tip amount</div>
            <div className="per">/ person</div>
          </div>
          <div className="amount">${displayTipPerPerson}</div>
        </div>
        <div className="line-item">
          <div>
            <div className="label">Total</div>
            <div className="per">/ person</div>
          </div>
          <div className="amount">${displayTotalPerPerson}</div>
        </div>
        <input type="button" value="Reset" />
      </div>
    </CalculatorStyled>
  )
}

Calculator.displayName = 'Calculator'

export default Calculator;
