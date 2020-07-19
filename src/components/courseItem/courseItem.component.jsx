

import React from "react";
import './courseItem.styles.scss'
const CourseItem=({title,desc,imageUrl,id})=>(


<div style={{
    backgroundImage:`url(${imageUrl})`
 }} 
className="course-item">
<div className="content">
    <h1 className="course">{title}</h1>
    <span className="desc">{desc}</span>
</div>
</div>


)

export default CourseItem;