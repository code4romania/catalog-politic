const config = require('./gatsby-config');
const translations = require('./src/i18n/translations');

/**
 * Implements Gatsby's onCreatePage to implement localized pathnames
 *
 * @param {Object} obj
 * @param {Object} obj.page Page object
 * @param {Object} obj.actions Actions object
 * @param {function} obj.actions.createPage - Gatsby's create page function
 * @param {function} obj.actions.deletePage - Gatsby's delete page function
 * @param {function} obj.actions.createRedirect - Gatsby's create redirect
 *                                                function
 */
exports.onCreatePage = ({
    page,
    actions: {
      createPage,
      deletePage,
      createRedirect
    }
  }) => {

  if (config != null              &&
      config.siteMetadata != null &&
      config.siteMetadata.locales != null) {

    /**
     * Removes the surrounding slashes (if any)
     *
     * @param s - The string to remove the surrounding slashes from
     *
     * @returns A string that is sure to have no surrounding slashes
     */
    const removeSurroundingSlashes = (s) => {
      const sp = s.split('/');

      // Remove leading slash (if any)
      if (sp[0].length == 0) { sp.shift(); }

      // Remove trailing slash (if any)
      if (sp[sp.length - 1].length == 0) { sp.pop(); }

      return sp.join('/');
    }

    /**
     * Adds a trailing slash to a string, if none already exists
     *
     * @param s - The string to add the trailing slash to
     *
     * @returns A strings that is sure to have at least one trailing slash, but
     *          at most the number of trailing slashes it had beforehand
     */
    const addTrailingSlash = (s) => {
      if (s[s.length - 1] !== '/') return `${s}/`;
      return s;
    }

    /**
     * Adds a locale prefix to a given path
     *
     * @param locale - The locale to add
     * @param path - The path to which the locale prefix is added
     *
     * @returns The path with an added locale prefix
     */
    const addLocalePrefix = (locale, path) => {
      return addTrailingSlash(`/${locale}/${removeSurroundingSlashes(path)}`);
    }

    // Delete initial page
    deletePage(page);

    // Create a new one for each language
    config.siteMetadata.locales.forEach((locale, index) => {

      let matchPath = page.matchPath;

      // Redirect all other paths to 404
      if (removeSurroundingSlashes(page.path) === '404') {
        matchPath = `/${locale}/*`;

        // If no language is used in pathname, use the default locale
        if (index === 0) {
          matchPath = '/*';
        }
      }

      const localizedPath = addLocalePrefix(locale, page.path);

      createPage({
        ...page,

        // Override path with localized path
        path: localizedPath,
        matchPath: matchPath,
        context: {
          initialLanguage: locale,
          initialI18nStore: resources,
          pathname: localizedPath
        }
      });

      // Create redirects from all unlocalized pathnames to localized pathnames
      // (using the default locale)
      if (index === 0) {
        [
          `/${removeSurroundingSlashes(page.path)}`,
          `/${removeSurroundingSlashes(page.path)}/`
        ].forEach(oldPath => {
          createRedirect({
            fromPath: oldPath,
            toPath: localizedPath,
            isPermanent: true,
            redirectInBrowser: true
          });
        });
      }
    });
  }
};
