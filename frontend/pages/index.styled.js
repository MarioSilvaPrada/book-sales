import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  max-width: ${({ theme }) => theme.maxWidth};
  margin: 0 auto;
  border: 1px solid ${({ theme }) => theme.color.heading()};
  background: ${({ theme }) => theme.color.heading(0.4)};
  border-radius: 8px;
  padding: 1.2rem;
`;
