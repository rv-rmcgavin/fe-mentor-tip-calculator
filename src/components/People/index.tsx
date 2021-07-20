const People = ({ numOfPeople, setNumOfPeople }: { numOfPeople: number, setNumOfPeople: React.Dispatch<React.SetStateAction<number>> }) => {

  const handleNumOfPeople = (event: React.BaseSyntheticEvent): void => {
    const num: number = Number(event.target.value);
    if (num >= 1) setNumOfPeople(num);
  }

  return (
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
  )
};

export default People;