import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Cover = styled.img`
  height: 14rem;
  margin-bottom: 0.6rem;
`;

export const Title = styled.p`
  font-weight: 500;
  margin-bottom: 0.3rem;
`;

export const Author = styled.p`
  font-weight: 300;
  font-size: 0.8rem;
  margin-bottom: 0.3rem;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: 900;
  margin-bottom: 0;
  color: ${({ theme }) => theme.color.salmon};
`;
