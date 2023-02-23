import React, { useState } from 'react';
import './AHPForm.css';
import logo from './logo.png';


const AHPForm = () => {
  const [importanceValues, setImportanceValues] = useState({});
  const [numCriteria, setNumCriteria] = useState(4); // starting with 4 criteria
  const [criteriaNames, setCriteriaNames] = useState(Array(numCriteria).fill(''));

  const handleNumCriteriaChange = (event) => {
    const newNumCriteria = parseInt(event.target.value);
    setNumCriteria(newNumCriteria);
    setCriteriaNames(Array(newNumCriteria).fill(''));
    const newImportanceValues = {};
    for (let i = 1; i <= newNumCriteria; i++) {
      for (let j = i + 1; j <= newNumCriteria; j++) {
        newImportanceValues[`${i}-${j}`] = '';
      }
    }
    setImportanceValues(newImportanceValues);
  };

  const handleCriteriaNameChange = (event, index) => {
    const newCriteriaNames = [...criteriaNames];
    newCriteriaNames[index] = event.target.value;
    setCriteriaNames(newCriteriaNames);
  };

  const [selectedAnswers, setSelectedAnswers] = useState({});
  //save the answers
  const handleChange = (e) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [e.target.name]: e.target.checked,
    });
  };
  const [criteria, setCriteria] = useState("");
  const [importance, setImportance] = useState("");

  // array of all possible combinations of criteria
  const combinations = [];
  for (let i = 1; i <= numCriteria; i++) {
    for (let j = i + 1; j <= numCriteria; j++) {
      combinations.push(`${i}-${j}`);
    }
  }

  return (
    <div align ='center'>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <br />
      <div className='header'>
        <h1 className='header-title'>AHP</h1>
      </div>
      <br />
    <div className='outlined-box' align='center'>
      <label>
      Number of criteria:
      <input
        type="number"
        value={numCriteria}
        min={1}
        max={10}
        onChange={handleNumCriteriaChange}
      />
    </label>
  </div>
  <br />
  <br />
    <table className='outlined-box'>
      <thead>
        <tr>
         <th>Criteria</th>
        </tr>
      </thead>
      <tbody>
        {criteriaNames.map((name, index) => (
          <tr key={index}>
            <td>
              <label>
                {`Criterion ${index + 1} name:`}
                <input
                 type="text"
                  value={name}
                  onChange={(event) => handleCriteriaNameChange(event, index)}
                />
              </label>
            </td>
          </tr>
      ))}
    </tbody>
  </table>
  <br />
  <br />
  <table className ='outlined-box'>
    <thead>
      <tr>
        <th>More important <br /> criterion </th>
        <th >Factor of greater importance</th>
      </tr>
    </thead>
    <tbody >
      {combinations.map((combination, index) => (
        <tr key={combination}>
          <td align='left'>
            <label>
              <input
                type="radio"
                name={combination}
                value={combination.split("-")[0]}
              />
              {criteriaNames[combination.split("-")[0] - 1] ||
                `Criterion ${combination.split("-")[0]}`}
            </label>
            <label>
              <input
                type="radio"
                name={combination}
                value={combination.split("-")[1]}
              />
              {criteriaNames[combination.split("-")[1] - 1] ||
                `Criterion ${combination.split("-")[1]}`}
            </label>
          </td>
          <td className="select-td">
          <select
            value={importanceValues[combination]}
            onChange={(e) =>
              setImportanceValues({
                ...importanceValues,
                [combination]: e.target.value,
              })
            }
          >
              <option value="">--</option>
              {Array.from({ length: 9 }, (_, i) => i + 1).map((num) => (
                <option key={num} value={num}>
                  {num}
                </option>
              ))}
            </select>
          </td>
        </tr>
        ))}
      </tbody>
    </table>
   


  </div>
  );
};

export default AHPForm;
