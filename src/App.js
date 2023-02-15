import React, { useState } from 'react';

const AHPForm = () => {
  const [numCriteria, setNumCriteria] = useState(5); // starting with 5 criteria

  const handleNumCriteriaChange = (event) => {
    setNumCriteria(parseInt(event.target.value));
  };

  // array of all possible combinations of criteria
  const combinations = [];
  for (let i = 1; i <= numCriteria; i++) {
    for (let j = i + 1; j <= numCriteria; j++) {
      combinations.push(`${i}-${j}`);
    }
  }

  return (
    <div>
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
      <table>
        <thead>
          <tr>
            <th>More important <br></br> criterion (A or B) </th>
            <th>How much more important?</th>
          </tr>
        </thead>
        <tbody>
          {combinations.map((combination) => (
            <tr key={combination}>
              <td>
              <label>
                  <input type="radio" name={combination} value={combination.split('-')[0]} />
                  {combination.split('-')[0]}
                </label>
                <label>
                  <input type="radio" name={combination} value={combination.split('-')[1]} />
                  {combination.split('-')[1]}
                </label>
              </td>
              <td>
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
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

