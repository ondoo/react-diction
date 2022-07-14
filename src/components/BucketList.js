// 리액트 패키지를 불러옵니다.
import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {loadBucketFB} from "../redux/modules/bucket"

const BucketList = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const my_lists = useSelector((state) => state.bucket.list);

    React.useEffect( ()=>{
    dispatch(loadBucketFB())
    // refCard.current.addEventListener("click",showEvent);
    return()=>{
    // refCard.current.removeEventListener("click",showEvent);
    }
    
    },[]);

  return (
    <ListStyle>
      {my_lists.map((list, index) => {
        return (
          <ItemStyle
            completed={list.completed}
            className="list_item"
            key={index}
            onClick={() => {
              history.push("/detail/" + index);
            }}
          >
            <div>{list.text}</div>
            <div>{list.using}</div>
            <div>{list.ex}</div>
          </ItemStyle>
        );
      })}
    </ListStyle>
  );
};

const ListStyle = styled.div`
    float: left;
  flex-direction: column;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  
`;

const ItemStyle = styled.div`
	height: 200px;
	width: 350px;
    border-radius: 15px;
    display: inline-block;
    position: relative;


  padding: 20px;
  margin: 30px;
  background-color: ${(props) => (props.completed ? "orange" : "#e6bbff")};
`;

export default BucketList;
