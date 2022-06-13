import { useState } from 'react';

import classes from './NewApiary.module.css';
import Input from '../../stateless/Input/Input';
import Button from '../../stateless/Button/Button';


export default function NewApiary() {
  const [apiaryName, setApiaryName] = useState('');
  const [date, setDate] = useState(getDateString());
  const [userApiaryNumber, setUserApiaryNumber] = useState('');

  const dateValue = date.split('-').join('');
  const controlSum = calculateControlSum();

  function getDateString() {
    const newDate = new Date();
    const monthString = newDate.getMonth().toString().length === 1 ?
      `0${newDate.getMonth() + 1}` : `${newDate.getMonth() + 1}`;
    const dayString = newDate.getDate().toString().length === 1 ?
      `0${newDate.getDate()}` : `${newDate.getDate()}`;
    const dateString = `${newDate.getFullYear()}-${monthString}-${dayString}`;

    return dateString;
  }

  function calculateControlSum() {
    return '786';
  }

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
