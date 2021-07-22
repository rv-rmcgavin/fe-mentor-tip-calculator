import TipPercentStyled from "./TipPercentStyled";
import { TIP_PERCENT } from "../../constants";

const TipPercent = ({ setCustomPercent, setActivePercentIndex, activePercentIndex, customPercent }: { setCustomPercent: React.Dispatch<React.SetStateAction<string>>, setActivePercentIndex: React.Dispatch<React.SetStateAction<number>>, activePercentIndex: number, customPercent: string }) => {

  const handlePercentButton = (event: React.BaseSyntheticEvent): void => {
    const buttonPercent: number = Number(event.target.value.substring(0, event.target.value.length - 1));
    const activeIndex: number = TIP_PERCENT.indexOf(buttonPercent);
    setCustomPercent("");
    setActivePercentIndex(activeIndex);
  }

  const handleCustomPercent = (event: React.BaseSyntheticEvent): void => {
    const num: number = Number(event.target.value);
    if (num >= 1 && num <= 100) setCustomPercent(event.target.value);
  }

  return (
    <TipPercentStyled>
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
    </TipPercentStyled>
  )
};

TipPercent.displayName = 'TipPercent';

export default TipPercent;
