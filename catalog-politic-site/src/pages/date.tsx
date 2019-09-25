import React from 'react'
import genericStyles from '../css/generics.module.css';

/**
 * Displays information about reusing the catpol database.
 */
export default () => (
  <div style={{backgroundColor: 'white'}}>
    <div className={genericStyles.catpolRow}>
      <div className={genericStyles.catpolCol12}>
        <h1>Pagina <i>Date</i></h1>
        <p>
          Pagina aceasta ar trebui să conțină instrucțiuni despre exportarea și
          și folosirea datelor din <i>Catalog Politic</i>.
        </p>
      </div>
    </div>
  </div>
);
