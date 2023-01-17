import { useAppContext } from '@/context/App/AppProvider';
import { useAuthContext } from '@/context/Auth/AuthProvider';
import { LoginForm } from '@/forms';
import {
  Container,
  NavBarContainer,
  NavItemsList,
  AuthContainer,
  AuthButton,
} from './styled';
import { HeaderLink, HeaderProfile } from '@/components';

export const Header = () => {
  const headerNavLinks = [
    { title: 'Home', href: '/' },
    { title: 'Test', href: '/test1' },
  ];
  const { openModal } = useAppContext();
  const { isAuthenticated, currentUser, accessToken } = useAuthContext();
  const isUserAuthenticated = isAuthenticated && currentUser && accessToken;

  const handleLogin = () => {
    openModal(<LoginForm />);
  };

  return (
    <Container>
      <NavBarContainer>
        <NavItemsList>
          {headerNavLinks.map(({ href, title }) => (
            <HeaderLink key={title} href={href} title={title} />
          ))}
        </NavItemsList>
        <AuthContainer>
          {isUserAuthenticated ? (
            <HeaderProfile />
          ) : (
            <>
              <AuthButton onClick={handleLogin}>Login</AuthButton>
              <AuthButton>Sign Up</AuthButton>
            </>
          )}
        </AuthContainer>
      </NavBarContainer>
    </Container>
  );
};
