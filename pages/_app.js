import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { themeDark, themeLight } from '../src/config/theme/theme';
import { Provider } from 'react-redux';
import store from '../src/redux/store'
import 'animate.css';
import 'bootstrap/dist/css/bootstrap.css';
import Header from '../src/components/header'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: 'auto',
    minHeight: '100vh',
  },
  main: {
    height: '100%'
  }
});

const BACKGROUND_COLOR_DARK = '#4b5563';
const BACKGROUND_COLOR_LIGHT = '#ffffff';

const styleBackgroundMain = (mode = 'dark') => {
  if (mode === 'dark')
    return {
      backgroundColor: BACKGROUND_COLOR_DARK
    }
  return {
    backgroundColor: BACKGROUND_COLOR_LIGHT
  }
}
function MyApp(props) {
  const { Component, pageProps } = props;
  const classes = useStyles();
  const [modeTheme, setModeTheme] = useState('light')
  useEffect(() => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) setModeTheme('dark'); else setModeTheme('light');
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  const changeModeTheme = (e, modeTheme) => {
    e.preventDefault();
    setModeTheme(modeTheme);
  }
  return (
    <Provider store={store}>
      <React.Fragment>
        <Head>
          <title>Nguyễn Văn Đặng </title>
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
        <ThemeProvider theme={modeTheme === 'light' ? themeLight : themeDark}>
          <CssBaseline />
          <div className={classes.root} style={styleBackgroundMain(modeTheme)}>
            <Header changeModeTheme={changeModeTheme} modeTheme={modeTheme} />
            <main className={classes.main}>
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