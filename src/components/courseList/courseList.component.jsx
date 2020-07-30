import React from "react";
import './courseList.styles.scss'
import courseData from './courseList.data.js'
import CourseItem from "../courseItem/courseItem.component";
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux'
import {firestore} from '../firebase/firebase.utils.js'
import {updateCourses} from '../../redux/course/course.actions'
class  CourseList extends React.Component
{
    unsub=null;
constructor(){
    super();
    this.state={courseData:[]};
}
componentDidMount(){
    var cdata=[];
    const courseCollectionref= firestore.collection('courses')
  this.unsub=  courseCollectionref.onSnapshot(async course => {
       course.docs.map(doc=>{cdata.push(doc.data())})
      
        this.setState({courseData:cdata});
        this.props.updateCourses(cdata)
   
    })
  //  console.log(cdata)
}
componentWillUnmount(){
//this.unsub.uns
}
render() {
return <div className="course-list">
<div className="diectory-menu">
<Grid container spacing={3}>
{
    
    this.state.courseData.map(({course,desc,imageUrl,id,subSections})=>
    (<Grid item xs={4} key={id}>
        <CourseItem key={id} title={course} desc={desc} imageUrl={imageUrl} id={id} subSections={subSections}/>
        </Grid>))

}
</Grid>
</div>
</div>

}
}
const mapDispatchToProps=(dispatch)=>({
    updateCourses:courses=>dispatch(updateCourses(courses))
});
export default connect(null,mapDispatchToProps)(CourseList);