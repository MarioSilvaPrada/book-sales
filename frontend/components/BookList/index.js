import React from 'react';
import * as S from './BookList.styled';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';
import AppContext from '../../context/AppContext';

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
    return (
      <AppContext.Consumer>
        {({ searchInput }) => {
          const searchQuery = data.books.filter((query) =>
            query.name.toLowerCase().includes(searchInput)
          );

          if (searchQuery.length != 0) {
            return searchQuery.map(({ name, author, book_cover, price }) => {
              let url = `${process.env.NEXT_PUBLIC_API_URL}${book_cover[0].url}`;
              let formatPrice = `${price.toFixed(2)}€`;
              return (
                <S.Wrapper>
                  <S.Cover src={url} />
                  <S.Title>{name}</S.Title>
                  <S.Author>{author}</S.Author>
                  <S.Price>{formatPrice}</S.Price>
                </S.Wrapper>
              );
            });
          } else {
            return <h1>We don't have books with that name</h1>;
          }
        }}
      </AppContext.Consumer>
    );
  }
};

export default BookList;
