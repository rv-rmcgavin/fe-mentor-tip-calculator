import PeopleStyled from "./PeopleStyled";

const People = ({ numOfPeople, setNumOfPeople }: { numOfPeople: number, setNumOfPeople: React.Dispatch<React.SetStateAction<number>> }) => {

  const handleNumOfPeople = (event: React.BaseSyntheticEvent): void => {
    const num: number = Number(event.target.value);
    if (num >= 1) setNumOfPeople(num);
  }

  return (
    <PeopleStyled>
      <label htmlFor="people" className="people-input">Number of people</label>
      <input
        type="number"
        name="people"
        id="people"
        value={numOfPeople}
        onChange={e => handleNumOfPeople(e)}
      />
    </PeopleStyled>
  )
};

export default People;