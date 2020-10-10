import styled from 'styled-components';

export const Body = styled.div`
  font-family: 'Roboto', sans-serif;
`;

export const Nav = styled.div`
  background: ${({ theme }) => theme.color.background};
  padding: 0 2rem;
`;

export const NavWrapper = styled.div`
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const MainTitle = styled.h1`
  font-family: 'Pacifico', cursive;
  color: ${({ theme }) => theme.color.heading()};
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.color.background};
  min-height: 90vh;
  padding: 0 2rem;
`;

export const SearchBar = styled.input`
  border-radius: 8px;
  background: ${({ theme }) => theme.color.grey};
  border: none;
  padding: 0.5rem 0.7rem 0.5rem 1.9rem;
  font-size: 0.8rem;
  border: 1px solid transparent;

  &:focus {
    outline: none !important;
    border: 1px solid ${({ theme }) => theme.color.heading()};
    box-shadow: 0 0 10px #719ece;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;
