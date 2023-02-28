import React from 'react';
import { useNavigate } from 'react-router-dom';

const MyComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/appResults');
  };

  return (
    <div>
      <button onClick={handleClick}>Go to other page</button>
    </div>
  );
};

export default MyComponent;