import { useState } from "react";

export default function Person() {
  const [person, setPerson] = useState({ name: "John", age: 100 });

  // GOOD - Do this!
  const handleIncreaseAge = () => {
    // copy the existing person object into a new object
    // while updating the age property
    const newPerson = { ...person, age: person.age + 1 };
    setPerson(newPerson);
  };

  return (
    <>
      <h1>{person.name}</h1>
      <h2>{person.age}</h2>
      <button onClick={handleIncreaseAge}>Increase age</button>
      <input value={value} onChange={onFirstNameChange}></input>
    </>
  );
}
