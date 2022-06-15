import { useEffect, useState } from 'react';

import classes from './Apiaries.module.css';

import { GET_APIARIES_FETCH_URL } from '../../../config/config';
import Search from '../../stateless/Search/Search';
import Button from '../../stateless/Button/Button';
import DateRange from '../../stateless/DateRange/DateRange';
import Toastbar from '../../stateless/Toastbar/Toastbar';
import List from '../../stateless/List/List';
import Apiary from '../../stateless/Apiary/Apiary';

export default function Apiaries() {
  const [warning, setWarning] = useState('');
  const [info, setInfo] = useState('');
  const [sorting, setSorting] = useState('');
  const [dateRange, setDateRange] = useState({
    startDate: new Date(),
    endDate: new Date()
  });
  const [apiaries, setApiaries] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchApiaries() {
      const init = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        },
        signal: abortController.signal
      };
      fetch(GET_APIARIES_FETCH_URL, init)
        .then(res => res.json())
        .then(data => {
          if (data.error) {
            setWarning(data.error);

            return;
          }

          setApiaries(data.apiaries);
        })
        .catch(err => {
          console.log(err);
          setWarning('Nie można pobrać listy pasiek.');
        })
    }

    fetchApiaries();

    return () => {
      abortController.abort();
    }
  }, []);

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

  const startDateHandler = (date) => {
    setDateRange(state => ({
      ...state,
      startDate: date
    }));
  };

  const endDateHandler = (date) => {
    setDateRange(state => ({
      ...state,
      endDate: date
    }));
  };

  const clearSearchHandler = () => {
    setSorting('');
    setDateRange({
      startDate: new Date(),
      endDate: new Date()
    });
  }

  let buttonSortText = 'Sortowanie nr pasiek: (kliknij)';
  let sortedApiaries = [...apiaries];
  if (sorting === 'ascending') {
    buttonSortText = 'Sortowanie nr pasiek: ROSNĄCO';

    sortedApiaries = sortedApiaries.sort((prevApiary, nextApiary) =>
      prevApiary.apiaryNumber - nextApiary.apiaryNumber);
  } else if (sorting === 'descending') {
    buttonSortText = 'Sortowanie nr pasiek: MALEJĄCO';

    sortedApiaries = sortedApiaries.sort((prevApiary, nextApiary) =>
      nextApiary.apiaryNumber - prevApiary.apiaryNumber);
  }

  let filteredApiaries = [...sortedApiaries];

  const apiaryItems = sortedApiaries.map(apiary => {
    return <Apiary
      key={apiary._id}
      name={apiary.name}
      date={apiary.date}
      apiaryNumber={apiary.apiaryNumber} />
  });

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
          customStyle={{ width: '200px', marginBottom: '10px' }} />
        <DateRange
          startDate={dateRange.startDate}
          onChangeStartDate={startDateHandler}
          endDate={dateRange.endDate}
          onChangeEndDate={endDateHandler} />
        <Button
          onClickHandler={clearSearchHandler}
          text='X'
          customStyle={{ position: 'absolute', right: '0', width: '30px' }} />
      </Search>
      <List>
        {apiaryItems}
      </List>
    </div>
  );
}