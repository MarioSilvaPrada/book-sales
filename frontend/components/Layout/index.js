import React, { useContext } from 'react';
import * as S from './Layout.styled';
import Head from 'next/head';

const Layout = (props) => {
  const title = 'Welcome to my book shelf';

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
          <p>navbar</p>
        </S.Nav>
      </header>
      <S.Container>{props.children}</S.Container>
    </div>
  );
};

export default Layout;
