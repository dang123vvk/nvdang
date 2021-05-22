import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeDart, themeLight } from '../src/config/theme';
import { Provider } from 'react-redux';
import store from '../src/redux/store'
// import dynamic from 'next/dynamic';
import Header from '../src/components/generic/header'
function MyApp(props) {
  const { Component, pageProps } = props;
  const [modeTheme, setModeTheme] = useState('light')
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
const changeModeTheme = (e,modeTheme) => {
  e.preventDefault();
  setModeTheme(modeTheme);
}
  return (
    <Provider store={store}>
      <React.Fragment>
        <Head>
          <title>Nguyen Van Dang | I am Dang</title>
          <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=G-PC9QGY0DLQ"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-PC9QGY0DLQ', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </Head>
        <ThemeProvider theme={modeTheme==='light' ? themeLight: themeDart}>
          <CssBaseline />
          <div style={{ display: 'flex', backgroundColor: '#ffff', flexDirection: 'column', height: '100vh' }}>
            <Header changeModeTheme ={changeModeTheme} modeTheme={modeTheme}/>
            <main style={{ height: '100%' }}>
              <Component {...pageProps} />
            </main>
          </div>
        </ThemeProvider>
      </React.Fragment>
    </Provider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp