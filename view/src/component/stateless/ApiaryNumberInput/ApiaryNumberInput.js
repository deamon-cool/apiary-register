import classes from './ApiaryNumberInput.module.css';
import Input from "../Input/Input";

export default function ApiaryNumberInput(props) {
  const customDate = props.customDate;
  const userValue = props.userValue;
  const controlSum = props.controlSum;

  const inputHandler = (e) => {
    props.onInputHandler(e);
  }

  return (
    <div className={classes.ApiaryNumberInput}>
      <Input
        value={customDate}
        readOnly={true}
        customStyle={{
          width: '95px',
          borderRadius: '10px 0 0 10px',
          borderRight: 'none'
        }} />
      <Input
        customStyle={{
          width: '60px',
          borderRadius: '0'
        }}
        onChangeHandler={inputHandler}
        value={userValue} />
      <Input
        value={controlSum}
        readOnly={true}
        customStyle={{
          width: '45px',
          borderRadius: '0 10px 10px 0',
          borderLeft: 'none'
        }} />
    </div>
  );
}