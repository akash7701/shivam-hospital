import React from 'react';
import './Career.css';

const Career = () => {
  return (
    <section className="career">
      <h1>Career Opportunities</h1>
      <p>Explore career opportunities at Shivam Hospital. We are always looking for talented and passionate individuals to join our team...</p>
      <div className="job-listings">
        <h2>Current Openings</h2>
        <div className="job">
          <h3>Nurse</h3>
          <p>We are hiring registered nurses with experience in patient care...</p>
        </div>
        <div className="job">
          <h3>Medical Technician</h3>
          <p>Join our team as a medical technician and contribute to our diagnostic services...</p>
        </div>
        {/* Add more job listings as needed */}
      </div>
    </section>
  );
};

export default Career;
