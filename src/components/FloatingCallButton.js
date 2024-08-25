import React from 'react';
import styled from 'styled-components';
import { FaPhoneAlt } from 'react-icons/fa';

const FloatingCallButton = () => {
  const handleClick = () => {
    window.location.href = 'tel:+91-124-4039002';
  };

  return (
    <CallButton onClick={handleClick}>
      <FaPhoneAlt />
      <span className="number">+91-124-4039002</span>
    </CallButton>
  );
};

export default FloatingCallButton;

const CallButton = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #b30000;
  color: #fff;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: background-color 0.3s ease, transform 0.3s ease;

  &:hover {
    background-color: #ff0000;
    transform: scale(1.1);
  }

  .number {
    display: none; /* Hide the number by default */
    position: absolute;
    bottom: 70px; /* Adjust based on your needs */
    right: 0;
    background-color: #fff;
    color: #b30000;
    padding: 5px 10px;
    border-radius: 5px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    font-size: 14px;
    white-space: nowrap;
  }

  &:hover .number {
    display: block;

  svg {
    font-size: 24px;
  }
`;
