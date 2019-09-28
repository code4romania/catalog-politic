import React from 'react'
import genericStyles from '../css/generics.module.css';

/**
 * Displays a list of politicians
 */
export default () => (
  <div style={{backgroundColor: 'white'}}>
    <div className={genericStyles.catpolRow}>
      <div className={genericStyles.catpolCol12}>
        <h1>Pagina <i>Politicieni</i></h1>
        <p>
          Pagina aceasta ar trebui să conțină o simplă listă cu politicienii
          din România, ordonați după indexul de popularitate.
        </p>
      </div>
    </div>
  </div>
);
