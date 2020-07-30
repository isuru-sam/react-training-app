import CourseActionTypes from './course.types'
export const updateCourses=(courses)=>({
type:CourseActionTypes.UPDATE_COURSES,
payload:courses
})