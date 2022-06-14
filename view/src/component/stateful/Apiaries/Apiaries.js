import { useState } from 'react';

import classes from './Apiaries.module.css';

import Search from '../../stateless/Search/Search';
import Button from '../../stateless/Button/Button';
import DateRange from '../../stateless/DateRange/DateRange';
import Toastbar from '../../stateless/Toastbar/Toastbar';

import getDateString from '../../../functions/getDateString';
import validateDate from '../../../functions/validateDate';

export default function Apiaries() {
  const [warning, setWarning] = useState('');
  const [info, setInfo] = useState('');
  const [sorting, setSorting] = useState('');
  const [customDateRange, setCustomDateRange] = useState({
    fromDate: 'YYYY-MM-DD',
    toDate: 'YYYY-MM-DD'
  });

  //download date

  const sortHandler = () => {
    switch (sorting) {
      case '':
        setSorting('ascending');
        break;

      case 'descending':
        setSorting('ascending');
        break;

      case 'ascending':
        setSorting('descending');
        break;

      default:
        break;
    }
  };

  const dateHandler = (name, value) => {
    setCustomDateRange(state => ({
      ...state,
      [name]: value
    }));
  };

  const clearSearchHandler = () => {
    setSorting('');
    setCustomDateRange({
      fromDate: 'YYYY-MM-DD',
      toDate: 'YYYY-MM-DD'
    })
  }

  let buttonSortText = 'Sortowanie nr pasiek: (kliknij)';
  if (sorting === 'ascending') {
    buttonSortText = 'Sortowanie nr pasiek: ROSNĄCO';
  } else if (sorting === 'descending') {
    buttonSortText = 'Sortowanie nr pasiek: MALEJĄCO';
  }

  return (
    <div className={classes.Apiaries}>
      <Toastbar
        info={info}
        warning={warning}
        infoTimePassedHandler={() => setInfo('')}
        warningTimePassedHandler={() => setWarning('')} />
      <h2>Lista pasiek</h2>
      <hr />
      <Search customStyle={{ padding: '0 15px 0 15px' }}>
        <Button
          onClickHandler={sortHandler}
          text={buttonSortText}
          customStyle={{ width: '200px', marginBottom: '5px' }} />
        <DateRange
          onDateRangeHandler={dateHandler}
          fromDate={customDateRange.from}
          toDate={customDateRange.to} />
        <Button
          onClickHandler={clearSearchHandler}
          text='X'
          customStyle={{ position: 'absolute', right: '0', width: '30px' }} />
      </Search>
    </div>
  );
}