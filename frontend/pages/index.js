import React from 'react';
import * as S from './index.styled';
import BookList from '../components/BookList';

const HomePage = () => {
  return (
    <>
      <S.Container>
        <BookList />
      </S.Container>
    </>
  );
};

export default HomePage;
