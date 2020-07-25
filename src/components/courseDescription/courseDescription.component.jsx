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
import {connect} from 'react-redux'
import {addItem} from '../../redux/cart/cart.actions.js'
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



    this.state={open:false,date:materialDateInput,selectedDate:materialDateInput,fromTime:'07:00',toTime:'09:00'};
    
//this.course=courseData.filter((c) => task.duration >= 120 );
}
handleClick=async event => {
    event.preventDefault();
  
   console.log('here')

   const {date,fromTime,toTime,courseData}=this.state;
   let dateTimeA = moment(date + ' ' + fromTime, 'YYYY-MM-DD HH:mm');
   let dateTimeB = moment(date + ' ' + toTime, 'YYYY-MM-DD HH:mm');
 
let datetimeC = dateTimeB.diff(dateTimeA, 'minutes');
let hours =(Math.floor((datetimeC)/60))
let mins= (datetimeC)%60
let totalmins=datetimeC
let item={
    date:date,
    fromTime:fromTime,
    toTime:toTime,
    mins:mins,
    totalmins:totalmins,
    courseData:courseData,
    hours:hours
}
addItem(item)
    


    //const {courseData,date,fromTime,toTime,hours,minutes,totalMinutes}=this.state;
console.log(item);
}


componentDidMount(){
    let id =this.props.match.params.id
    console.log(id)
    let result = courseData.find(c => (c.id == id  ));
    console.log(result)
    this.setState({courseData:result})
}

 handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
        open:false
    })
  };

  calculateTimes(){
    //this.state = {startDate:1519026163000, timeEnd:1519126755000} // example

    const {date,fromTime,toTime}=this.state;
    let dateTimeA = moment(date + ' ' + fromTime, 'YYYY-MM-DD HH:mm');
    let dateTimeB = moment(date + ' ' + toTime, 'YYYY-MM-DD HH:mm');
  
let datetimeC = dateTimeB.diff(dateTimeA, 'minutes');
this.setState({
    hours:(datetimeC+60)/60,
    minutes:(datetimeC+60)%60,
    totalMinutes:(datetimeC+60)
})
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
   // this.calculateTimes(time.target.value)
    this.setState({
        toTime:time.target.value
    })

   

   };
render() {
  
    const {history}=this.props
    const { match: { params } } = this.props;
    console.log(params.id);
    const {open,selectedDate,courseData}=this.state;
    return <div className="coursetitle-list">
    <div className="diectory-menu">
        <ul>
    {
        courseData?(<li key={courseData.id}>{courseData.course}:{courseData.desc}</li>):'lo'
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
    
const mapDispatchToProps=dispatch=>({
    addItem:item=>dispatch(addItem(item))
})
export default connect(null,mapDispatchToProps) (withRouter(CourseDescription));