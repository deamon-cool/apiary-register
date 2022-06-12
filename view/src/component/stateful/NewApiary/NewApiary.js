import classes from './NewApiary.module.css';

export default function NewApiary() {

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
          2022-06-12<input />789
        </fieldset>

        <button>Zapisz</button>
      </form>
    </div>
  );
}
