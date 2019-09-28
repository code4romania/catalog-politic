import React from "react";
import genericStyles from '../css/generics.module.css';

/**
 * Displays a list of parties
 */
export default () => (
  <div style={{backgroundColor: 'white'}}>
    <div className={genericStyles.catpolRow}>
      <div className={genericStyles.catpolCol12}>
        <h1>Pagina <i>Prezidențiale</i></h1>
        <p>
          Pagina asta ar trebuie să fie o pagină specială pentru alegerile
          prezidențiale din România, 2019.
        </p>
      </div>
    </div>
  </div>
);
