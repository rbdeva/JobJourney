import styled from 'styled-components';

const Wrapper = styled.section`
  /* Background: Gradient-based futuristic feel with a subtle glow */
  background: linear-gradient(145deg, #1a1a1d, #22262b);
  color: #e4e4e7;
  font-family: 'Poppins', sans-serif;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  .page {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 3rem;
    align-items: center;
    width: 90%;
    max-width: 1400px;
    padding: 2rem;
    border-radius: 16px;
    backdrop-filter: blur(20px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0px 10px 40px rgba(0, 0, 0, 0.3);
  }

  .main-img {
    width: 100%;
    max-width: 500px;
    animation: float 6s infinite ease-in-out;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.5));
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 1.5rem;
  }

  h1 {
    font-size: 3rem;
    font-weight: bold;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 2px;
    position: relative;

    /* Futuristic glow effect */
    span {
      color: #7fdbff;
      text-shadow: 0 0 20px #7fdbff, 0 0 40px #7fdbff;
    }
  }

  .subtitle {
    font-size: 1.5rem;
    font-weight: 300;
    color: #cfcfcf;
    letter-spacing: 1px;
  }

  p {
    font-size: 1rem;
    line-height: 1.8;
    color: #bfbfbf;
    text-align: justify;
  }

  .btn {
    display: inline-block;
    padding: 0.8rem 2rem;
    font-size: 1rem;
    font-weight: bold;
    border: none;
    border-radius: 50px;
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    background: linear-gradient(90deg, #7fdbff, #0074d9);
    color: #ffffff;
    box-shadow: 0 5px 15px rgba(127, 219, 255, 0.3);
  }

  .btn:hover {
    transform: scale(1.1);
    box-shadow: 0 10px 30px rgba(127, 219, 255, 0.6);
  }

  .register-link {
    margin-right: 1rem;
  }

  @media (max-width: 992px) {
    .page {
      grid-template-columns: 1fr;
      text-align: center;
    }

    .main-img {
      order: 1;
      margin-bottom: 2rem;
    }

    h1 {
      font-size: 2.5rem;
      text-align: center;
    }

    .subtitle {
      text-align: center;
    }

    p {
      text-align: center;
    }

    .info {
      align-items: center;
    }
  }
`;

export default Wrapper;
