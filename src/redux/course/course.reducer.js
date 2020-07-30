import CourseActionTypes from './course.types';


const INITIAL_STATE={
    hidden:true,
    courses:[]
}

const courseReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CourseActionTypes.UPDATE_COURSES:
        return {
            ...state,courses:action.payload
        }; 
        
          default:
        return state;
    }
  };
  
  export default courseReducer;