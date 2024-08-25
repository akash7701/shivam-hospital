import React from 'react';
import './Doctors.css';

const Doctors = () => {
  return (
    <section className="doctors">
      <h1>Meet Our Doctors</h1>
      <p>Our team of highly qualified doctors is here to provide the best care possible.</p>
      <div className="doctor-profiles">
        <div className="doctor">
          <img src="doctor1.jpg" alt="Dr. Smith" />
          <h2>Dr. John Smith</h2>
          <p>Cardiologist with 15 years of experience.</p>
        </div>
        <div className="doctor">
          <img src="doctor2.jpg" alt="Dr. Doe" />
          <h2>Dr. Jane Doe</h2>
          <p>Neurologist specializing in stroke and epilepsy.</p>
        </div>
        <div className="doctor">
          <img src="doctor3.jpg" alt="Dr. Brown" />
          <h2>Dr. Mike Brown</h2>
          <p>Orthopedic surgeon with expertise in joint replacement.</p>
        </div>
        <div className="doctor">
          <img src="doctor4.jpg" alt="Dr. Green" />
          <h2>Dr. Emily Green</h2>
          <p>Pediatrician with a passion for child healthcare.</p>
        </div>
        {/* Add more doctor profiles as needed */}
      </div>
    </section>
  );
};

export default Doctors;
