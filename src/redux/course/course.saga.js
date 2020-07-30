import {takeEvery,call,put} from 'redux-saga/effects'
import CourseActionTypes from './course.types'
import firestore from '../../components/firebase/firebase.utils'
import {fetchCoursesSuccess,fetchCoursesFailure} from './course.actions'

export function getCourseData(snapshot){
    var cdata=[];
    snapshot.docs.map(doc=>{cdata.push(doc.data())})
    return cdata;
}

export function* fetchCoursesAsync(){
yield console.log('fetching')
try{

const courseCollectionref= firestore.collection('courses')
const snapshot=yield courseCollectionref.get()
const cdata=yield call(getCourseData,snapshot)
yield put(fetchCoursesSuccess(cdata))
}catch(error){
yield put(fetchCoursesFailure(error.message))
}


  
}
export function* fetchCoursesStart(){
    yield takeEvery(CourseActionTypes.FETCH_COURSES_START,fetchCoursesAsync)
}