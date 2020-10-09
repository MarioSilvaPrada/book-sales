import React, { useContext } from 'react';
import * as S from './Layout.styled';
import Head from 'next/head';
import Logo from '../../assets/svg/Logo';
import { withTheme } from 'styled-components';
import AppContext from '../../context/AppContext';
import { ImSearch } from 'react-icons/im';

const Layout = (props) => {
  const title = 'Welcome to my book shelf';
  const { theme } = props;

  const appContext = useContext(AppContext);

  const { searchInput, setSearch } = appContext;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <script src='https://js.stripe.com/v3' />
      </Head>
      <header>
        <S.Nav>
          <Logo color={theme.color.heading} />
          <S.InputWrapper>
            <ImSearch
              style={{
                position: 'absolute',
                top: '30%',
                left: '.5rem',
                color: 'rgb(158, 158, 167)',
              }}
            />
            <S.SearchBar
              value={searchInput}
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search'
            />
          </S.InputWrapper>
        </S.Nav>
      </header>
      <S.Container>{props.children}</S.Container>
    </div>
  );
};

export default withTheme(Layout);
