import { useState } from 'react';

import classes from './NewApiary.module.css';
import Input from '../../stateless/Input/Input';
import Button from '../../stateless/Button/Button';
import ErrorDiv from '../../stateless/ErrorDiv/ErrorDiv';
import Toastbar from '../../stateless/Toastbar/Toastbar';

import * as config from '../../../config/config';

import getDateString from '../../../functions/getDateString';
import validateDate from '../../../functions/validateDate';
import calculateControlSum from '../../../functions/calculateControlSum';
import generateUserApiaryNumber from '../../../functions/generateUserApiaryNumber';

const dateTester = /^\d\d\d\d-\d\d\-\d\d$/;
const userApiaryNumberTester = /^\d\d\d\d\d$/;

export default function NewApiary() {
  const [warning, setWarning] = useState('');
  const [info, setInfo] = useState('');
  const [apiaryName, setApiaryName] = useState('');
  const [customDate, setCustomDate] = useState(getDateString());
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

  const dateHandler = (e) => {
    const dateString = e.target.value

    if (dateString.length > 10) {
      return;
    }

    // think about dateString.length > 3
    //add -

    let errorMessage = '';

    if (!dateTester.test(dateString)) {
      errorMessage = 'Nieprawidłowy format daty (YYYY-MM-DD).';
    } else {
      errorMessage = validateDate(dateString);
    }

    setInputErrors(state => ({
      ...state,
      dateError: errorMessage
    }));

    setUserApiaryNumber('00001');
    setCustomDate(dateString);
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

    const dateValue = customDate.split('-').join('');
    const apiaryNumber = parseInt(
      [dateValue, userApiaryNumber, calculateControlSum(dateValue, userApiaryNumber)].join('')
    );

    const data = {
      name: apiaryName,
      date: customDate,
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
            setUserApiaryNumber(state => (
              generateUserApiaryNumber(state)
            ));
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

  const dateValue = customDate.split('-').join('').length !== 8 ?
    '' : customDate.split('-').join('');
  const controlSum = calculateControlSum(dateValue, userApiaryNumber);

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
            onChangeHandler={nameHandler}
            value={apiaryName} />
          <ErrorDiv text={inputErrors.nameError} />
        </fieldset>
        <fieldset>
          <label>Data dodania pasieki</label>
          <Input
            onChangeHandler={dateHandler}
            value={customDate} />
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
