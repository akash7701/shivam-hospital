import React from 'react';
import './Appointment.css';

const Appointment = () => {
  return (
    <section className="appointment">
      <h1>Book an Appointment</h1>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <input type="tel" placeholder="Your Phone Number" required />
        <select>
          <option>Select Department</option>
          <option>Cardiology</option>
          <option>Neurology</option>
          <option>Orthopedics</option>
          {/* Add other departments */}
        </select>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Appointment;
