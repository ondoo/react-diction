// bucket.js
import { db } from "../../firebase";
import{collection, getDocs, addDoc } from"firebase/firestore"
// Actions
const CREATE = "bucket/CREATE";
const UPDATE = "bucket/UPDATE";
const DELETE = "bucket/DELETE";
const LOAD = "bucket/LOAD";

const initialState = {
  list: [
    { text: "component", using: "redux", ex: "redux", completed: false },
    { text: "route",  using: "redux", ex: "redux", completed: false },
    { text: "redux", using: "redux", ex: "redux", completed: false },

  ],
};

// Action Creators
export function createBucket(bucket) {
  console.log("확인",bucket)
  return { type: CREATE, bucket: bucket };
}

export function updateBucket(bucket_index) {
  return { type: UPDATE, bucket_index };
}
export function loadBucket(bucket) {
  return { type: LOAD, bucket };
}
export function deleteBucket(bucket_index) {
  return { type: DELETE, bucket_index };
}

//middleware

export const loadBucketFB=()=>{
  return async function(dispatch){
  const bucket_data= await getDocs(collection(db,"react-diction"));
  
  let bucket_list=[];
  bucket_data.forEach((v)=>{
  bucket_list.push({...v.data()})
  
  })
  console.log(bucket_list,"여기로")
  dispatch(loadBucket(bucket_list))
  }
  }

  export const createBucketFB=(bucket)=>{
  return async function(dispatch){
    await addDoc(collection(db,"react-diction"),bucket);//서버에 저장한다.

  }
  }
// Reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case "bucket/CREATE": {
      const new_bucket_list = [...state.list, action.bucket];
      console.log("리듀서",new_bucket_list)
      return { list: new_bucket_list };
      
    }

    case "bucket/LOAD": {
      const new_bucket_list = action.bucket;
      console.log(new_bucket_list)
     
console.log("액션",action.bucket)
       return { list: new_bucket_list };
      
    }

    case "bucket/UPDATE": {
      const new_bucket_list = state.list.map((l, idx) => {
        if (parseInt(action.bucket_index) === idx) {
          return { ...l, completed: true };
        } else {
          return l;
        }
      });
      console.log({ list: new_bucket_list });
      return { list: new_bucket_list };
    }

    case "bucket/DELETE": {
      const new_bucket_list = state.list.filter((l, idx) => {
        return parseInt(action.bucket_index) !== idx;
      });

      return { list: new_bucket_list };
    }
    default:
      return state;
  }
}
