import React from 'react';

const LoadMoreBtn = ({ text, onClick }) => (
  <div className="rmdb-loadmorebtn" onClick={onClick}>
    <p>{text}</p>
  </div>
);

export default LoadMoreBtn;