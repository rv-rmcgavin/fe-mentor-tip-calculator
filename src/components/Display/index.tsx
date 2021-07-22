import { Calculator } from "../../../@types/calculator";
import DisplayStyled from "./DisplayStyled";
import { getLineItems } from "../../util";

const Display = ({ bill, activePercentIndex, customPercent, numOfPeople, handleReset }: Calculator) => {
  const lineItemData: { label: string, amount: string }[] = getLineItems({ bill, activePercentIndex, customPercent, numOfPeople });
  const isDisabled: boolean = !bill && activePercentIndex < 0 && !customPercent && numOfPeople === 1;
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
      <input
        disabled={isDisabled}
        className="reset"
        type="button"
        value="Reset"
        onClick={handleReset}
      />
    </DisplayStyled>
  )
};

Display.displayName = 'Display';

export default Display;
