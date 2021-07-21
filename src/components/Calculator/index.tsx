import React, { useState } from 'react';
import CalculatorStyled from "./CalculatorStyled";
import Bill from '../Bill';
import TipPercent from '../TipPercent';
import People from '../People';
import Display from '../Display';

const Calculator = () => {
  // *The formatting here is awful. There must be some sort of good es-lint thing I can use here
  const
    [bill, setBill]:
      [bill: number, setBill: React.Dispatch<React.SetStateAction<number>>] = useState(0);
  const
    [activePercentIndex, setActivePercentIndex]:
      [activePercentIndex: number, setActivePercentIndex: React.Dispatch<React.SetStateAction<number>>] = useState(-1);
  const
    [customPercent, setCustomPercent]:
      [customPercent: string, setCustomPercent: React.Dispatch<React.SetStateAction<string>>] = useState("")
  const
    [numOfPeople, setNumOfPeople]:
      [numOfPeople: number, setNumOfPeople: React.Dispatch<React.SetStateAction<number>>] = useState(1);

  const handleReset = (): void => {
    setBill(0);
    setActivePercentIndex(-1);
    setCustomPercent("");
    setNumOfPeople(1);
  }

  return (
    <CalculatorStyled>
      <Bill bill={bill} setBill={setBill} />
      <TipPercent
        setCustomPercent={setCustomPercent}
        setActivePercentIndex={setActivePercentIndex}
        activePercentIndex={activePercentIndex}
        customPercent={customPercent}
      />
      <People numOfPeople={numOfPeople} setNumOfPeople={setNumOfPeople} />
      <Display
        bill={bill}
        activePercentIndex={activePercentIndex}
        customPercent={customPercent}
        numOfPeople={numOfPeople}
        handleReset={handleReset}
      />
    </CalculatorStyled>
  )
}

Calculator.displayName = 'Calculator'

export default Calculator;
