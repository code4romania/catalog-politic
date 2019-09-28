# Catalog Politic Web App
This is the web app component of [Catalog Politic](https://code4.ro/ro/apps/catalog-politic/). You see the live version [here](http://catalogpolitic.ro/).

## Tech Stack

The web app is built using [Gatsby](https://www.gatsbyjs.org/), a modern site generator for React. Gatsby takes our React app and generates static HTML files for each page, which are then served statically to the client for a short TTI (time to interaction). Meanwhile, the other components are being downloaded on the client, and shortly the static page morphs into a fully functional React app.

## i18n

We use [react-i18next](https://react.i18next.com/) for internationalization, a framework based on [i18next](https://www.i18next.com/). We use the framework exclusively through [the useTranslation hook](https://react.i18next.com/latest/usetranslation-hook)—
```
import React from 'react';
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t, i18n } = useTranslation();

  return <p>{t('Hello')}</p>
}
```
