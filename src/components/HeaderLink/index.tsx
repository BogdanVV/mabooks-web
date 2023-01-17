import { Container, StyledLink } from './styled';

interface HeaderLinkProps {
  href: string;
  title: string;
}

export const HeaderLink = ({ title, href }: HeaderLinkProps) => {
  return (
    <Container>
      <StyledLink href={href}>{title}</StyledLink>
    </Container>
  );
};
