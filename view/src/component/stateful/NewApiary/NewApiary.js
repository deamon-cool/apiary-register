import { useState } from 'react';

import * as config from '../../../config/config';
import classes from './NewApiary.module.css';
import Input from '../../stateless/Input/Input';
import Button from '../../stateless/Button/Button';
import ErrorDiv from '../../stateless/ErrorDiv/ErrorDiv';
import Toastbar from '../../stateless/Toastbar/Toastbar';

import getDateString from '../../../functions/getDateString';
import validateDate from '../../../functions/validateDate';
import calculateControlSum from '../../../functions/calculateControlSum';
import generateUserApiaryNumber from '../../../functions/generateUserApiaryNumber';
import DateInput from '../../stateless/DateInput/DateInput';

const dateTester = /^\d\d\d\d-\d\d\-\d\d$/;
const userApiaryNumberTester = /^\d\d\d\d\d$/;

export default function NewApiary() {
  const [warning, setWarning] = useState('');
  const [info, setInfo] = useState('');
  const [apiaryName, setApiaryName] = useState('');
  const [date, setDate] = useState(new Date());
  const [userApiaryNumber, setUserApiaryNumber] = useState('00001');
  const [inputErrors, setInputErrors] = useState({
    nameError: '',
    dateError: '',
    userApiaryNumberError: ''
  });

  const nameHandler = (e) => {
    const name = e.target.value;

    if (name.length > 100) {
      setInputErrors(state => ({
        ...state,
        nameError: 'Nazwa jest za długa.'
      }));
    } else {
      setInputErrors(state => ({
        ...state,
        nameError: ''
      }));
    }

    setApiaryName(name);
  };

  const dateHandler = (date) => {
    console.log(date);

    setUserApiaryNumber('00001');
  }

  const userApiaryNumberHandler = (e) => {
    const apiaryNumberStr = e.target.value;

    if (apiaryNumberStr.length > 5 || isNaN(apiaryNumberStr)) {
      return;
    }

    if (!userApiaryNumberTester.test(apiaryNumberStr)) {
      setInputErrors(state => ({
        ...state,
        userApiaryNumberError: 'Nieprawidłowy format numeru (NNNNN).'
      }));
    } else {
      setInputErrors(state => ({
        ...state,
        userApiaryNumberError: ''
      }));
    }

    setUserApiaryNumber(apiaryNumberStr);
  }

  const saveHandler = () => {
    if (apiaryName.length < 1) {
      setInputErrors(state => ({
        ...state,
        nameError: 'Wpisz nazwę pasieki.'
      }));

      return;
    }

    for (const key in inputErrors) {
      if (Object.hasOwnProperty.call(inputErrors, key)) {
        const inputError = inputErrors[key];

        if (inputError !== '') {
          setWarning('Wypełnij poprawnie dane.');
          return;
        }
      }
    }

    const dateValue = date.split('-').join('');
    const apiaryNumber = parseInt(
      [dateValue, userApiaryNumber, calculateControlSum(dateValue, userApiaryNumber)].join('')
    );

    const data = {
      name: apiaryName,
      date: date,
      apiaryNumber: apiaryNumber
    };

    const init = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(config.NEW_APIARY_FETCH_URL, init)
      .then(res => res.json())
      .then(data => {
        if (data.error) {
          setWarning(data.error);

          if (data.apiaryExist) {
            //read mail dont generateUserApiaryNumber
            // setUserApiaryNumber(state => (
            //   generateUserApiaryNumber(state)
            // ));
          }

          return;
        }

        if (data.info) {
          setInfo(data.info);

          setUserApiaryNumber(state => (
            generateUserApiaryNumber(state)
          ));

          return;
        }
      })
      .catch(err => {
        console.log(err);
        setWarning('Nie można zapisać danych.');
      })
  }

  const dateValue = 'dateValue';
  const controlSum = 'controlSum';

  return (
    <div className={classes.NewApiary}>
      <Toastbar
        info={info}
        warning={warning}
        infoTimePassedHandler={() => setInfo('')}
        warningTimePassedHandler={() => setWarning('')} />
      <h2>Nowa pasieka</h2>
      <hr />
      <form>
        <fieldset>
          <label>Nazwa</label>
          <Input
            customStyle={{ width: '220px' }}
            onChangeHandler={nameHandler}
            value={apiaryName} />
          <ErrorDiv text={inputErrors.nameError} />
        </fieldset>
        <fieldset>
          <label>Data dodania pasieki</label>
          <DateInput
            showDatePicker={showDatePicker}
            onClickHandler={showDatePickerHandler}
            onChangeHandler={dateHandler}
            date={date} />
          <ErrorDiv text={inputErrors.dateError} />
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
          <ErrorDiv text={inputErrors.userApiaryNumberError} />
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
