import { Link, Box, Wrapper } from './AuthNav.styled';

 const AuthNav = () => {
  return (
    <Wrapper>
      <Box>
        <Link to="/register">Register</Link>
      </Box>
      <Box>
        <Link to="/login">Log In</Link>
      </Box>
    </Wrapper>
  );
};

export default AuthNav;