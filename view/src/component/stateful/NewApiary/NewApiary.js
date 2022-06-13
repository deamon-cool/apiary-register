import { useState } from 'react';

import classes from './NewApiary.module.css';
import Input from '../../stateless/Input/Input';
import Button from '../../stateless/Button/Button';

const dateTester = /^\d\d\d\d-\d\d\-\d\d$/;
const apiaryNumberTester = /^\d\d\d\d\d$/;

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

  const nameHandler = (name) => {
    if (name.length > 100) {
      // handle error input
    }
    
    setApiaryName(name);
  };

  const dateHandler = (dateString) => {
    if (!dateTester.test(dateString)) {
      // handle error input
    }

    setDate(dateString);
  }

  const userApiaryNumberHandler = (apiaryNumberStr) => {
    if (!apiaryNumberTester.test(apiaryNumberStr)) {
      // handle error input
    }
    setUserApiaryNumber(apiaryNumberStr);
  }

  const saveHandler = () => {

  }

  return (
    <div className={classes.NewApiary}>
      <h2>Nowa pasieka</h2>
      <hr />
      <form>
        <fieldset>
          <label>Nazwa</label>
          <Input
            onChangeHandler={nameHandler}
            value={apiaryName} />
        </fieldset>
        <fieldset>
          <label>Data dodania pasieki</label>
          <Input
            onChangeHandler={dateHandler}
            value={date} />
        </fieldset>
        <fieldset>
          <label>Numer pasieki</label>
          <div>
            <Input
              value={dateValue}
              readOnly={true}
              customStyle={{ width: '90px' }} />
            <Input
              customStyle={{ width: '60px' }}
              onChangeHandler={userApiaryNumberHandler}
              value={userApiaryNumber} />
            <Input
              value={controlSum}
              readOnly={true}
              customStyle={{ width: '40px' }} />
          </div>
        </fieldset>
        <fieldset>
          <Button
            onClickHandler={saveHandler}
            text='Zapisz'
            customStyle={{ marginTop: '25px' }} />
        </fieldset>
      </form>
    </div>
  );
}
