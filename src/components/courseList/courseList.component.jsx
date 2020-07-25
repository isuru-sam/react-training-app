import React from "react";
import './courseList.styles.scss'
import courseData from './courseList.data.js'
import CourseItem from "../courseItem/courseItem.component";
import Grid from '@material-ui/core/Grid';
class  CourseList extends React.Component
{
constructor(){
    super();
    this.state={courseData:courseData};
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
export default CourseList;