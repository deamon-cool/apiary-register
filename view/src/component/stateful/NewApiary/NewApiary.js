import { useEffect, useState } from 'react';

import classes from './NewApiary.module.css';
import Input from '../../stateless/Input/Input';
import Button from '../../stateless/Button/Button';
import ErrorDiv from '../../stateless/ErrorDiv/ErrorDiv';
import Toastbar from '../../stateless/Toastbar/Toastbar';

import * as config from '../../../config/config';

import getDateString from '../../../functions/getDateString';
import validateDate from '../../../functions/validateDate';
import calculateControlSum from '../../../functions/calculateControlSum';

const dateTester = /^\d\d\d\d-\d\d\-\d\d$/;
const userApiaryNumberTester = /^\d\d\d\d\d$/;
const userApiaryNumberLength = 5;

export default function NewApiary() {
  const [warning, setWarning] = useState('');
  const [info, setInfo] = useState('');
  const [apiaryName, setApiaryName] = useState('');
  const [customDate, setCustomDate] = useState(getDateString());
  const [correctCustomDate, setCorrectCustomDate] = useState(getDateString());
  const [userApiaryNumber, setUserApiaryNumber] = useState('00001');
  const [inputErrors, setInputErrors] = useState({
    nameError: '',
    dateError: '',
    userApiaryNumberError: ''
  });

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchApiariesAmount() {
      const init = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        signal: abortController.signal
      };

      fetch(config.APIARIES_AMOUNT_AT_DATE_FETCH_URL + customDate, init)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setWarning(data.error);

            return;
          }

          const stringNumber = (data.apiariesAmount + 1).toString();
          const amountOfZeros = userApiaryNumberLength - stringNumber.length;
          const l_userApiaryNumber = '0'.repeat(amountOfZeros) + stringNumber;

          setUserApiaryNumber(l_userApiaryNumber);
        })
        .catch(err => {
          console.log(err);
          setWarning('Nie można pobrać ilości pasiek dla daty: ' + customDate);
        })
    }

    fetchApiariesAmount();

    return () => {
      abortController.abort();
    }
  }, [correctCustomDate]);

  const nameHandler = (name) => {
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

  const dateHandler = (dateString) => {
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

    setCustomDate(dateString);
    if (errorMessage === '') {
      setCorrectCustomDate(dateString);
    }
  }

  const userApiaryNumberHandler = (apiaryNumberStr) => {
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
    //fetch data
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
