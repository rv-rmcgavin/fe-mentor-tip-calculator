import BillStyled from "./BillStyled";

const Bill = ({ bill, setBill }: { bill: number, setBill: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
    <BillStyled>
      <label htmlFor="bill" className="bill-input">Bill</label>
      <input
        type="number"
        name="bill"
        id="bill"
        step="0.01"
        value={bill}
        onChange={e => setBill(Number(e.target.value))} />
    </BillStyled>
  )
};

Bill.displayName = 'Bill';

export default Bill;