import { useState } from 'react';

import classes from './NewApiary.module.css';
import Input from '../../stateless/Input/Input';
import Button from '../../stateless/Button/Button';


export default function NewApiary() {

  return (
    <div className={classes.NewApiary}>
      <h2>Nowa pasieka</h2>
      <form>
        <fieldset>
          <label>Nazwa</label>
          <input />
        </fieldset>
        <fieldset>
          <label>Wybierz datę</label>
          <input type='date' />
        </fieldset>
        <fieldset>
          <label>Numer pasieki</label>
          20220612<input />789
        </fieldset>

        <button>Zapisz</button>
      </form>
    </div>
  );
}
