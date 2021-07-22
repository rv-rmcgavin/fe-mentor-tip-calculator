import { TIP_PERCENT } from "./constants";
import { Calculator } from "../@types/calculator";

export const getLineItems = (
  { activePercentIndex, customPercent, bill, numOfPeople }: Calculator
): { label: string, amount: string }[] => {
  const tipPercentage: number = TIP_PERCENT[activePercentIndex] || Number(customPercent) || 0;
  const tipDecimal: number = tipPercentage / 100;
  const tipTotal: number = bill * tipDecimal;
  const tipPerPerson: number = tipTotal / numOfPeople;
  const totalPerPerson: number = (bill + tipTotal) / numOfPeople;
  const displayTipPerPerson: string = tipPerPerson.toFixed(2);
  const displayTotalPerPerson: string = totalPerPerson.toFixed(2);
  return [
    {
      label: 'Tip amount',
      amount: displayTipPerPerson,
    },
    {
      label: 'Total',
      amount: displayTotalPerPerson,
    },
  ];
};
