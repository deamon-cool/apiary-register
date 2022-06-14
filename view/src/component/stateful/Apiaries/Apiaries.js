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
    from: getDateString(),
    to: getDateString()
  });

  //download date

  const sortHandler = () => {

  };

  const dateHandler = (name, value) => {

  };

  return (
    <div className={classes.Apiaries}>
      <Search>
        <Button
          onClickHandler={sortHandler}
          text='Sortuj' />
        <DateRange
          onDateRangeHandler={dateHandler}
          fromDate={customDateRange.from}
          toDate={customDateRange.to} />
        {/* clear search */}
      </Search>
    </div>
  );
}