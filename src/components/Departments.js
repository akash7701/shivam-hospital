import React from 'react';
import './Departments.css';

const Departments = () => {
  return (
    <section className="departments">
      <h1>Our Departments</h1>
      <div className="department">
        <h2>Cardiology</h2>
        <p>Our cardiology department offers comprehensive care for heart-related conditions...</p>
      </div>
      <div className="department">
        <h2>Neurology</h2>
        <p>We provide specialized care for neurological disorders and conditions...</p>
      </div>
      {/* Add more departments as needed */}
    </section>
  );
};

export default Departments;
