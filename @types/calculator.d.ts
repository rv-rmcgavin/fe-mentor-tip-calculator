export interface Calculator {
  activePercentIndex: number;
  customPercent: string;
  bill: number;
  numOfPeople: number;
  handleReset?: () => void;
}