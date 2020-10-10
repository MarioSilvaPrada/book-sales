/* _app.js */
import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import Layout from '../components/Layout';
import withData from '../lib/apollo';
import { ThemeProvider } from 'styled-components';
import theme from '../utils/theme';

import AppContext from '../context/AppContext';

class MyApp extends App {
  state = {
    searchInput: '',
  };

  setSearch = (searchInput) => {
    this.setState({ searchInput });
  };

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <link
            rel='stylesheet'
            href='https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css'
            integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm'
            crossOrigin='anonymous'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap'
            rel='stylesheet'
          />
          <link
            href='https://fonts.googleapis.com/css2?family=Pacifico&display=swap'
            rel='stylesheet'
          />
        </Head>
        <AppContext.Provider
          value={{ ...this.state, setSearch: this.setSearch }}
        >
          <ThemeProvider theme={theme}>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ThemeProvider>
        </AppContext.Provider>
      </>
    );
  }
}
export default withData(MyApp);
