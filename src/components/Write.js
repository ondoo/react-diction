import React from "react";
import { useParams, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteBucket, updateBucket } from "../redux/modules/bucket";
import { createBucket,createBucketFB } from "../redux/modules/bucket";


const Write = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const params = useParams();
  const bucket_index = params.index;
  const bucket_list = useSelector((state) => state.bucket.list);

  const textRef = React.useRef(null);
  const usingRef = React.useRef(null);
  const exRef = React.useRef(null);

  function addword() {
    dispatch(
      createBucketFB({
        text: textRef.current.value,
        using: usingRef.current.value,
        ex: exRef.current.value,
      })
    );
    history.push("/")
  }

  return (
    <div>
      <h1>단어 추가하기</h1>
      <hr></hr>
      <p>단어</p>
      <input type="text" ref={textRef}></input>
      <p>사용</p>
      <input type="text" ref={usingRef}></input>
      <p>코드</p>
      <input type="text" ref={exRef}></input>
      <button onClick={addword}>저장하기</button>
    </div>
  );
};

export default Write;
