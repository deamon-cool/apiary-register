import classes from './ApiaryNumberInput.module.css';
import Input from "../Input/Input";

let dateNumberStyle = {
  width: '95px',
  borderRadius: '10px 0 0 10px',
  borderRight: 'none',
  textAlign: 'center'
};
let userNumberStyle = {
  width: '60px',
  borderRadius: '0',
  textAlign: 'center'
};
let controlSumStyle = {
  width: '45px',
  borderRadius: '0 10px 10px 0',
  borderLeft: 'none',
  textAlign: 'center'
};

if (window.innerWidth > 700) {
  dateNumberStyle.width = '178px';
  userNumberStyle.width = '120px';
  controlSumStyle.width = '90px'
}

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
        customStyle={dateNumberStyle} />
      <Input
        customStyle={userNumberStyle}
        onChangeHandler={inputHandler}
        value={userValue} />
      <Input
        value={controlSum}
        readOnly={true}
        customStyle={controlSumStyle} />
    </div>
  );
}