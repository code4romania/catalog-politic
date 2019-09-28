import React from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { useSSR } from 'react-i18next';
import i18n from '../i18n/i18n';

interface context {
  initialI18nStore: { [key: string]: string },
  initialLanguage: string,
  i18n: any
};

const Layout = ({ children, pageContext }: { children: React.ReactChildren, pageContext: context }) => {

  if (typeof process === 'object') {
    // There are discussions on react-i18nexts's Github about exposing this
    // property in i18n to be used in tandem with useSSR. We use this method,
    // for lack of a better one. (Otherwise all statically generated pages will
    // use the default language.)
    // @ts-ignore
    i18n.initializedLanguageOnce = false;
  }
  useSSR(pageContext.initialI18nStore, pageContext.initialLanguage);

  return (
    <>
      <div style={{backgroundColor:'#2F2FA1'}}>
        <div className='main-container' style={{minHeight: '100vh', display: 'flex', flexDirection: 'column'}}>
          <Header/>
          <div>
            <main>{children}</main>
          </div>
          <div style={{backgroundColor: 'white', flex:1}}></div>
        </div>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
