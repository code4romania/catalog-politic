import React from 'react';
import cn from 'classnames';

import { useTranslation } from 'react-i18next';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image';

import genericStyles from '../css/generics.module.css';

const NotFoundPage = () => {

  const data = useStaticQuery(graphql `
    query {
      placeholderImage: file(relativePath: { eq: "sheep.png" }) {
        childImageSharp {
          fluid(maxWidth: 256) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const { t } = useTranslation();

  return (
    <div style={{backgroundColor: 'white', paddingTop: '10vh'}}>
      <div
        className={cn(
          genericStyles.catpolRow
        )}
      >
        <div
          className={cn(
            genericStyles.catpolCol12,
            genericStyles.catpolFlexCenter
          )}
        >
          <div style={{textAlign: 'center'}}>
            <Img fluid={data.placeholderImage.childImageSharp.fluid} style={{maxWidth: 256, margin: 'auto'}}/>
            <h1>{t('404 sheep')}</h1>
            <p>{t('404 message')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NotFoundPage
