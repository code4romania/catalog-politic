import React from 'react';

import { Link } from 'gatsby';
import i18n from 'i18next';

export default (props: any) => {

  let { to } = props;

  if (to[0] == '/') {
    to = i18n.language + to;
  }

  return <Link {...props} to={to} />
};
