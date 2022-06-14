import { useState } from 'react';

import classes from './Apiaries.module.css';

import Search from '../../stateless/Search/Search';
import Button from '../../stateless/Button/Button';
import DateRange from '../../stateless/DateRange/DateRange';

import getDateString from '../../../functions/getDateString';
import validateDate from '../../../functions/validateDate';

export default function Apiaries() {
  const [sorting, setSorting] = useState('');
  const [customDateRange, setCustomDateRange] = useState({
    fromDate: 'YYYY-MM-DD',
    toDate: 'YYYY-MM-DD'
  });

  //download date

  const sortHandler = () => {

  };

  const dateHandler = (name, value) => {

  };

  const clearSearchHandler = () => {
    setSorting('');
    setCustomDateRange({
      from: 'YYYY-MM-DD',
      to: 'YYYY-MM-DD'
    })
  }

  return (
    <div className={classes.Apiaries}>
      <Search customStyle={{marginTop: '10px', padding: '0 15px 0 15px'}}>
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