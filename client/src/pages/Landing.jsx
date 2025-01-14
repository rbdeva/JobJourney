import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <Wrapper>

      <div className='container page'>
        <img src={main} alt='job hunt' className='img main-img' />
        <div className='info'>
          <h1>
            My <span>Job Journey</span>
          </h1>
          <p className='subtitle'>Track your jobs at your fingertips</p>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to='/register' className='btn register-link'>
            Register
          </Link>
          <Link to='/login' className='btn'>
            Login / Demo User
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

export default Landing;
