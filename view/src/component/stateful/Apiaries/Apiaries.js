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

  return (
    <div className={classes.Apiaries}>
      <Search customStyle={{marginTop: '10px', padding: '0 15px 0 15px'}}>
      <Toastbar
        info={info}
        warning={warning}
        infoTimePassedHandler={() => setInfo('')}
        warningTimePassedHandler={() => setWarning('')} />
        <Button
          onClickHandler={sortHandler}
          text='Sortuj' />
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