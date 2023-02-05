import { Link, Box, Container } from './AuthNav.styled';

 export const AuthNav = () => {
  return (
    <Container>
      <Box>
        <Link to="/register">Register</Link>
      </Box>
      <Box>
        <Link to="/login">Log In</Link>
      </Box>
    </Container>
  );
};

