import * as headerStyles from './css/header.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { graphql, useStaticQuery } from 'gatsby';
import React, { useState } from 'react';
import Logo from './logo';
import cn from 'classnames';
import genericStyles from '../css/generics.module.css';

import { useTranslation } from 'react-i18next';

import Link from './link';
import LanguageButton from './languageButton';


const Header = function() {

  interface Data {
    site: {
      siteMetadata: {
        title: string,
        locales: string[],
        menuLinks: {
          name: string,
          path: string,
          special: boolean
        }[]
      }
    }
  }

  const data = useStaticQuery<Data>(graphql`
    {
      site {
        siteMetadata {
          title
          locales
          menuLinks {
            name
            path
            special
          }
        }
      }
    }
  `);

  const [menuVisible, setMenuVisible] = useState<boolean>(false);
  const { t } = useTranslation();

  // Hamburger button that toggles the menu on small screens
  const hamburgerToggle = (
    <button
      className={`
        ${genericStyles.hideLarge}
        ${genericStyles.catpolButton}
      `}
      onClick={
        () => setMenuVisible(!menuVisible)
      }
    >
      {!menuVisible && <FaBars/>}
      {menuVisible && <FaTimes/>}
    </button>
  );

  // All the other navigation links
  let buttons = (
    <div
      className={cn(
        headerStyles.menu,
        {[genericStyles.hideSmall]: !menuVisible}
      )}
    >
      <ol>
        {data.site.siteMetadata.menuLinks.map((value, index) => {
          return (
            <li key={index}>
              <Link
                className={cn(
                  genericStyles.catpolButton,
                    { [genericStyles.catpolButtonSecondary]: value.special },
                    headerStyles.link,
                    { [headerStyles.special]: value.special }
                )}
                to={value.path}
                onClick={() => setMenuVisible(false)}
              >
                <span>{t(value.name)}</span>
              </Link>
            </li>
          )
        })}
        {data.site.siteMetadata.locales.map((locale, index) => {
          return (
            <li>
              <LanguageButton
                locale={locale}
                className={cn(genericStyles.catpolButton, headerStyles.link)}
                onClick={() => setMenuVisible(false)}
              >
                {locale}
              </LanguageButton>
            </li>
          );
        })}
      </ol>
      <div>
        {hamburgerToggle}
      </div>
    </div>
  );

  return (
    <header>
      <div className={genericStyles.catpolRow}>
        <div className={genericStyles.catpolCol12}>
          <nav className={headerStyles.header}>
            <div className={headerStyles.logo}>
              <Link to='/'>
                <Logo/>
              </Link>
            </div>
            {hamburgerToggle}
            {buttons}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
