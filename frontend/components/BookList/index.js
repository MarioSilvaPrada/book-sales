import React from 'react';
import * as S from './BookList.styled';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const QUERY = gql`
  {
    books {
      name
      num_pages
      language
      price
      author
      book_cover {
        url
      }
    }
  }
`;

const BookList = () => {
  const { loading, error, data } = useQuery(QUERY);
  if (error) return 'Error loading books';
  if (loading) return <h1>Fetching</h1>;

  if (data.books && data.books.length) {
    return data.books.map(({ name, book_cover, price, author }) => {
      let url = `${process.env.NEXT_PUBLIC_API_URL}${book_cover[0].url}`;
      let formatPrice = `${price.toFixed(2)}€`;
      return (
        <S.Wrapper>
          <S.Cover src={url} />
          <p>{name}</p>
          <p>{author}</p>
          <p>{formatPrice}</p>
        </S.Wrapper>
      );
    });
  }
};

export default BookList;
