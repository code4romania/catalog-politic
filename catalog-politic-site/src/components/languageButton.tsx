import React from 'react';

import i18n from 'i18next';
import { useStaticQuery, graphql } from 'gatsby';

/**
 * A button that changes the language
 *
 * @param props - Entire props object
 * @param props.locale - The target locale
 * @param props.children - Content of the button
 * @param props.onClick - onClick function
 */
export default (
  {
    locale,
    children,
    onClick = function() {},
    ...props // Rest of the props
  }:
  {
    locale: string,
    children: any,
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => any,
    [key: string]: any // Type of the props object
  }) => {

  interface Data {
    site: {
      pathPrefix?: string
      siteMetadata: {
        locales: string[]
      }
    }
  };

  const data = useStaticQuery<Data>(graphql`
    {
      site {
        pathPrefix
        siteMetadata {
          locales
        }
      }
    }
  `);

  /**
   * Replaces the locale part of the pathname (or adds one)
   *
   * For example, /en/parties becomes /ro/parties, given 'ro' as a locale.
   * Similarly, /parties would become /ro/parties.
   *
   * @param locale - The locale to change to
   * @param pathname - The current pathname
   *
   * @returns Same pathname, but localized to the new locale
   */
  const getNewPathname = function(locale: string, pathname: string) {
    let prefix: string = '';

    if (data.site.pathPrefix) {
      if (pathname.startsWith(data.site.pathPrefix)) {
        pathname = pathname.substring(
          data.site.pathPrefix.length,
          pathname.length);
        prefix = data.site.pathPrefix;
      }
    }

    const split: string[] = pathname.split('/');

    // Check if the first component represents a locale
    if (data.site.siteMetadata.locales.includes(split[1])) {
      split[1] = locale;
    } else {
      // Add a locale component
      split.splice(1, 0, locale);
    }
    return prefix + split.join('/');
  }

  /**
   * Changes the language using a given locale
   *
   * @param locale - The locale to use for the new language
   */
  const changeLanguage = function(locale: string) {
    const newPathname = getNewPathname(locale, window.location.pathname);
    if (newPathname !== window.location.pathname) {
      window.history.pushState({}, 'English', newPathname);
      i18n.changeLanguage(locale);
    }
  };

  return (
    <button {...props} onClick={(e: React.MouseEvent<HTMLButtonElement>) => { changeLanguage(locale); onClick(e) }}>
      {children}
    </button>
  );
};
