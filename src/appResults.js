import React, { useState, useEffect } from 'react';
import './AHPForm.css';
import logo from './logo.png';

const appResults = ({ criteriaNames }) => {
  const [weights, setWeights] = useState([]);

  //it takes the jason file with the weights from flask
  //this assumes that our Flask backend has a route called /api/weights 
  //that returns a JSON object with a weights key that contains a list of 
  //weight values
  useEffect(() => {
    fetch('/api/weights')
      .then(response => response.json())
      .then(data => setWeights(data.weights));
  }, []);

  return (
    <div align='center'>
      <div class="top-bar"></div>
      <div class="horizontal-line"></div>
      <div class="horizontal-line-pink"></div>
      <div class="horizontal-line-blue"></div>
        <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <br/>
      <div className='header'>
        <h1 className='header-title'>AHP</h1>
      </div>
      <br/>
      
      <table className ='outlined-box'>
        <thead>
          <tr>
            <th>Criterion Name</th>
            <th>Weight</th>
          </tr>
        </thead>
        <tbody>
          {weights.map((weight, index) => (
            <tr key={index}>
              <td>{criteriaNames[index]}</td>
              <td>{weight}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TablePage;