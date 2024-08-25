import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <HeroSection>
      <HeroBackground>
        <HeroContent>
          <AppointmentBox>
            <h2>Schedule Your Appointment Online</h2>
            <form>
              <label htmlFor="doctor">Select Doctor:</label>
              <select id="doctor" name="doctor">
                <option value="doctor1">Dr. Diwakar</option>
                <option value="doctor2">Dr. Jitender</option>
              </select>

              <label htmlFor="location">Select Location:</label>
              <select id="location" name="location">
                <option value="location1">Delhi</option>
                <option value="location2">Gurugram</option>
              </select>

              <Link to="/appointment">
                <button type="button">Book Appointment</button>
              </Link>
            </form>
          </AppointmentBox>
        </HeroContent>
      </HeroBackground>
      <FloatingCallButton href="tel:+911234567890">
        <span className="icon">📱</span>
        <span className="tooltip">Call Us: +91-123-456-7890</span>
      </FloatingCallButton>
    </HeroSection>
  );
};

const HeroSection = styled.section`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const HeroBackground = styled.div`
  background-image: url('hospital front.png');
  background-size: cover;
  background-position: center;
  height: 100%;
  width: 100%;
  position: relative;
`;

const HeroContent = styled.div`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding: 20px;
`;

const AppointmentBox = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 12px;
  padding: 20px;
  max-width: 400px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  position: relative;
  animation: slideIn 1s ease-out;
  margin-right: 120px;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  h2 {
    margin-bottom: 20px;
  }

  label {
    margin-bottom: 5px;
    color: #333;
  }

  select, button {
    padding: 10px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }

  select {
    background: rgba(255, 255, 255, 0.9);
  }

  button {
    background-color: #b30000;
    color: #fff;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: #a10000;
  }

  @keyframes slideIn {
    from {
      transform: translateX(100%);
    }
    to {
      transform: translateX(0);
    }
  }
`;

const FloatingCallButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #b30000;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  transition: background-color 0.3s ease;

  .tooltip {
    display: none;
    position: absolute;
    bottom: 100%;
    left: 50%;
    transform: translateX(-50%);
    background: #333;
    color: #fff;
    padding: 5px;
    border-radius: 4px;
    font-size: 14px;
    white-space: nowrap;
  }

  &:hover {
    background-color: #a10000;

    .tooltip {
      display: block;
    }
  }
`;

export default Home;
