const Bill = ({ bill, setBill }: { bill: number, setBill: React.Dispatch<React.SetStateAction<number>> }) => {
  return (
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
  )
};

Bill.displayName = 'Bill';

export default Bill;