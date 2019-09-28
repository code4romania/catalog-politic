// Import global styles here
import './src/css/globals.css';

// Initialize i18n instance
import i18n from './src/i18n/i18n';

/**
 * Sets up i18n routing
 *
 * We hijack the popstate event from Gatsby's Reach Router and check if the
 * language part of the pathname changed. If it did, we use the i18n instance
 * to change the language accordingly. We only let the event to propagate
 * further to the router if anything else other than the language changeed in
 * the path.
 *
 * For example, if /en/parties changed to /ro/parties, we only changed the
 * language and stop the propagation immediately so the router doesn't get to
 * reload the page.
 *
 * If /en/parties becomes /en/politicians, we do not change the language, but
 * we let the event propagate to the router so it can load the next page
 * accordingly.
 *
 * If /en/parties becomes /ro/politicians, however, we change the language, but
 * we also let the event propagate to the router, so the end result is a double
 * action of changing both the page and the language.
 *
 */
function setupI18n() {

  // Save the previous URL by wrapping history.pushState
  let previousPathname = '';
  window.history.pushState2 = window.history.pushState;
  window.history.pushState = function() {
    previousPathname = arguments[2];
    window.history.pushState2(...arguments);
  }

  // Listen on popstate for language changes
  window.addEventListener('popstate', (event) => {
    if (previousPathname.length > 0) {
      let split0 = previousPathname.split('/');
      let split1 = window.location.pathname.split('/');

      // Change if the language is different, and change it accordingly
      if (split0[1] !== split1[1]) {
        i18n.changeLanguage(split1[1]);
      }

      // Check if any other path components changed
      if (split0.length === split1.length) {

        let same = true;
        for (let i = 2; i < split0.length; ++i) {
          if (split0[i] !== split1[i]) { same = false; break; }
        }

        // Do not propagate the event if no other path components changed
        if (same) { event.stopImmediatePropagation(); }
      }

      // Save the pathname
      previousPathname = window.location.pathname;
    }
  });
}

export function onClientEntry() {
  setupI18n();
}
