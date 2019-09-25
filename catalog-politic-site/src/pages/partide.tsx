import React from "react";
import genericStyles from '../css/generics.module.css';

/**
 * Displays a list of parties
 */
export default () => (
  <div style={{backgroundColor: 'white'}}>
    <div className={genericStyles.catpolRow}>
      <div className={genericStyles.catpolCol12}>
        <h1>Pagina <i>Partide</i></h1>
        <p>
          Pagina aceasta ar trebui să conțină o simplă listă cu partidele
          din România.
        </p>
      </div>
    </div>
  </div>
);
