import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import  Navigation  from '../Navigation';
import { useAuth } from 'hooks/useAuth';
import  UserMenu  from '../UserMenu';
import  AuthNav  from '../AuthNav';
import { Header, Container } from './Layout.styled';

const Layout = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Container>
      <Header>
        <Navigation />
        {isLoggedIn ? <UserMenu/> : <AuthNav />}
      </Header>
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </Container>
  );
};

export default Layout;