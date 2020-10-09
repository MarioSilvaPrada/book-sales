import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
`;

export const Container = styled.div`
  background: ${({ theme }) => theme.color.heading};
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
    border: 1px solid ${({ theme }) => theme.color.heading};
    box-shadow: 0 0 10px #719ece;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
`;
