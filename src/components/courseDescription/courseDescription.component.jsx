import React from "react";
import './courseDescription.styles.scss'
import courseData from '../courseList/courseList.data.js'
class  CourseDescription extends React.Component
{
constructor(){
    super();
    this.state={courseData:courseData};
}
render() {
    console.log('test');
    return <div className="coursetitle-list">
    <div className="diectory-menu">
        <ul>
    {
        this.state.courseData.filter(item=>item.id===1).map(({course,desc,id})=>(<li key={id}>{course}:{desc}</li>))
    }
    </ul>
    </div>
    </div>
    }
    }
    

export default CourseDescription;