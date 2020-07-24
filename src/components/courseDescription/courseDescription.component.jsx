import React from "react";
import {withRouter} from "react-router-dom"
import './courseDescription.styles.scss'
import Button from "@material-ui/core/Button";
import courseData from '../courseList/courseList.data.js'
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import 'date-fns';
import TextField from '@material-ui/core/TextField';
import moment from 'moment'

import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
  }
class  CourseDescription extends React.Component
{
constructor(){
    super();
    const dateNow = new Date(); // Creating a new date object with the current date and time
const year = dateNow.getFullYear(); // Getting current year from the created Date object
const monthWithOffset = dateNow.getUTCMonth() + 1; // January is 0 by default in JS. Offsetting +1 to fix date for calendar.
const month = // Setting current Month number from current Date object
  monthWithOffset.toString().length < 2 // Checking if month is < 10 and pre-prending 0 to adjust for date input.
    ? `0${monthWithOffset}`
    : monthWithOffset;
const date =
  dateNow.getUTCDate().toString().length < 2 // Checking if date is < 10 and pre-prending 0 if not to adjust for date input.
    ? `0${dateNow.getUTCDate()}`
    : dateNow.getUTCDate();

const materialDateInput = `${year}-${month}-${date}`; 
    this.state={courseData:courseData,open:false,selectedDate:materialDateInput,fromTime:'8',toTime:'4'};
}
handleClick=async event => {
    event.preventDefault();
    this.setState({
        open:true
    })
}

 handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
        open:false
    })
  };

  calculateTimes(toTime){
    //this.state = {startDate:1519026163000, timeEnd:1519126755000} // example

    const {selectedDate,fromTime}=this.state;
    let dateTimeA = moment(selectedDate + ' ' + fromTime, 'YYYY-MM-DD HH:mm');
    let dateTimeB = moment(selectedDate + ' ' + toTime, 'YYYY-MM-DD HH:mm');
  
let datetimeC = dateTimeB.diff(dateTimeA, 'minutes');
console.log(datetimeC);
  }

   handleDateChange = (date) => {
    console.log(date.target.value)
   this.setState({
       selectedDate:date.target.value
   })
  };
  handleFromTimeChange = (time) => {
      console.log(time.target.value)
    this.setState({
        fromTime:time.target.value
    })
   };

   handleToTimeChange = (time) => {
    console.log(time.target.value)
    this.calculateTimes(time.target.value)
    this.setState({
        toTime:time.target.value
    })

   

   };
render() {
    console.log('test');
    const {history}=this.props
    const {open,selectedDate}=this.state;
    return <div className="coursetitle-list">
    <div className="diectory-menu">
        <ul>
    {
        this.state.courseData.filter(item=>item.id===1).map(({course,desc,id})=>(<li key={id}>{course}:{desc}</li>))
    }
    </ul>
    </div>
    <div>
    <TextField
    id="date"
    label="Date"
    type="date"
    defaultValue={selectedDate}
    onChange={e=>this.handleDateChange(e)}
//value={selectedDate}
    //className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
  />
   <TextField
    id="time"
    label="From"
    type="time"
    defaultValue="07:00"
  //  className={classes.textField}
  onChange={e=>this.handleFromTimeChange(e)}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
   <TextField
    id="time"
    label="To"
    type="time"
    defaultValue="09:00"
    onChange={e=>this.handleToTimeChange(e)}
    //className={classes.textField}
    InputLabelProps={{
      shrink: true,
    }}
    inputProps={{
      step: 300, // 5 min
    }}
  />
  </div>
  <div>
    <Button type="submit" variant="contained" color="primary"  onClick={(event) => this.handleClick(event)}>Add To Cart</Button>
    <Snackbar open={open} autoHideDuration={3000}  anchorOrigin={{ vertical: 'top', horizontal: 'center'}} onClose={(event) => this.handleClose(event)}>
        <Alert onClose={(event) => this.handleClose(event)} severity="success">
          Item added succesfully
        </Alert>
      </Snackbar>
    </div>
    </div>
    }
    }
    

export default withRouter(CourseDescription);