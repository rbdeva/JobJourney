import styled from 'styled-components';

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, rgba(0, 0, 0, 1), rgba(160, 0, 180, 1));
  background-size: 200% 200%;
  animation: backgroundMovement 20s ease-in-out infinite;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  position: relative;
  z-index: 0;

  .form {
    max-width: 400px;
    width: 100%;
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(15px);
    padding: 3rem;
    border-radius: 30px;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
    position: relative;
    z-index: 1;
    text-align: center;
    animation: formEntrance 1s ease-out;
  }

  h4 {
    font-size: 3rem;
    margin-bottom: 2.5rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: 900;
    letter-spacing: 2px;
    text-shadow: 0 0 20px rgba(255, 0, 255, 1), 0 0 30px rgba(0, 255, 150, 1);
  }

  p {
    margin-top: 1rem;
    color: rgba(255, 255, 255, 0.6);
    font-size: 1.2rem;
  }

  .btn {
    padding: 1rem 2rem; /* Smaller padding */
    font-size: 1.1rem; /* Smaller font size */
    background: linear-gradient(45deg, #ff00ff, #00e676);
    color: #fff;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    letter-spacing: 1.5px;
    box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);
    position: relative;
    z-index: 1;
  }

  .btn:hover {
    background: linear-gradient(45deg, #ff00ff, #00e676);
    transform: scale(1.1);
    box-shadow: 0 10px 50px rgba(0, 0, 0, 0.3);
  }

  .member-btn {
    color: #f39c12;
    text-decoration: underline;
    font-weight: bold;
    transition: color 0.3s ease-in-out;
  }

  .member-btn:hover {
    color: #e74c3c;
  }

  .logo {
    display: block;
    margin: 0 auto 2rem;
    width: 120px;
    animation: pulse 2s infinite;
  }

  @media (max-width: 768px) {
    .form {
      width: 90%;
    }
  }

  /* Animations */
  @keyframes backgroundMovement {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  @keyframes formEntrance {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }

  /* Glowing Borders for Buttons */
  .btn:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #ff00ff, #00e676);
    border-radius: 50px;
    z-index: -1;
    filter: blur(15px);
    opacity: 0.5;
    transition: all 0.3s ease-in-out;
  }

  .btn:hover:after {
    opacity: 1;
    transform: scale(1.2);
  }

  /* Futuristic Glowing Background Effect */
  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255, 0, 255, 0.1), rgba(0, 255, 150, 0.1));
    animation: glowingEffect 15s ease-in-out infinite;
    z-index: -1;
  }

  @keyframes glowingEffect {
    0% {
      opacity: 0.4;
      transform: scale(1);
    }
    50% {
      opacity: 0.6;
      transform: scale(1.1);
    }
    100% {
      opacity: 0.4;
      transform: scale(1);
    }
  }
`;

export default Wrapper;
