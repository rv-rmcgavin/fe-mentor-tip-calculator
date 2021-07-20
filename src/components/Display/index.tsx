import DisplayStyled from "./DisplayStyled";
import { TIP_PERCENT } from "../../constants";

const Display = (
  { bill, activePercentIndex, customPercent, numOfPeople }:
    { bill: number, activePercentIndex: number, customPercent: string, numOfPeople: number }
) => {
  // TODO: Most of this should probably be abstracted a way to a function that returns just my final array of objects `lineItemData`
  const tipPercentage: number = TIP_PERCENT[activePercentIndex] || Number(customPercent) || 0;
  const tipDecimal: number = tipPercentage / 100;
  const tipTotal: number = bill * tipDecimal;
  const tipPerPerson: number = tipTotal / numOfPeople;
  const totalPerPerson: number = (bill + tipTotal) / numOfPeople;
  const displayTipPerPerson: string = tipPerPerson.toFixed(2);
  const displayTotalPerPerson: string = totalPerPerson.toFixed(2);
  const lineItemData: { label: string, amount: string }[] = [
    {
      label: 'Tip amount',
      amount: displayTipPerPerson,
    },
    {
      label: 'Total',
      amount: displayTotalPerPerson,
    },
  ];
  return (
    <DisplayStyled>
      {lineItemData.map((item) => (
        <div key={item.label} className="line-item">
          <div>
            <div className="label">{item.label}</div>
            <div className="per">/ person</div>
          </div>
          <div className="amount">${item.amount}</div>
        </div>
      ))}
      <input type="button" value="Reset" />
    </DisplayStyled>
  )
};

Display.displayName = 'Display';

export default Display;
