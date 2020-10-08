import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const QUERY = gql`
  {
    books {
      name
      num_pages
      language
      price
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
    return data.books.map((query) => {
      return <h1>{query.name}</h1>;
    });
  }
};

export default BookList;
