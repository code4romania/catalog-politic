import React from 'react';
import cn from 'classnames';
import genericStyles from '../css/generics.module.css';
import styles from './css/index.module.css';
import { Link } from 'gatsby';
import Color from 'color';

import { useTranslation } from 'react-i18next';

import NewspaperGraphic from './svg/newspaper.inline.svg';
import NotebookGraphic from './svg/notebook.inline.svg';
import ChartGraphic from './svg/chart.inline.svg';
import DnaGraphic from './svg/dna.inline.svg';

const Circle = ({ children, color, radius, ...props }: {
    children: JSX.Element,
    color: string
    radius: number,
    [key: string]: any
  }) => (
  <div
    {...props}
    style={{
      width: 2 * radius,
      height: 2 * radius,
      borderRadius: radius,
      backgroundColor: color
    }}
    className={genericStyles.catpolFlexCenter}>
    {children}
  </div>
);

const Ruler = () => (
  <div className={styles.ruler}></div>
);

function IndexPage() {

  // Short descriptions of the app's features
  const info1 = [
    {
      icon: <NotebookGraphic style={{width:38}}/>,
      color: Color('#563D67'),
      title: 'Political activity',
      body: 'What laws'
    },
    {
      icon: <ChartGraphic style={{width:38}}/>,
      color: Color('#2F2FA1'),
      title: 'Net worth tracking',
      body: 'Net worth tracking message'
    },
    {
      icon: <DnaGraphic style={{width:38}}/>,
      color: Color('#F64C71'),
      title: 'DNA files',
      body: 'DNA files message'
    },
  ];

  const { t } = useTranslation();

  return (
    <>
      <div>
        <div className={genericStyles.catpolRow}>
          <div className={cn(genericStyles.catpolCol12, styles.hero)}>
            <h1>{t('Hero message')}</h1>
            <p>
              {t('Here you can find')}
            </p>
            <p>
              <Link
                to='/prezidentiale'
                className={cn(
                  genericStyles.catpolButton,
                  genericStyles.catpolButtonSecondary
                )}
              >
                <span>{t('See the candidates')}</span>
              </Link>
            </p>
          </div>
        </div>
        <div style={{backgroundColor: 'white', padding: '80px 0'}}>
          <div className={genericStyles.catpolRow}>
            <div
              className={cn(
                genericStyles.catpolCol6,
                genericStyles.catpolFlexCenter
              )}
            >
              <NewspaperGraphic className={styles.newspaperGraphic}/>
            </div>
            <div
              className={cn(
                genericStyles.catpolCol5,
                genericStyles.catpolColOffset1,
                styles.info1
              )}
            >
              <h2>{t('About catalog politic')}</h2>
              <h3>{t('Get informed')}</h3>
              <Ruler/>
              <table style={{paddingTop: 50}}>
                <tbody>
                  {
                    info1.map((data, index) => (
                      <tr key={index}>
                        <td>
                          <Circle
                            radius={41}
                            color={data.color.alpha(0.3).string()}
                          >
                            {data.icon}
                          </Circle>
                        </td>
                        <td>
                          <h4 style={{color: data.color.string()}}>
                            {t(data.title)}
                          </h4>
                          <p>{t(data.body)}</p>
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default IndexPage;
