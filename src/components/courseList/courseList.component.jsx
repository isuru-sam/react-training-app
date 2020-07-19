import React from "react";
import './courseList.styles.scss'

import CourseItem from "../courseItem/courseItem.component";
class  CourseList extends React.Component
{
constructor(){
    super();
    this.state={ sections:[
        {
          course: 'Java',
          imageUrl: '/assets/images/java.jpg',
          id: 1,
          desc: 'Java'
        },
        {
          course: 'C',
          imageUrl: '/assets/images/oracle.png',
          id: 2,
          desc: 'C'
        },
        {
          course: 'C+',
          imageUrl: '/assets/images/java.jpg',
          id: 3,
          desc: 'C+'
        },
        {
          course: 'Oracle',
          imageUrl: '/assets/images/oracle.png',
          size: 'large',
          id: 4,
          desc: 'Oracle'
        },
        {
          course: 'Php',
          imageUrl: '/assets/images/oracle.png',
          size: 'large',
          id: 5,
          desc: 'Php'
        }
      ]
}
}

render() {
return <div className="course-list">
<div className="diectory-menu">
{
    this.state.sections.map(({title,desc,imageUrl,id})=>(<CourseItem key={id} title={title} desc={desc} imageUrl={imageUrl} id={id}/>))
}
</div>
</div>
}
}
export default CourseList;